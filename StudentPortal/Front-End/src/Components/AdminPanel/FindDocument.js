import React, { useState } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

import SearchDocForm from './SearchDocForm';
import CertificateModel from './CertificateModel';
import Certificate from '../Certificate/Certificate';
import SearchDocs from './SearchDocs';
import Print from '../Print';
import { APIENDPOINTS } from '../../redux/api_endpoint';

function FindDocument(props) {
  const [documents, setDocuments] = useState();
  const [selecteDocument, setSelecteDocument] = useState([]);
  const [certificate, setCertificate] = useState();

  const handleSubmit = async (values) => {
    console.log(values);

    const formData = new FormData();
    Object.keys(values).forEach((field) => {
      if ((field === 'start' || field === 'end') && values[field]) {
        formData.append(field, values[field].replaceAll('-', '/'));
      } else formData.append(field, values[field]);
    });

    await Axios.post(APIENDPOINTS.findDocument(), formData)
      .then((res) => {
        console.log(res.data);
        setDocuments(res.data);
      })
      .catch((err) => console.log(err));
  };

  const renderDocTable = () => {
    if (!documents) return;
    if (documents.length === 0) {
      return <h1 className="text-center">No Document Found!</h1>;
    }

    return (
      <>
        <SearchDocs
          documents={documents}
          selecteDocument={selecteDocument}
          setSelecteDocument={setSelecteDocument}
          setCertificate={setCertificate}
        />
        <CertificateModel data={certificate} />
        {renderPrintBtn()}
      </>
    );
  };

  const renderPrintBtn = () => {
    if (props.role !== 'ROLE_SSHEAD') return;

    return (
      <div className="text-center mb-4">
        <Print
          content={
            selecteDocument &&
            selecteDocument.map((i) => (
              <Certificate key={documents[i].request_id} data={documents[i]} />
            ))
          }
        >
          <button
            className="btn btn-success btn-lg"
            disabled={selecteDocument.length === 0}
            title={
              selecteDocument.length === 0
                ? 'First Select atleast one Certificate!'
                : 'Print'
            }
          >
            Print All Selected Certificate
          </button>
        </Print>
      </div>
    );
  };

  return (
    <div className="container mt-5">
      <SearchDocForm onSubmit={handleSubmit} />
      {renderDocTable()}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { role: state.User.credentials.role };
};

export default connect(mapStateToProps)(FindDocument);
