import { useSelector, useDispatch } from 'react-redux';
import { StateType } from '../../types.ts';

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector((state: StateType) => state.counter);
  const dispatch = useDispatch();

  return (
    <main className="counter">
      <h1>Redux Counter</h1>
      <div className="value">{counter}</div>
      <div>
        <button onClick={() => dispatch({ type: 'increment' })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>
          Increment by 5
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
