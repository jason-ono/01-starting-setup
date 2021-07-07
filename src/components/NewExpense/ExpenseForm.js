import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // you can have mutliple states

  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");

  // pass in an Object
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);

    // setUserInput simply replaces the old information with the new one
    // thus, you need to refer to the other two states

    // use spread operator for something like this
    // means "pull out all existing key-value pairs"
    // and here, we overwrite one of them

    // to keep all "scheduling" of updates in sync, use anon func
    // react can automatically pass in the previous state
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value
      }
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value
      }
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value
      }
    });
  };

  const submitHandler = (event) => {
    // by default, HTML submit button prompts a webpage reload
    // we want to prevent this from happening
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    }

    props.onSaveExpenseData(expenseData);

    setUserInput((prevState) => {
      return {
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
      }
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value = {userInput.enteredTitle}
            onChange={titleChangeHandler} 
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value = {userInput.enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value = {userInput.enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick = {props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
