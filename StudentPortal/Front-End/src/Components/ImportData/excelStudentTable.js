import React from 'react'

function ExcelStudentTable(props) {
    const tableHeader = props.tableHeader
    const renderData = (data) => {
        return data.map((student, i) => {
            return (
                <tr key={student.enrollment}>
                    <td>{i + 1}</td>
                    {tableHeader.map((header) => {
                        
                        if(header === 'gender') return <td>{student[header] === ('Male' || 'M' || 'male') ? 'male' : 'female'}</td>
                        return <td>{student[header]}</td>
                    })}
                </tr>
            )
        })
    }



    return (
        <div class="table-responsive">
            <table class="table table-bordered table-hover" id="table-to-xls">
                <thead>
                    <tr>
                        <th>Sr No.</th>
                       {tableHeader.map((header) => <th>{header}</th>)}
                    </tr>
                </thead>
                <tbody>{renderData(props.fields)}</tbody>
            </table>
        </div>

    )
}

export default ExcelStudentTable
