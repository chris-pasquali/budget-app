import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {

  const { addIncome, addExpense } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = e => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  }

  const onSubmitIncome = e => {
    e.preventDefault(); // prevents auto refresh

    if (incomeText !== "") {
      const newIncomeTransaction = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1 // Times by 1 turns it from a string to a number
      };

      addIncome(newIncomeTransaction);

      // Resets fields in form
      setIncome({
        incomeText: '',
        incomeAmount: 0
      })
    }
  }

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = e => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  }

  const onSubmitExpense = e => {
    e.preventDefault(); // prevents auto refresh

    if (expenseText !== "") {
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1 // Times by 1 turns it from a string to a number
      };

      addExpense(newExpenseTransaction);

      // Resets fields in form
      setExpense({
        expenseText: '',
        expenseAmount: 0
      })
    }

  }

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input type="text" name="incomeText" value={incomeText} placeholder="Add Income..." autoComplete="off" onChange={onChangeIncome} />
          <input type="number" name="incomeAmount" value={incomeAmount} placeholder="Amount" autoComplete="off" onChange={onChangeIncome} />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input type="text" name="expenseText" value={expenseText} placeholder="Add Expense..." autoComplete="off" onChange={onChangeExpense} />
          <input type="number" name="expenseAmount" value={expenseAmount} placeholder="Amount" autoComplete="off" onChange={onChangeExpense} />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default AddTransaction
