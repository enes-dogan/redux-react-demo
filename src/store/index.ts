import { createStore } from 'redux';
import { StateType, ActionType } from '../../types.ts';

const counterReducer = (
  state: StateType = { counter: 0 },
  action: ActionType = { type: '', amount: 1 }
) => {
  switch (action.type) {
    case 'increment':
      if (action.amount === undefined) action.amount = 1;
      return { counter: state.counter + action.amount };
    case 'decrement':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
