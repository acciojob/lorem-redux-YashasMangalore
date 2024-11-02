import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk"; // Corrected import for thunk

const FETCH_POSTS_START = "FETCH_POSTS_START";
const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";

const initialState = {
  posts: [],
  isLoading: false,
};

const fetchPostsStart = () => {
  return {
    type: FETCH_POSTS_START,
  };
};

const fetchPostsSuccess = (data) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: data,
  };
};

const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsStart());
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchPostsSuccess(data));
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        // You may also want to handle errors here
      });
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

// Create store with thunk middleware
const store = createStore(reducer, applyMiddleware(thunk));

// Export the fetchPosts action creator and the store
export { fetchPosts };
export default store;
