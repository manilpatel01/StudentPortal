import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import StudentModel from './StudentModel';
import ApproveStudentTable from './ApproveStudentTable';
import Loading from '../../Util/Loading';
import { APIENDPOINTS } from '../../redux/api_endpoint';

function PenndingVerification() {
  const [students, setStudents] = useState();
  const [stud, setStud] = useState();
  const [sem, setSem] = useState();

  useEffect(() => {
    (async () => {
      await Axios.get(APIENDPOINTS.pendingRegistrationList())
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => console.log(err));
    })();
  }, []);

  const handleSemChange = (e) => {
    e.preventDefault();
    setSem(e.target.value);
  };

  return (
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col">
          {students ? (
            students.length === 0 ? (
              <h1 className="text-center">No Student Found For Approval!</h1>
            ) : (
              students && (
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

                  <ApproveStudentTable
                    setStud={setStud}
                    students={students}
                    setStudents={setStudents}
                    filteredSem={sem}
                  />
                  <StudentModel credential={stud} />
                </>
              )
            )
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}

export default PenndingVerification;
