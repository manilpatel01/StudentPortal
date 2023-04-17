import React from 'react';
import Certificate from '../Certificate/Certificate';

function CertificateModel({ data }) {
  const page = {
    width: '21cm',
    height: '29.7cm',
    background: 'white',
    display: 'block',
    margin: '0 auto',
    marginBottom: '0.5cm',
    boxShadow: ' 0 0 0.5cm rgba(0, 0, 0, 0.5)',
  };
  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  return (
    <div className="modal fade" id="openDocument" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="change_photo_title">
              {data && capitalize(data.type)} Certificate
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
            <div className="container">
              <div className="table-responsive">
                <table className="mx-auto">
                  <tbody>
                    <tr>
                      <td>
                        <div style={page}>
                          {data && <Certificate data={data} />}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
    </div>
  );
}

export default CertificateModel;
