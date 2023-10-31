import React, { useState } from 'react';
import './Main.scss';
import Form from './Form';
import { expenses } from './data';
export default function Main() {
   const [expense, setExpense] = useState({
      id: '',
      title: '',
      amount: 0,
      date: new Date(),
   });
   const [filterYear, setFilterYear] = useState();
   const [year, setYear] = useState([2020, 2021]);

   const [updateExpenses, setUpdateExpenses] = useState(expenses);

   const handleChangeTitle = e => {
      const value = e.target.value;
      setExpense({
         ...expense,
         title: value,
      });
   };
   const handleChangeAmount = e => {
      const value = +e.target.value;
      setExpense({
         ...expense,
         amount: +value.toFixed(2),
      });
   };
   const handleChangeDate = e => {
      const value = e.target.value;
      setExpense({
         ...expense,
         date: value,
      });
   };

   const handleAddNewExpense = e => {
      e.preventDefault();
      const newExpense = { ...expense, id: `e${updateExpenses.length + 1}` };
      //   const newYear = newExpense.date;
      //   console.log(newYear);
      //   const checkYearExisting = updateExpenses.findIndex(
      //      item => item.date.getFullYear() === newYear,
      //   );

      //   if (checkYearExisting === -1) {
      //      setYear([...year, newYear]);
      //   }

      setUpdateExpenses([...updateExpenses, newExpense]);

      setExpense({ id: '', title: '', amount: 0, date: new Date() });
   };

   return (
      <div>
         <div className="myBackground">
            <Form
               handleChangeTitle={handleChangeTitle}
               handleChangeAmount={handleChangeAmount}
               handleChangeDate={handleChangeDate}
               handleAddNewExpense={handleAddNewExpense}
               expense={expense}
            ></Form>
            <div className="center">
               <div className="boxContent">
                  <div className="expenseFilter">
                     <h2 className="filterTitle">Filter by Year</h2>
                     <select name="selectYear" className="sltYBtn">
                        {year.map((year, index) => (
                           <option key={index} value="">
                              {year}
                           </option>
                        ))}
                     </select>
                  </div>

                  {updateExpenses.map(item => (
                     <div className="expenseItem" key={item.id}>
                        <div className="expenseItemDate">
                           <p className="expenseItemDateM">
                              {item.date.getMonth() + 1}
                           </p>
                           <p className="expenseItemDateY">
                              {item.date.getFullYear()}
                           </p>
                           <p className="expenseItemDateD">
                              {item.date.getDate()}
                           </p>
                        </div>
                        <div className="expenseItemTitle">{item.title}</div>
                        <div className="expenseItemPrice">{`$${item.amount}`}</div>
                        <button className="btnUpdate">
                           Change <br /> Title
                        </button>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
