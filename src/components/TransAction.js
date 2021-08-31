import { useEffect, useState } from "react";
import Search from "./Search";

const TransAction = ({ transaction, setTransaction ,setExpense,setIncome}) => {
  const [searchItem, setSearchItem] = useState("");
  const [filterTnr, setFilterTnr] = useState(transaction);

  const filterTransaction = (search) => {
    if (!search || search === "") {
      setFilterTnr(transaction);
      return;
    }
    const filtered = transaction.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilterTnr(filtered);
  };

  const changedHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransaction(e.target.value);
  };

  useEffect(() => {
    filterTransaction(searchItem);
  }, [transaction]);

  const onDeleteTrans = (id,amount,type) => {
    setTransaction(transaction.filter((t) => t.id !== id));
    if(type==="expense"){
      setExpense(prevState=> prevState - amount)
    }else{
      setIncome(prevState => prevState - amount)
    }
  };

  return (
    <div>
      <div>TransAction</div>
      <Search onFilter={(e) => changedHandler(e)} searchItem={searchItem} />
      <ul className="transaction_list">
        {filterTnr.map((item) => (
          <li
            key={item.id}
            className={item.type === "expense" ? "expenseLi" : "incomeLi"}
          >
            <span>{item.desc}</span>
            <span>{item.amount} $</span>
            <button className="delete_btn" onClick={() => onDeleteTrans(item.id , item.amount,item.type)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransAction;
