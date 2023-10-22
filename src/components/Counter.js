import { useState } from 'react';
import classes from './Counter.module.css';
import { useDispatch } from 'react-redux';
import { decreaseAction, increaseAction } from '../redux/acitons';

const Counter = () => {
   const [counter, setCounter] = useState(0);
   const dispatch = useDispatch();

   const handleIncrement = () => {
      setCounter(counter + 1);
      dispatch(increaseAction(counter));
   };

   const handleDecrement = () => {
      setCounter(counter - 1);
      dispatch(decreaseAction(counter));
   };

   const toggleCounterHandler = () => {};

   return (
      <main className={classes.counter}>
         <h1>Redux Counter</h1>
         <div className={classes.value}>{counter}</div>
         <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
         </div>
         <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
   );
};

export default Counter;
