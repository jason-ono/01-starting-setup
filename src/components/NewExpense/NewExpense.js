import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  
  // this is for the toggle of the form appear/disappear
  // initiall its set as false
  const [isEditing, setIsEditing] = useState(false);
  
  // related handler
  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    // same thing again
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  return(
    <div className="new-expense">
      {!isEditing &&
        <button onClick = {startEditingHandler}>
          Add New Expense
        </button>}
      {isEditing &&
        <ExpenseForm
          onSaveExpenseData = {saveExpenseDataHandler} 
          onCancel = {stopEditingHandler}/>}
    </div>
  );
}

export default NewExpense;