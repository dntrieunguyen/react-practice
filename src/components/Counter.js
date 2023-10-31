import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterSlice } from '../redux/reducer/counterSlice';

const Counter = () => {
   const dispatch = useDispatch();
   const counter = useSelector(state => state.counter.count);
   const toggle = useSelector(state => state.counter.isToggle);

   const toggleCounterHandler = () => {
      dispatch(counterSlice.actions.toggle());
   };

   const handleIncrement = () => {
      dispatch(counterSlice.actions.increment());
   };
   const handleIncrement10 = () => {
      dispatch(counterSlice.actions.increment_10());
   };
   const handleDecrement = () => {
      dispatch(counterSlice.actions.decrement());
   };

   return (
      <main className={classes.counter}>
         <h1>Redux Counter</h1>
         <div className={classes.value}>{counter}</div>
         {toggle && (
            <div>
               <button onClick={handleIncrement}>Increment</button>
               <button onClick={handleIncrement10}>Increment by 10</button>
               <button onClick={handleDecrement}>Decrement</button>
            </div>
         )}

         <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
   );
};

export default Counter;
