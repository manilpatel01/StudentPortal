import React, { useEffect, useState } from 'react';
import XLSX from 'xlsx';
import axios from 'axios';

import Loading from '../../Util/Loading';
import ExcelStudentTable from './excelStudentTable';
import { APIENDPOINTS } from '../../redux/api_endpoint';

const ImportExcel = () => {
  const [sheetData, setSheetData] = useState();
  const [lable, setLable] = useState('Select Excel File');
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [response, setResponse] = useState({});
  const [tableHeader, setTableHeader] = useState([]);
  useEffect(() => {
    console.log(typeof sheetData)
    sheetData && console.log(sheetData)
  }, [sheetData])

  const handleSubmit = (e) => {
   
    e.preventDefault();
    if (!sheetData) {
      setError('Plese Select Excel File First!!');
      setSheetData();
      return;
    }
    setLoading(true);
    axios
      .post(APIENDPOINTS.importExcel(), sheetData)
      .then((res) => {
        console.log(res.data);
        setResponse({ type: 'success', msg: res.data.Success });
        setLoading(false);
        setSheetData();
        setTableHeader([]);
      })
      .catch((err) => {
        console.log(err.response);
        setResponse({
          type: 'danger',
          msg: err.response.data && 'Something Went Wrong!!',
        });
        setLoading(false);
      });
  };

  const onFileChange = async (e) => {
    var file = e.target.files[0];
    
    const acceptedType = ['xlsx', 'xls', 'csv'];
    const fileType = file.name.split('.').pop();
    if (acceptedType.indexOf(fileType) < 0) {
      setError('Only Excel File Allow!!');
      setLable('Select Excel File');
      setSheetData();
      return;
    }
    setError();
    setLable(file.name);

    var reader = new FileReader();

    reader.onload = function (e) {
      var data = e.target.result;
      data = new Uint8Array(data);
      var workbook = XLSX.read(data, { type: 'array' });
      console.log(workbook);
      var result = {};
      workbook.SheetNames.forEach(function (sheetName) {
        result = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
          header: 1,
        });
        //console.log(roa)
        // if (roa.length) result[sheetName] = roa; for more sheet
      });
      // see the result, caution: it works after reader event is done.
      console.log(result);

      var res = [];
      //this is header of excel file
      result[0] = [...result[0]].map(key => key.trim())
      setTableHeader(...result[0])
      for (let i = 1; i < result.length; i++) {
        let tempData = {};
        for (let data in result[i]) {
          
          var key = result[0][data];
        
          tempData[key] = result[i][data];
        }
        console.log(tempData);
        res.push(tempData);
      }
      setSheetData({
        excelStudentList: res,
      });
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} id="ExcelForm">
        <div className="row">
          <div className="col-lg-6 mt-lg-5 mx-auto">
            <div className="custom-file">
              <input
                type="file"
                accept=".xlsx, .xls, .csv"
                className="custom-file-input"
                id="excelFile"
                onChange={onFileChange}
              />
              <label className="custom-file-label" htmlFor="excelFile">
                {lable}
              </label>
              <label
                className="error"
                dangerouslySetInnerHTML={{ __html: error }}
              ></label>
            </div>
          </div>
        </div>

        <div className="form-group mt-3 text-center">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
        {loading === true ? (
          <Loading />
        ) : (
          response.msg && (
            <div
              className={`alert alert-${response.type}`}
              style={{ textAlign: 'center' }}
            >
              {response.msg}
            </div>
          )
        )}
      </form>
      {sheetData !== undefined && <ExcelStudentTable fields={sheetData["excelStudentList"]} tableHeader={tableHeader}></ExcelStudentTable>}
    </div>
  );
};

export default ImportExcel;





