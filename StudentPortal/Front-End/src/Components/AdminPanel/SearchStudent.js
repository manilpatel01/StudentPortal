import React, { useState } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import axios from 'axios';

import SearchForm from './SearchForm';
import StudentTable from './StudentTable';
import StudentModel from './StudentModel';
import EditFieldsForm from './EditFieldsForm';
import Loading from '../../Util/Loading';
import { APIENDPOINTS } from '../../redux/api_endpoint';
import DetainStudentModal from './DetainStudentModal';

const initialFields = {
  enrollment: true,
  name: true,
  semester: true,
  email: true,
  profile: true,
  detain: true,
};

const SearchStudent = () => {
  const [students, setStudents] = useState(null);
  const [stud, setStud] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState(initialFields);
  const [detaintEr, setDetaintEr] = useState();
  const [collapse, setCollapse] = useState(false);

  const EditFields = () => {
    return (
      <div className="my-3">
        <div className="mb-3 text-right">
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="btn btn-success ml-3"
            table="table-to-xls"
            filename="students_data_ldce"
            sheet="students"
            buttonText="Download Excel File"
          />
          <button
            className="btn btn-outline-info btn-sm ml-3"
            onClick={() => setCollapse(!collapse)}
          >
            <i className="fad fa-edit"></i>
          </button>
        </div>
        <div className={`collapse ${collapse && 'show'}`} id="editFields">
          <EditFieldsForm
            initialValues={fields}
            destroyOnUnmount={false}
            onChange={(values) => setFields(values)}
          />
        </div>
      </div>
    );
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    await axios
      .get(APIENDPOINTS.searchStudent(), { params: values })
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <SearchForm onSubmit={handleSubmit} />
      {loading ? (
        <Loading />
      ) : (
        students &&
        (students.length === 0 ? (
          <h1 className="text-center">No Student Found!</h1>
        ) : (
          <>
            <EditFields />

            <StudentTable
              data={students}
              setStud={setStud}
              fields={fields}
              setDetaintEr={setDetaintEr}
            />
            {fields.profile && <StudentModel credential={stud} />}
            <DetainStudentModal detaintEr={detaintEr} />
          </>
        ))
      )}
    </div>
  );
};

export default SearchStudent;
