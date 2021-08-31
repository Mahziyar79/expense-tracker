import { useState, useEffect } from "react";
import OvreViewComp from "./OverViewComp";
import TransAction from "./TransAction";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    showLocalTransaction();
    showLocalIncome();
    showLocalExpense();
  }, []);

  useEffect(() => {
    saveLocalTransaction();
    saveLocalIncome();
    saveLocalExpense();
  }, [transaction, income, expense]);

  // localStorage
  const saveLocalTransaction = () => {
    if (localStorage.getItem("transaction") === null) {
      localStorage.setItem("transaction", JSON.stringify([]));
    } else {
      localStorage.setItem("transaction", JSON.stringify(transaction));
    }
  };
  const showLocalTransaction = () => {
    if (localStorage.getItem("transaction") === null) {
      localStorage.setItem("transaction", JSON.stringify([]));
    } else {
      setTransaction(JSON.parse(localStorage.getItem("transaction")));
    }
  };
  const saveLocalIncome = () => {
    if (localStorage.getItem("Income") === null) {
      localStorage.setItem("Income", JSON.stringify([]));
    } else {
      localStorage.setItem("Income", JSON.stringify(income));
    }
  };
  const showLocalIncome = () => {
    if (localStorage.getItem("Income") === null) {
      localStorage.setItem("Income", JSON.stringify([]));
    } else {
      setIncome(JSON.parse(localStorage.getItem("Income")));
    }
  };
  const saveLocalExpense = () => {
    if (localStorage.getItem("expense") === null) {
      localStorage.setItem("expense", JSON.stringify([]));
    } else {
      localStorage.setItem("expense", JSON.stringify(expense));
    }
  };
  const showLocalExpense = () => {
    if (localStorage.getItem("expense") === null) {
      localStorage.setItem("expense", JSON.stringify([]));
    } else {
      setExpense(JSON.parse(localStorage.getItem("expense")));
    }
  };

  const submitHandler = (type, desc, amount) => {
    if (!type || !desc || !amount) {
      alert("Please fill all Inputs");
      return;
    }
    const newTransaction = {
      desc: desc,
      amount: amount,
      type: type,
      id: Date.now(),
    };
    setTransaction([...transaction, newTransaction]);
    if (newTransaction.type === "expense") {
      setExpense(expense + parseInt(newTransaction.amount));
    } else {
      setIncome(income + parseInt(newTransaction.amount));
    }
  };

  const deleteHandler = () => {
    setExpense(0);
    setIncome(0);
    setTransaction([]);
  };

  return (
    <section className="container">
      <OvreViewComp
        income={income}
        expense={expense}
        onSubmit={submitHandler}
        onDelete={deleteHandler}
      />
      <TransAction
        transaction={transaction}
        setTransaction={setTransaction}
        setExpense={setExpense}
        setIncome={setIncome}
      />
    </section>
  );
};

export default ExpenseApp;
