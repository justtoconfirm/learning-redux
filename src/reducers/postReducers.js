export const initialState = {
	posts: []
}

export default function postsReducer(state = initialState, action) {
	switch (action.type) {
		default:
			return state
	};
};