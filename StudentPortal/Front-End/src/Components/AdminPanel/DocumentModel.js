import React from "react";

function DocumentModel({ src }) {
  return (
    <div
      className="modal fade"
      id="openDocumentModal"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="openDocumentModal_title">
              Document
            </h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <img
              className="img-fluid img-thumbnail"
              src={src}
              id="fee_Receipt"
              alt="fee receipt"
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger btn-lg"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentModel;
