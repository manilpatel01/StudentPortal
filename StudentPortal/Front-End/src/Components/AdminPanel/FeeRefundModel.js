import React from 'react'

export default function FeeRefundModel({data}) {
    console.log(data)
    const capitalize = (s) => {
        if (typeof s !== "string") return "";
        return s.charAt(0).toUpperCase() + s.slice(1);
      };

    return (
        <div class="modal fade" id="openFeeRefundModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="change_photo_title">
              Fee Receipt
            </h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
           
          <table class="table table-bordered">
 
  <thead>
   
  </thead>
 
   {data && <tbody><tr>
    <th scope="row">Fee Type </th>
    <td>{capitalize(data.type.toLowerCase())} Fee</td>
   </tr>
   <tr>
    <th scope="row">Amount</th>
    <td>{data.amount} </td>
   </tr>

   <tr>
    <th scope="row">Transection Id </th>
    <td>{data.transaction_no} </td>
   </tr>
   <tr>
    <th scope="row">Bank Name </th>
    <td>{data.bank_name} </td>
   </tr>
   <tr>
    <th scope="row">Bank Ifsc Code </th>
    <td>{data.bank_ifsc} </td>
   </tr>
   <tr>
    <th scope="row">Bank Branch </th>
    <td>{data.bank_branch} </td>
   </tr>

   <tr>
    <th scope="row">Bank Account Number </th>
    <td>{data.bank_ac_no} </td>
   </tr></tbody> }
   
   
   


</table>



          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-danger btn-lg"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}
