const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-body">

        <div className="input-group">

          <span className="input-group-text bg-white">
            <i className="bi bi-search"></i>
          </span>

          <input
            type="text"
            className="form-control"
            placeholder="Search employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </div>
    </div>
  );
};

export default SearchBar;