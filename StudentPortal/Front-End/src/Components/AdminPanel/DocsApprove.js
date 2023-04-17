import React from 'react';
import axios from 'axios';
import { APIENDPOINTS } from '../../redux/api_endpoint';

function DocsApprove(props) {
  console.log(props);
  const {
    documents,
    setDocuments,
    approveDocument,
    setApproveDocument,
    admin,
    setCertificate,
    setSrc,
    filteredSem,
  } = props;

  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const approveReject = (
    request_id,
    enrollment,
    status,
    comment,
    type,
    rank
  ) => {
    document.getElementById(`reject-${request_id}`).disabled = 'true';
    document.getElementById(`approve-${request_id}`).disabled = 'true';

    var formData = new FormData();
    formData.set('enrollment', enrollment);
    formData.set('status', status);
    if (comment !== null) formData.set('comment', comment);
    formData.set('type', type);
    if (type === 'rank') formData.set('rank', rank);

    axios
      .post(APIENDPOINTS.documentApprove(), formData)
      .then((res) => {
        if (admin === 'ROLE_SSHEAD' && status === 1) {
          const doc = documents.find((d) => d.request_id === request_id);
          setApproveDocument([...approveDocument, doc]);
        }
        setDocuments(documents.filter((d) => d.request_id !== request_id));
      })
      .catch((e) => {
        console.log(e);
        document.getElementById(`reject-${request_id}`).disabled = false;
        document.getElementById(`approve-${request_id}`).disabled = false;
      });
  };

  const renderData = documents
    .filter((req) => !filteredSem || req.semester == filteredSem)
    .map((request, i) => {
      return (
        <tr key={request.request_id}>
          <td>{i + 1}</td>
          <td>{request.enrollment}</td>
          <td>
            {request.first_name} {request.middle_name} {request.last_name}
          </td>
          <td>{request.semester}</td>
          <td>
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              data-toggle="modal"
              data-target="#openDocument"
              onClick={(e) => setCertificate(request)}
            >
              {capitalize(request.type)}
            </button>
          </td>
          <td>
            <button
              type="button"
              className="btn btn-outline-primary btn-sm"
              data-toggle="modal"
              data-target="#openDocumentModal"
              onClick={(e) => setSrc(`/${request.document_url}`)}
            >
              {request.type === 'bonafide' ? 'Fee Receipt' : 'Marksheet'}
            </button>
          </td>
          <td>{request.comment || 'New Request'}</td>
          <td>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const rank = e.target.rank ? e.target.rank.value : null;
                approveReject(
                  request.request_id,
                  request.enrollment,
                  1,
                  null,
                  request.type,
                  rank
                );
              }}
            >
              {admin === 'ROLE_DEPARTMENT' && request.type === 'rank' ? (
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="rank"
                    placeholder="Enter Rank of student.."
                    required
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      id={`approve-${request.request_id}`}
                      className="btn btn-outline-success btn-sm"
                    >
                      Aprrove
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="submit"
                  className="btn btn-outline-success btn-sm"
                  id={`approve-${request.request_id}`}
                >
                  Aprrove
                </button>
              )}
            </form>
          </td>
          <td>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                approveReject(
                  request.request_id,
                  request.enrollment,
                  2,
                  e.target.comment.value,
                  request.type,
                  null
                );
              }}
            >
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  name="comment"
                  placeholder="Enter Comment on reject..."
                  required
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    id={`reject-${request.request_id}`}
                    className="btn btn-outline-danger btn-sm"
                  >
                    Reject
                  </button>
                </div>
              </div>
            </form>
          </td>
        </tr>
      );
    });

  return (
    <div className="table-responsive">
      {renderData.length === 0 ? (
        <h1 className="text-center">
          No {filteredSem}th sem Student's Documents Left For Approval!
        </h1>
      ) : (
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Enrollment</th>
              <th>Name</th>
              <th>Semester</th>
              <th>Certificate</th>
              <th>Document</th>
              <th>Comment</th>
              <th>Approve</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>{renderData}</tbody>
        </table>
      )}
    </div>
  );
}

export default DocsApprove;
