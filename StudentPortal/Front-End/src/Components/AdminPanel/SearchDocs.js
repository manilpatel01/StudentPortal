import React from 'react';
import axios from 'axios';

function SearchDocs(props) {
  const {
    documents,
    setCertificate,
    selecteDocument,
    setSelecteDocument,
  } = props;

  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const handleSelectAll = () => {
    if (selecteDocument.length === documents.length) {
      setSelecteDocument([]);
    } else {
      setSelecteDocument([...documents.keys()]);
    }
  };

  const handleSelect = (i) => {
    if (isSelected(i)) {
      setSelecteDocument(selecteDocument.filter((e) => e !== i));
    } else {
      setSelecteDocument([...selecteDocument, i]);
    }
  };

  const isSelected = (i) => {
    return selecteDocument.includes(i);
  };

  const renderData = documents.map((request, i) => {
    const selected = isSelected(i);
    return (
      <tr key={request.request_id}>
        <td>
          <button
            type="button"
            className={`btn btn-sm ${
              selected ? 'btn-primary' : 'btn-outline-primary'
            }`}
            onClick={() => handleSelect(i)}
          >
            {selected ? 'Selected' : 'Select'}
          </button>
        </td>
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
      </tr>
    );
  });

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>
              <button
                type="button"
                className={`btn btn-sm ${
                  selecteDocument.length === documents.length
                    ? 'btn-primary'
                    : 'btn-outline-primary'
                }`}
                onClick={handleSelectAll}
              >
                {selecteDocument.length === documents.length
                  ? 'Deselect All'
                  : 'Select All'}
              </button>
            </th>
            <th>Sr No.</th>
            <th>Enrollment</th>
            <th>Name</th>
            <th>Semester</th>
            <th>Certificate</th>
          </tr>
        </thead>
        <tbody>{renderData}</tbody>
      </table>
    </div>
  );
}

export default SearchDocs;
