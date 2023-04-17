import React, { useEffect, useState } from "react";
import Axios from "axios";
import Loading from "../../Util/Loading";
import DocumentModel from "./DocumentModel";
import FeeRefundModel from "./FeeRefundModel";
import { APIENDPOINTS } from "../../redux/api_endpoint";

function ApproveFeeRefund() {
  const [refundRequests, setrefundRequests] = useState();
  const [FeeDetails, setFeeDetails] = useState();
  const [feeReceipt, setfeeReceipt] = useState("");

  //"/upload/"+req["fee_document_url"]

  const approveReject = (refund_id, enrollment, status, comment) => {
    document.getElementById(`reject-${refund_id}`).disabled = "true";
    document.getElementById(`approve-${refund_id}`).disabled = "true";

    var formData = new FormData();
    formData.set("enrollment", enrollment);
    formData.set("status", status);
    if (comment !== null) formData.set("comment", comment);

    Axios.post(APIENDPOINTS.approveFeeRefund(), formData)
      .then((res) =>
        setrefundRequests(
          refundRequests.filter((d) => d.refund_id !== refund_id)
        )
      )
      .catch((e) => {
        console.log(e);
        document.getElementById(`reject-${refund_id}`).disabled = false;
        document.getElementById(`approve-${refund_id}`).disabled = false;
      });
  };

  useEffect(() => {
    (async () => {
      await Axios.get("/admin/pendingFeeRefund")
        .then((res) => {
          setrefundRequests(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    })();
  }, []);
  let i = 1;
  return (
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col">
          {refundRequests ? (
            refundRequests.length === 0 ? (
              <h1 className="text-center">
                No Fee Refund Requests Found For Approval!
              </h1>
            ) : (
              refundRequests && (
                <div class="table-responsive">
                  <table class="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Sr No.</th>
                        <th>Enrollment</th>
                        <th>Name</th>
                        <th>Semester</th>
                        <th>Fee Details</th>
                        <th>Fee Receipt</th>
                        <th>Approve</th>
                        <th>Reject</th>
                      </tr>
                    </thead>
                    <tbody>
                      {refundRequests.map((request) => (
                        <tr>
                          <td>{i++}</td>
                          <td>{request.enrollment}</td>
                          <td>
                            {request.first_name} {request.middle_name}{" "}
                            {request.last_name}{" "}
                          </td>
                          <td>{request.semester}</td>
                          <td>
                            <button
                              type="button"
                              class="btn btn-outline-primary btn-sm"
                              id={i}
                              data-toggle="modal"
                              data-target="#openFeeRefundModal"
                              onClick={(e) =>{ 
                                let dataObject ={};
                                dataObject.type =request.fees_type;
                                dataObject.transaction_no=request.transaction_no;
                                dataObject.bank_ac_no = request.bank_ac_no;
                                dataObject.bank_branch = request.bank_branch;
                                dataObject.bank_ifsc = request.bank_ifsc;
                                dataObject.bank_name = request.bank_name;
                                dataObject.amount = request.amount;


                                setFeeDetails(dataObject)}
                              
                              }
                            >
                              fee Details
                            </button>
                          </td>

                          <td>
                            <button
                              type="button"
                              class="btn btn-outline-primary btn-sm"
                              id={i}
                              data-toggle="modal"
                              data-target="#openDocumentModal"
                              onClick={(e) =>
                                setfeeReceipt(
                                  "/upload/" + request.fee_document_url
                                )
                              }
                            >
                              fee Receipt
                            </button>
                          </td>
                          <td>
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();

                                approveReject(
                                  request.refund_id,
                                  request.enrollment,
                                  1,
                                  null
                                );
                              }}
                            >
                              {
                                <button
                                  type="submit"
                                  class="btn btn-outline-success btn-sm"
                                  id={`approve-${request.refund_id}`}
                                >
                                  Aprrove
                                </button>
                              }
                            </form>
                          </td>
                          <td>
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                approveReject(
                                  request.refund_id,
                                  request.enrollment,
                                  2,
                                  e.target.comment.value
                                );
                              }}
                            >
                              <div class="input-group">
                                <input
                                  type="text"
                                  class="form-control"
                                  name="comment"
                                  placeholder="Enter Comment on reject..."
                                  required
                                />
                                <div class="input-group-append">
                                  <button
                                    type="submit"
                                    id={`reject-${request.refund_id}`}
                                    class="btn btn-outline-danger btn-sm"
                                  >
                                    Reject
                                  </button>
                                </div>
                              </div>
                            </form>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            )
          ) : (
            <Loading />
          )}
        </div>
      </div>
      <DocumentModel src={feeReceipt} />
      <FeeRefundModel data={FeeDetails}/>
    </div>
  );
}

export default ApproveFeeRefund;
