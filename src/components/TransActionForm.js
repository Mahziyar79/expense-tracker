import { useState } from "react";

const TransActionForms = ({ onSubmit }) => {
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  const typeHandler = (e) => {
    setType(e.target.value);
  };
  const onSubmitCall = (e) => {
    e.preventDefault();
    onSubmit(type, desc, amount);
  };

  const changHandler = (e) => {
    switch (e.target.name) {
      case "desc":
        setDesc(e.target.value);
        break;
      case "amount":
        setAmount(e.target.value);
        break;
      default:
        return;
    }
  };

  return (
    <form className="mainForm" onSubmit={onSubmitCall}>
      <input
        type="text"
        name="desc"
        onChange={changHandler}
        placeholder="description..."
      />
      <input
        type="number"
        name="amount"
        onChange={changHandler}
        placeholder="amount $"
      />
      <div>
        <input
          type="radio"
          id="expense"
          value="expense"
          name="type"
          onClick={typeHandler}
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          value="income"
          id="income"
          name="type"
          onClick={typeHandler}
        />
        <label htmlFor="income">Income</label>
      </div>
      <button>Add Transaction</button>
    </form>
  );
};

export default TransActionForms;
