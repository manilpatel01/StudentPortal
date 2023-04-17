import React from 'react';
import { contentStyle, dataStyle } from './CertiStyle';

const Bonafide = ({ data }) => {
  const { gender, name, course, branch, enrollment, semester } = data;
  return (
    <div style={contentStyle}>
      <p style={{ textIndent: '36pt', marginBottom: '20pt' }}>
        This is to certify that <span style={dataStyle}>{gender}.</span>{' '}
        <span style={dataStyle}>{name}</span> is a bonafide student of this
        college studying in <span style={dataStyle}>{course}</span>{' '}
        <span style={dataStyle}>{branch}</span> (Sem-{' '}
        <span style={dataStyle}>{semester}</span> Regular -{' '}
        <span style={dataStyle}>{new Date().getFullYear()}</span>) [Enrolment
        No. <span style={dataStyle}>{enrollment}</span>].
      </p>
      <p style={{ marginBottom: '20pt' }}>
        The course is approved by ALL INDIA COUNCIL FOR TECHNICAL EDUCATION NEW
        DELHI and college is affiliated to the Gujarat Technological University.
        The Medium of instruction and examination is in English.
      </p>
    </div>
  );
};

export default Bonafide;
