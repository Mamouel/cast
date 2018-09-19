/* @flow */
import type { State } from "../../state/state.type.js";
import type { Action } from "./stories.actions.js";
import type { StoriesState, Story as StoryType } from "./stories.type";

import { requestStories } from "./../stories/stories.actions";
import Section from "../../components/section/section";
import Story from "./../stories/components/story";

import { connect } from "react-redux";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Typography from "material-ui/Typography";
import AppBar from "material-ui/AppBar";

type Props = {
    stories: StoriesState,
    dispatch: Action => void
  };

class Home extends Component<Props> {
    componentDidMount() {
        this.props.dispatch(requestStories());
      }
  render() {
    const { stories: { stories, error, timestamp } } = this.props;
    return (
      <div>
        <div className="home-header" style={{ backgroundColor: "orange", width: "100%", height: 250, textAlign: "center", color: "white" }}>
          <h1 style={{ paddingTop: 75 }}>Welcome to Cast</h1>
          <h2>A way to share all your stories</h2>
        </div>
        <div>
          <Section title="Latest stories" info={{ error, timestamp }}>
            <div style={{ display: "flex", marginLeft: 50 }}>
              {stories.map((story: StoryType, idx: number) => (
                <Story key={idx} story={story} />
              ))}
            </div>
          </Section>
        </div>
        <AppBar
          position="static"
          color="primary"
          style={{ marginBottom: 16, padding: 8 }}
          classes={{
            colorPrimary: "navbar-color"
          }}
        ></AppBar>
        <div>
          <NavLink to="/create-story" style={{ textDecoration: "none", color: "white" }}>
            <Typography type="subheading" color="primary">
              Create your own!
            </Typography>
          </NavLink>
        </div>
        <div>
          <NavLink to="/stories" style={{ textDecoration: "none", color: "white" }}>
            <Typography type="subheading" color="primary">
              Show all stories
            </Typography>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default connect((state: State) => ({
    stories: state.stories
  }))(Home);