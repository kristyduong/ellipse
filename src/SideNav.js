import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Linkblock from './Link.js';
import Notebook from './Notebook.js'

const linkquery = gql`
{
  links {
    id, url, description
  }
}
`;

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#222',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

function ClippedDrawer(props) {
  const { classes } = props;

  return (
    <Router>
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            ellipse
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route path="/about" component={About} />
        <Route path="/activities" component={Activities} />
        <Route path="/notebook" component={Notebook} />
      </main>
    </div>
    </Router>
  );
}

class About extends Component {
  render() {
    return(
      <div>
        <p className="main">Ellipse is a platform meant to promote creativity among 
        writers, artists, or anyone who needs a little inspiration. Features of this 
        website will include writing prompts and activities, quote lists, boards, and 
        project spaces. It will be a visually aesthetic and customizable experience.</p>
        <p>Ellipses indicate an unfinished statement or silence in the space where
        there is something to be said-- like a story yet to be told. They are a 
        placeholder for endless possibilities.</p>
      </div>
    ); 
  }
}

class Activities extends Component {
  render() {
    return(
      <p className="main">Hitting a road block? Try out one of our writing activities!</p>
    );
  }
}

class Explore extends Component {
  render() {
    return(
      <p className="main"></p>
    );
  }
}

class Settings extends Component {
  render() {
    return(
      <p className="main"></p>
    );
  }
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);