const Loader = () => {
  return (
    <div className="text-center py-5">
      <div
        className="spinner-border text-primary"
        style={{ width: "3rem", height: "3rem" }}
      >
      </div>

      <p className="mt-3 fw-bold">Loading Employees...</p>
    </div>
  );
};

export default Loader;