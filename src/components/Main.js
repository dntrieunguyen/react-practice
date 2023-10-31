import React, { useState } from 'react';
import './Main.scss';
import Form from './Form';
import { expenses } from './data';
export default function Main() {
   const [expense, setExpense] = useState({
      id: '',
      title: '',
      amount: 0,
      date: new Date().toISOString().substr(0, 10),
   });

   const [filterYear, setFilterYear] = useState('');
   const [year, setYear] = useState([2020, 2021]);

   const [updateExpenses, setUpdateExpenses] = useState(expenses); // Arr
   const [filterYearArr, setFilterYearArr] = useState([]); //Filter Year Arr

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
      const newExpense = { ...expense, date: new Date(expense.date) };
      const newUpdateExpenses = {
         ...newExpense,
         id: `e${updateExpenses.length + 1}`,
      };
      const newYear = newExpense.date.getFullYear();

      const checkYearExisting = updateExpenses.findIndex(
         item => item.date.getFullYear() === newYear,
      );

      if (checkYearExisting === -1) {
         setYear([...year, newYear]);
      }

      setUpdateExpenses([...updateExpenses, newUpdateExpenses]);

      setExpense({
         id: '',
         title: '',
         amount: 0,
         date: new Date().toISOString().substr(0, 10),
      });
      setFilterYear('Select All');
   };

   const handleFilterYearChange = e => {
      const value = e.target.value;
      setFilterYear(value);
      let newUpdateExpensesArr = [];

      newUpdateExpensesArr = updateExpenses.filter(
         item => item.date.getFullYear() == value,
      );

      setFilterYearArr(newUpdateExpensesArr);
   };

   const handleChangeTitleBtn = e => {
      if (filterYearArr.length > 0) {
         const newsArr = filterYearArr?.map(item =>
            item.id === e.id ? { ...item, title: 'Title Changed' } : item,
         );

         setFilterYearArr(newsArr);
      }
   };
   const handleChangeTitleExpenseArrBtn = e => {
      const newsArr = updateExpenses.map(item =>
         item.id === e.id ? { ...item, title: 'Title Changed' } : item,
      );
      setUpdateExpenses(newsArr);
      console.log(e);
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
                     <select
                        value={filterYear}
                        onChange={handleFilterYearChange}
                        name="selectYear"
                        className="sltYBtn"
                     >
                        <option value="Select All">Select All</option>
                        {year.map((year, index) => (
                           <option key={index} value={year}>
                              {year}
                           </option>
                        ))}
                     </select>
                  </div>

                  {filterYearArr.length > 0
                     ? filterYearArr.map(item => (
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
                             <div className="expenseItemTitle">
                                {item.title}
                             </div>
                             <div className="expenseItemPrice">{`$${item.amount}`}</div>
                             <button
                                onClick={() => handleChangeTitleBtn(item)}
                                className="btnUpdate"
                             >
                                Change <br /> Title
                             </button>
                          </div>
                       ))
                     : updateExpenses.map(item => (
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
                             <div className="expenseItemTitle">
                                {item.title}
                             </div>
                             <div className="expenseItemPrice">{`$${item.amount}`}</div>
                             <button
                                onClick={() =>
                                   handleChangeTitleExpenseArrBtn(item)
                                }
                                className="btnUpdate"
                             >
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
