import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseAction, increaseAction } from '../redux/acitons';

const Counter = () => {
   const counter = useSelector(state => state.count);

   const dispatch = useDispatch();

   const handleIncrement = () => {
      dispatch(increaseAction(counter));
   };

   const handleDecrement = () => {
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
