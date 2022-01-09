import { combineReducers } from 'redux';

// Import the individual reducers to combine them into one root reducer
import postsReducer from './postsReducer';

// List each reducer here
const rootReducer = combineReducers({
	posts: postsReducer,
});

export default rootReducer;