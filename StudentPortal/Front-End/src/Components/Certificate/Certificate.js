import React, { Component } from 'react';
import {
  containerStyle,
  headerStyle,
  headerDataStyle,
  photoStyle,
  titleStyle,
} from './CertiStyle';

import Bonafide from './Bonafide';
import Character from './Character';
import Conduct from './Conduct';
import Rank from './Rank';
import { getBranch } from '../Registration/data';

class Certificate extends Component {
  renderCertificate = (type, data) => {
    const name = `${data.first_name} ${data.middle_name} ${data.last_name}`;
    const gender = data.gender === 'male' ? 'Mr' : 'Mis';
    const branch = getBranch(data.branch, data.course);
    const request = { ...data, name, gender, branch };
    console.log('certificate', data);
    if (type === 'bonafide') return <Bonafide data={request} />;
    if (type === 'character') return <Character data={request} />;
    if (type === 'conduct') return <Conduct data={request} />;
    if (type === 'rank') return <Rank data={request} />;
  };

  render() {
    const { data } = this.props;

    return (
      <div style={containerStyle}>
        <table style={headerStyle}>
          <tbody>
            <tr>
              <td>
                <img src="/static/images/Certi-Left.png" alt="LDCE LOGO" />
              </td>
              <td style={headerDataStyle}>
                <span>L.D.College of Engineering,Ahmedabad-380015</span>
                <br />
                <span>एल.डी.कोलेज ऑफ़ इंजीनियरिंग, अहमदाबाद – ३८००१५</span>
                <br />
                <span>લા.દ.ઈજનેરી મહાવિદ્યાલય,અમદાવાદ-૩૮૦૦૧૫</span>
                <br />
                <span style={{ fontSize: '14pt' }}>
                  Phone:079-26306752 (Office), 26303190
                </span>
                <br />
                <span style={{ fontSize: '11pt' }}>
                  Email:{' '}
                  <a href="mailto:ldce-abad-dte@gujarat.gov.in">
                    ldce-abad-dte@gujarat.gov.in
                  </a>{' '}
                  Website: www.ldce.ac.in
                </span>
              </td>
              <td>
                <img
                  src="/static/images/Certi-Right.png"
                  alt="15 Years of Celebration The Mahatma"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          <span>LDCE/STS/CERTI - {new Date().getFullYear()}/</span>
          <span style={{ float: 'right' }}>
            DATE: {new Date().toLocaleDateString()}
          </span>
        </div>

        <div style={{ textAlign: 'right' }}>
          <img style={photoStyle} src={`/${data.photo_url}`} alt="Student" />
        </div>

        <div style={titleStyle}>{data.type} CERTIFICATE</div>

        {this.renderCertificate(data.type, data)}

        <table style={{ width: '100%', marginTop: '130pt' }}>
          <tbody>
            <tr>
              <td style={{ width: '33.33%' }}></td>
              <td style={{ width: '33.33%', textAlign: 'center' }}>
                College Seal
              </td>
              <td style={{ width: '33.33%', textAlign: 'right' }}>PRINCIPAL</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Certificate;
