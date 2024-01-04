const redux = require('redux');

// Reducer function that manipulates the state
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }
  state;
};

// Data/State Storage Created wit a reducer function pointed
const store = redux.createStore(counterReducer);

// Subscriber that should request updated value from Redux Storage everytime it changes
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState.counter);
};

// Subscriber subscribed to the store
store.subscribe(counterSubscriber);

// Dispatching an action
store.dispatch({ type: 'increment' });

store.dispatch({ type: 'decrement' });
