import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

import DocsApprove from './DocsApprove';
import DocumentModel from './DocumentModel';
import CertificateModel from './CertificateModel';
import Certificate from '../Certificate/Certificate';
import Print from '../Print';
import Loading from '../../Util/Loading';
import { APIENDPOINTS } from '../../redux/api_endpoint';

function ApproveCertificate(props) {
  const [documents, setDocuments] = useState();
  const [approveDocument, setApproveDocument] = useState([]);
  const [certificate, setCertificate] = useState();
  const [src, setSrc] = useState();
  const [loading, setLoading] = useState(false);
  const [sem, setSem] = useState();

  useEffect(() => {
    (async () => {
      setLoading(true);
      await Axios.get(APIENDPOINTS.pendingDocument())
        .then((res) => {
          setDocuments(res.data);
        })
        .catch((err) => console.log(err));
      setLoading(false);
    })();
  }, []);

  const handleSemChange = (e) => {
    e.preventDefault();
    setSem(e.target.value);
  };

  const renderDocTable = () => {
    if (!documents) return;
    if (documents.length === 0) {
      return <h1 className="text-center">No Documents Left For Approval!</h1>;
    }

    return (
      <>
        <div className="from-group w-50 mx-auto mb-4">
          <select onChange={handleSemChange} className="form-control">
            <option disabled hidden selected>
              Select Sem
            </option>
            <option value="">ALL</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <DocsApprove
          documents={documents}
          setDocuments={setDocuments}
          approveDocument={approveDocument}
          setApproveDocument={setApproveDocument}
          admin={props.role}
          setCertificate={setCertificate}
          setSrc={setSrc}
          filteredSem={sem}
        />
        <CertificateModel data={certificate} />
        <DocumentModel src={src} />
      </>
    );
  };

  const renderPrintBtn = () => {
    if (props.role !== 'ROLE_SSHEAD') return;

    return (
      <div className="text-center">
        <Print
          content={
            approveDocument &&
            approveDocument.map((d) => (
              <Certificate key={d.request_id} data={d} />
            ))
          }
        >
          <button
            className="btn btn-success btn-lg"
            disabled={approveDocument.length === 0}
            title={
              approveDocument.length === 0
                ? 'First Approve atleast one Certificate!'
                : 'Print'
            }
          >
            Print All Approved Certificate
          </button>
        </Print>
      </div>
    );
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col">
          {loading ? (
            <Loading />
          ) : (
            <>
              {renderDocTable()}
              {renderPrintBtn()}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { role: state.User.credentials.role };
};

export default connect(mapStateToProps)(ApproveCertificate);
