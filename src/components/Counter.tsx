import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';

import { counterStateType } from '../types.ts';

const Counter = () => {
  const counter = useSelector(
    (state: counterStateType) => state.counter.counter
  );
  const showCounter = useSelector(
    (state: counterStateType) => state.counter.showCounter
  );

  const dispatch = useDispatch();

  function incrementHandler(amount: number = 1) {
    dispatch(counterActions.increment(amount));
  }

  function decrementHandler() {
    dispatch(counterActions.decrement());
  }

  function toggleCounterHandler() {
    dispatch(counterActions.toggleCounter());
  }

  return (
    <main className="counter">
      <h1>Redux Counter</h1>
      {showCounter && <div className="value">{counter}</div>}
      <div>
        <button onClick={() => incrementHandler()}>Increment</button>
        <button onClick={() => incrementHandler(5)}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
