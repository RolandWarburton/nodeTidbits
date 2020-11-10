import * as actions from "./actionTypes";

let lastId = 0;

// reducers need to be pure functions, the same input produces the same output, every time.

export default function reducer(state = [], action) {
	switch (action.type) {
		// ##──── A bug was added ───────────────────────────────────────────────────────────────────
		case actions.BUG_ADDED:
			return [
				...state,
				{
					id: ++lastId,
					description: action.payload.description,
					resolved: false,
				},
			];

		// ##──── A bug was removed ─────────────────────────────────────────────────────────────────
		case actions.BUG_REMOVED:
			// remove it by returning everything that ISNT the bug being removed
			return state.filter((bug) => bug.id !== action.payload.id);

		default:
			return state;
	}
}
