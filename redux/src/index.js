import { bugAdded } from "./actions";
import store from "./store";

// subscribe returns its unsubscribe method
const ubsubscribe = store.subscribe(() => {
	console.log("Store changed", store.getState());
});

store.dispatch(bugAdded("bug1"));

// store.dispatch(bugRemoved());

// console.log(store.getState());
