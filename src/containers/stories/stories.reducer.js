// @flow
import type { StoriesState } from "./stories.type";
import type { Action } from "./stories.actions";

import { fx } from "redux-data-fx";

export const initialState: StoriesState = {
  stories: [],
  error: null,
  loading: false,
  timestamp: Date.now(),
  username: "",
};

type StoriesReducer = (state: StoriesState, action: Action) => StoriesState;
export const stories: StoriesReducer = (
  state: StoriesState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "REQUEST_STORIES":
      return fx({ ...state, loading: true }, [
        {
          effect: "fetch",
          url: "stories?dateOrder=" + action.dateOrder,
          method: "GET",
          onSuccess: "RECEIVE_STORIES",
          onError: "FAIL_STORIES"
        }
      ]);
    case "RECEIVE_STORIES":
      return {
        ...state,
        stories: action.payload,
        loading: false,
        error: null,
        timestamp: action.timestamp,
      };

    case "FAIL_STORIES":
      return {
        ...state,
        error: "FAIL",
        loading: false
      };
    case "REQUEST_CREATE_STORY":
      return fx({ ...state, loading: true }, [
        {
          effect: "fetch",
          url: "stories",
          method: "POST",
          onSuccess: "RECEIVE_CREATE_STORY",
          onError: "FAIL_CREATE_STORY",
          body: action.story
        }
      ]);
    case "RECEIVE_CREATE_STORY":
      return {
        ...state,
        stories: [...(action.payload || []), ...state.stories],
        loading: false,
        error: null,
        timestamp: action.timestamp
      };

    case "FAIL_CREATE_STORY":
      return {
        ...state,
        error: "FAIL",
        loading: false
      };
<<<<<<< HEAD
=======
    
    // case "REQUEST_DELETE_STORY":
    //   return fx({ ...state, loading: true }, [
    //     {
    //       effect: "fetch",
    //       url: "stories?title=" + action.title,
    //       method: "DELETE",
    //       onSuccess: "RECEIVE_DELETE_STORY",
    //       onError: "FAIL_DELETE_STORY",
    //     }
    //   ]);







      case "REQUEST_ONE_STORY":
      return fx({ ...state, loading: true }, [
        {
          effect: "fetch",
          url: "stories?timestamp=" + action.timestamp,
          method: "GET",
          onSuccess: "RECEIVE_ONE_STORIES",
          onError: "FAIL_STORY"
        }
      ]);
    case "RECEIVE_ONE_STORY":
      return {
        ...state,
        stories: action.payload,
        loading: false,
        error: null,
        timestamp: action.timestamp,
      };

    case "FAIL_STORY":
      return {
        ...state,
        error: "FAIL",
        loading: false
      };
>>>>>>> fe8cac762e617ecbe8676d2ae919e8ef21b49017

    default:
      return state;
  }
};
