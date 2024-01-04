import { useSelector, useDispatch } from 'react-redux';
import { StateType } from '../../types.ts';

const Counter = () => {
  const counter = useSelector((state: StateType) => state.counter);
  const showCounter = useSelector((state: StateType) => state.showCounter);

  const dispatch = useDispatch();

  return (
    <main className="counter">
      <h1>Redux Counter</h1>
      {showCounter && <div className="value">{counter}</div>}
      <div>
        <button onClick={() => dispatch({ type: 'increment' })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: 'increment', amount: 5 })}>
          Increment by 5
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          Decrement
        </button>
      </div>
      <button onClick={() => dispatch({ type: 'toggleCounter' })}>
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
