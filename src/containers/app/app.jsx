/* @flow */

import React from "react";
import PropTypes from 'prop-types';

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import { NavLink } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faSwatchbook } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import "./app.css";

library.add(faHeart);
library.add(faSwatchbook);
library.add(faPlusCircle);

const styles = {
  root: {
    background: "$primary",
    borderRadius: 3,
    border: 0,
    color: "white",
    fontSize: 24,
    height: 48,
    padding: "0 30px",
    width: "100%",
    margin: 10,
    display: "flex",
    justifyContent: "space-between",
  },
  label: {
    textTransform: "capitalize",
  },
};

type Props = {
  children: Array<Object> | Object
};


const App = (props: Props) => {

  const { classes } = props;

  const showIcon = (icon) => {
    document.getElementById(icon).style.display="block"
  };

  const hideIcon = (icon) => {
    document.getElementById(icon).style.display="none";
  };

  return (
    <div className="App">
      <AppBar
        position="static"

        
        classes={{
          colorPrimary: "navbar-color"
        }}
      >
        <div className="navbar-container">
          <div className="btn-container">
            <NavLink className="nav-link" to="/">
              <Button 
                className={classes.button}  
                type="subheading" 
                color="inherit" 
                classes={{
                  root: classes.root, // class name, e.g. `classes-nesting-root-x`
                  label: classes.label, // class name, e.g. `classes-nesting-label-x`
                }} 
                onMouseOver={() => { showIcon("home-icon") }}
                onMouseOut={() => { hideIcon("home-icon") }}
              >
                Home
                <FontAwesomeIcon id="home-icon" icon="heart" style={{ display: "none"}}/> 
              </Button>
            </NavLink>
          </div>

          <div className="btn-container">
            <NavLink className="nav-link" to="/stories">
              <Button 
                className={classes.button} 
                type="subheading" 
                color="inherit" 
                classes={{
                  root: classes.root,
                  label: classes.label,
                }}
                onMouseOver={() => { showIcon("story-icon") }}
                onMouseOut={() => { hideIcon("story-icon") }}
              >
                Stories
                <FontAwesomeIcon id="story-icon" icon="swatchbook" style={{ display: "none"}}/>
              </Button>
            </NavLink>
          </div>

          <div className="btn-container">
            <NavLink className="nav-link" to="/create-story">
              <Button 
                className={classes.button} 
                type="subheading" color="inherit" 
                classes={{
                  root: classes.root,
                  label: classes.label, 
                }}
                onMouseOver={() => { showIcon("create-story-icon") }}
                onMouseOut={() => { hideIcon("create-story-icon") }}
              >
                Create story
                <FontAwesomeIcon id="create-story-icon" icon="plus-circle" style={{ display: "none"}}/>
              </Button>
            </NavLink>
          </div>

          <div className="btn-container">
            <NavLink className="nav-link" to="/about-us">
              <Button 
                className={classes.button} 
                type="subheading" color="inherit" 
                classes={{
                  root: classes.root,
                  label: classes.label,
                }}
                onMouseOver={() => { showIcon("about-us-icon") }}
                onMouseOut={() => { hideIcon("about-us-icon") }}
              >
                About us
                <FontAwesomeIcon id="about-us-icon" icon="heart" style={{ display: "none"}}/>
              </Button>
            </NavLink>
          </div>

        </div>
      </AppBar>
      {props.children}
      <footer>

      </footer>
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);