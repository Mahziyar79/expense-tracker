import { useState } from "react";
import TransActionForms from "./TransActionForm";

const OvreViewComp = ({ income, expense, onSubmit, onDelete }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="topSection">
        <p>Balance : {income - expense} $</p>
        <div>
          <button onClick={() => setIsShow((prevState) => !prevState)}>
            {!isShow ? "Add" : "Cancel"}
          </button>
          <button
            className="delete_btn"
            onClick={() => {
              onDelete();
            }}
          >
            Delete All
          </button>
        </div>
      </div>
      {isShow && (
        <TransActionForms
          onSubmit={(type, desc, amount) => onSubmit(type, desc, amount)}
        />
      )}
      <div className="resaultSection">
        <div className="box_border">
          <p>Expense </p>
          <span>{expense} $</span>
        </div>
        <div className="box_border">
          <p>Income</p>
          <span>{income} $</span>
          </div>
      </div>
    </>
  );
};

export default OvreViewComp;
