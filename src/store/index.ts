import { createStore } from 'redux';
import { StateType, ActionType } from '../../types.ts';

const initialState: StateType = { counter: 0, showCounter: true };

const initialAction: ActionType = { type: '', amount: 1 };

const counterReducer = (state = initialState, action = initialAction) => {
  switch (action.type) {
    case 'increment':
      if (action.amount === undefined) action.amount = 1;
      return { ...state, counter: state.counter + action.amount };
    case 'decrement':
      return { ...state, counter: state.counter - 1 };
    case 'toggleCounter':
      return { ...state, showCounter: !state.showCounter };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
