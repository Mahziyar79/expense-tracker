
const Search = ({ onFilter ,searchItem}) => {

  return (
    <div>
      <input
      value={searchItem}
        onChange={onFilter}
        placeholder="Search transaction"
        type="text"
        className="search_transaction"
      ></input>
    </div>
  );
};

export default Search;
