import React from 'react';
import { contentStyle, dataStyle } from './CertiStyle';

const Rank = ({ data }) => {
  const {
    gender,
    name,
    course,
    branch,
    enrollment,
    addmission_year,
    graduation_year,
    cgpa,
    ranks,
  } = data;
  return (
    <div style={contentStyle}>
      <p style={{ textIndent: '36pt', marginBottom: '20pt' }}>
        This is to certify that <span style={dataStyle}>{gender}.</span>{' '}
        <span style={dataStyle}>{name}</span> was student of this College from
        JUNE - <span style={dataStyle}>{addmission_year}</span> to MAY -{' '}
        <span style={dataStyle}>{graduation_year}</span> in{' '}
        <span style={dataStyle}>{course}</span>{' '}
        <span style={dataStyle}>{branch}</span> [Enrolment No.{' '}
        <span style={dataStyle}>{enrollment}</span>].
      </p>
      <p style={{ textIndent: '36pt', marginBottom: '20pt' }}>
        He has completed his study in MAY. –{' '}
        <span style={dataStyle}>{graduation_year}</span> in Regular course. His
        CGPA is <span style={dataStyle}>{cgpa}</span>. He got{' '}
        <u style={{ textTransform: 'uppercase', fontWeight: 'bolder' }}>
          {ranks}
        </u>{' '}
        in <span style={dataStyle}>{branch}</span>.
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

export default Rank;
