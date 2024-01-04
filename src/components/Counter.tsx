import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';

import { StateType } from '../../types.ts';

const Counter = () => {
  const counter = useSelector((state: StateType) => state.counter);
  const showCounter = useSelector((state: StateType) => state.showCounter);

  const dispatch = useDispatch();

  function incrementHandler() {
    dispatch(counterActions.increment());
  }

  function decrementHandler() {
    dispatch(counterActions.decrement());
  }

  function increaseHandler(amount: number) {
    dispatch(counterActions.increase(amount));
  }

  function toggleCounterHandler() {
    dispatch(counterActions.toggleCounter());
  }

  return (
    <main className="counter">
      <h1>Redux Counter</h1>
      {showCounter && <div className="value">{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={() => increaseHandler(5)}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
