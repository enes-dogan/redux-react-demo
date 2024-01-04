import { createStore } from 'redux';
import { StateType } from '../../types.ts';

const counterReducer = (
  state: StateType = { counter: 0 },
  action: { type: string }
) => {
  switch (action.type) {
    case 'increment':
      return { counter: state.counter + 1 };
    case 'decrement':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
