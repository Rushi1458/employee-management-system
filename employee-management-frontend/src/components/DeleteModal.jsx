const DeleteModal = ({ employee, onDelete }) => {
  return (
    <div
      className="modal fade"
      id="deleteModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg">

          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title">
              <i className="bi bi-trash3-fill me-2"></i>
              Delete Employee
            </h5>

            <button
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body text-center py-4">

            <i
              className="bi bi-exclamation-triangle-fill text-danger"
              style={{ fontSize: "70px" }}
            ></i>

            <h4 className="mt-3">
              Are you sure?
            </h4>

            <p className="text-muted">
              This action cannot be undone.
            </p>

            {employee && (
              <div className="alert alert-light border">

                <strong>
                  {employee.firstName} {employee.lastName}
                </strong>

                <br />

                {employee.email}

              </div>
            )}

          </div>

          <div className="modal-footer">

            <button
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>

            <button
              className="btn btn-danger"
              onClick={onDelete}
              data-bs-dismiss="modal"
            >
              Delete
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default DeleteModal;