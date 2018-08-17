import graphene
from graphene_django import DjangoObjectType
from users.schema import UserType
from django.db.models import Q

from .models import Link

class LinkType(DjangoObjectType):
    class Meta:
        model = Link

class Query(graphene.ObjectType):
    links = graphene.List(
        LinkType,
        search=graphene.String(),
        first=graphene.Int(),
        skip=graphene.Int(),
    )

    def resolve_links(self, info, search=None, first=None, skip=None, **kwargs):
        qs = Link.objects.all()

        if search:
            filter = (
                Q(url__icontains=search) |
                Q(description__icontains=search)
            )
            qs = qs.filter(filter)

        if skip:
            qs = qs[skip::]

        if first:
            qs = qs[:first]

        return qs

class DeleteLink(graphene.Mutation):
    url = graphene.String()

    class Arguments:
        url = graphene.String()

    def mutate(self, info, url):
        dlink = Link.objects.filter(url=url).delete()
        return dlink

class CreateLink(graphene.Mutation):
    id = graphene.Int()
    url = graphene.String()
    description = graphene.String()
    posted_by = graphene.Field(UserType)

    class Arguments:
        url = graphene.String()
        description = graphene.String()

    def mutate(self, info, url, description):
        user = info.context.user or None

        link = Link(
            url=url,
            description=description,
            posted_by=user,
        )
        link.save()

        return CreateLink(
            id=link.id,
            url=link.url,
            description=link.description,
            posted_by=link.posted_by,
        )

class Mutation(graphene.ObjectType):
    create_link = CreateLink.Field()
    delete_link = DeleteLink.Field()