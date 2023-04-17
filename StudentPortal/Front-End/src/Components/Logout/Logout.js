import React, { useEffect } from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/userAction";

function Logout({ history, logout }) {
  const removeheader = () => {
    logout();
    history.push("/login");
  };
  useEffect(() => {
    removeheader();
  })
  return <></>;
  // return (
  //   <div className="container mt-5 text-center">
  //     <div className="">
  //       <h2
  //         className="text-center"
  //         className="btn btn-info"
  //         onClick={removeheader}
  //       >
  //         Logout
  //       </h2>
  //     </div>
  //   </div>
  // );
}

export default connect(null, { logout })(Logout);
