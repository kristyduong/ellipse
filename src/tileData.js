// This file is shared across the demos.

import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookIcon from '@material-ui/icons/BookSharp';
import SendIcon from '@material-ui/icons/Send';
import RowingIcon from '@material-ui/icons/Rowing';
import SettingsIcon from '@material-ui/icons/SettingsSharp';
import RunIcon from '@material-ui/icons/DirectionsRun';
import CreateIcon from '@material-ui/icons/Create';
import BrushIcon from '@material-ui/icons/Brush';

export const mailFolderListItems = (
  <div>
    <ListItem button component={Link} to="/new">
      <ListItemIcon>
        <CreateIcon />
      </ListItemIcon>
      <ListItemText primary="New Project" />
    </ListItem>
    <ListItem button component={Link} to="/notebook">
      <ListItemIcon>
        <BookIcon />
      </ListItemIcon>
      <ListItemText primary="Notebook" />
    </ListItem>
    <ListItem button component={Link} to="/explore">
      <ListItemIcon>
        <RowingIcon />
      </ListItemIcon>
      <ListItemText primary="Explore" />
    </ListItem>
    <ListItem button component={Link} to="/activities">
      <ListItemIcon>
        <BrushIcon />
      </ListItemIcon>
      <ListItemText primary="Activities" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button component={Link} to="/about">
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
    <ListItem button component={Link} to="/settings">
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <RunIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
  </div>
);