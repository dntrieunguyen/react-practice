import { useState } from 'react';
import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseAction } from '../redux/acitons';

const Counter = () => {
   const [counter, setCounter] = useState(0);
   const dispatch = useDispatch();
   const count = useSelector(state => state.value);
   console.log(count);

   const handleIncrement = () => {
      dispatch(
         increaseAction({
            value: 0,
         }),
      );
   };
   const toggleCounterHandler = () => {};

   return (
      <main className={classes.counter}>
         <h1>Redux Counter</h1>
         <div className={classes.value}>{counter}</div>
         <div>
            <button>Increment</button>
            <button>Decrement</button>
         </div>
         <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
   );
};

export default Counter;
