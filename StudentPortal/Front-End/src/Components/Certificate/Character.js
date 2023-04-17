import React from 'react';
import { contentStyle, dataStyle } from './CertiStyle';

const Character = ({ data }) => {
  const {
    gender,
    name,
    course,
    branch,
    enrollment,
    addmission_year,
    graduation_year,
  } = data;
  return (
    <div style={contentStyle}>
      <p style={{ textIndent: '36pt', marginBottom: '20pt' }}>
        This is to certify that <span style={dataStyle}>{gender}.</span>{' '}
        <span style={dataStyle}>{name}</span> was the student of this College
        from JUNE - <span style={dataStyle}>{addmission_year}</span> to MAY -{' '}
        <span style={dataStyle}>{graduation_year}</span> in{' '}
        <span style={dataStyle}>{course}</span>{' '}
        <span style={dataStyle}>{branch}</span> [Enrolment No.{' '}
        <span style={dataStyle}>{enrollment}</span>].
      </p>
      <p style={{ textIndent: '36pt', marginBottom: '20pt' }}>
        He has completed his study in MAY. –{' '}
        <span style={dataStyle}>{graduation_year}</span> in Regular course.
      </p>
      <p style={{ marginBottom: '20pt' }}>
        The course is approved by ALL INDIA COUNCIL FOR TECHNICAL EDUCATION NEW
        DELHI and college is affiliated to the Gujarat Technological University.
        The Medium of instruction and examination is in English.
      </p>
      <p style={{ textIndent: '36pt', marginBottom: '20pt' }}>
        He bears good moral character according to best of my knowledge.
      </p>
    </div>
  );
};

export default Character;
