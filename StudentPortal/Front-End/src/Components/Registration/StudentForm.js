import React, { useEffect, useState } from 'react';
import './StudentForm.css';

import StudentDetailsForm from './StudentDetailsForm';
import PresonalDetailsForm from './PresonalDetailsForm';
import StudentGuardianForm from './StudentGuardianForm';
import GetStudentForm from './GetStudentForm';
import { useDispatch } from 'react-redux';
import { destroy } from 'redux-form';

const StudentForm = (props) => {
  const [step, setStep] = useState(1);
  const [student, setStudent] = useState();
  const { isUpdate, user, disableEmail } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUpdate) {
      setStep(2);
    }
  }, [isUpdate]);

  useEffect(() => {
    return () => {
      dispatch(destroy('StudentForm'));
    };
  }, []);

  const nextStep = () => {
    setStep(step + 1);
    if (!isUpdate) {
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const onSubmit = (values) => {
    props.onSubmit(values);
  };

  const handleGetStudentSubmit = (stud) => {
    setStudent(stud);
    nextStep();
  };

  let initialValues = {};
  if (student) {
    initialValues = student;
  }
  if (isUpdate) {
    const removedValues = [
      'feerefunddetails',
      'role',
      'student_id',
      'student_sign',
      'student_photo',
      'request',
      'faculty_comment',
      'isactive',
      'faculty_approve',
    ];
    Object.keys(user).forEach((field) => {
      if (field === 'info') {
        Object.keys(user[field]).forEach((innerfield) => {
          if (innerfield === 'hsc_pr' || innerfield === 'ssc_pr') {
            initialValues[innerfield] = user[field][innerfield]
              .toFixed(2)
              .toString();
          } else if (innerfield === 'id') {
          } else {
            initialValues[innerfield] = user[field][innerfield];
          }
        });
      } else if (field === 'guardian') {
        Object.keys(user[field]).forEach((innerfield) => {
          if (innerfield === 'id') {
          } else {
            initialValues[innerfield] = user[field][innerfield].toString();
          }
        });
      } else if (!removedValues.includes(field)) {
        initialValues[field] = user[field];
      }
    });
    console.log(initialValues);
  }

  return (
    <div>
      {step === 1 && <GetStudentForm onSubmit={handleGetStudentSubmit} />}
      {step === 2 && (
        <StudentDetailsForm
          isUpdate={isUpdate}
          initialValues={initialValues}
          onSubmit={nextStep}
          disableEmail={disableEmail}
        />
      )}
      {step === 3 && (
        <PresonalDetailsForm
          initialValues={initialValues}
          onSubmit={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 4 && (
        <StudentGuardianForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          prevStep={prevStep}
        />
      )}
    </div>
  );
};

export default StudentForm;
