import "./style.css";

const Filter = ({ setTitleFilter, setRateFilter }) => {
  return (
    <div className="filter-box">
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setTitleFilter(e.target.value)}
      />

      <input
        type="number"
        placeholder="Rating"
        min="1"
        max="5"
        onChange={(e) => setRateFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
