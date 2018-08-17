import graphene
import random
from graphene_django import DjangoObjectType

from .models import Prompt

class PromptType(DjangoObjectType):
	class Meta:
		model = Prompt

class Query(graphene.ObjectType):
	prompts = graphene.List(PromptType, rand=graphene.Boolean())

	def resolve_prompts(self, info, rand=False, **kwargs):
		items = Prompt.objects.all()

		if rand:
			count = items.count()
			slice = random.randint(0, count - 1)
			items = items[slice: slice + 1]

		return items

class CreatePrompt(graphene.Mutation):
	id = graphene.Int()
	title = graphene.String()
	prompt_type = graphene.String()
	text = graphene.String()

	class Arguments:
		title = graphene.String()
		prompt_type = graphene.String()
		text = graphene.String()

	def mutate(self, info, title, prompt_type, text):
		prompt = Prompt(
			title=title,
			prompt_type=prompt_type,
			text=text,
		)
		prompt.save()

		return CreatePrompt(
			id=prompt.id,
			title=prompt.title,
			prompt_type=prompt.prompt_type,
			text=prompt.text,
		)

class EditPrompt(graphene.Mutation):
	id = graphene.Int()
	title = graphene.String()
	prompt_type = graphene.String()
	text = graphene.String()

	class Arguments:
		id = graphene.Int()
		title = graphene.String(required=False)
		prompt_type = graphene.String(required=False)
		text = graphene.String(required=False)

	def mutate(self, info, id, title=None, prompt_type=None, text=None):
		prompt = Prompt.objects.get(id=id)
		if title:
			prompt.title=title
		if prompt_type:
			prompt.prompt_type=prompt_type
		if text:
			prompt.text=text

		prompt.save()

		return EditPrompt(
			id=prompt.id,
			title=prompt.title,
			prompt_type=prompt.prompt_type,
			text=prompt.text,
		)

class DeletePrompt(graphene.Mutation):
	id = graphene.Int()

	class Arguments:
		id = graphene.Int()

	def mutate(self, info, id):
		dprompt = Prompt.objects.filter(id=id).delete()
		return dprompt

class Mutation(graphene.ObjectType):
	create_prompt = CreatePrompt.Field()
	edit_prompt = EditPrompt.Field()
	delete_prompt = DeletePrompt.Field()