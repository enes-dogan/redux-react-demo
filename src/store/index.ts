// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { StateType, ActionType } from '../../types.ts';

const initialState: StateType = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state: StateType) {
      state.counter++;
    },
    decrement(state: StateType) {
      state.counter--;
    },
    increase(state: StateType, action: ActionType) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state: StateType) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;

//   switch (action.type) {
//     case 'increment':
//       if (action.amount === undefined) action.amount = 1;
// const counterReducer = (state = initialState, action = initialAction) => {
//       return { ...state, counter: state.counter + action.amount };
//     case 'decrement':
//       return { ...state, counter: state.counter - 1 };
//     case 'toggleCounter':
//       return { ...state, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };
