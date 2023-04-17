import React from 'react';
import { useSelector } from 'react-redux';
import './Dashbord.css';

function StudentDashboard(props) {
  const User = useSelector((state) => state.User);
  const requests = User.credentials.request;
  const { faculty_approve, faculty_comment } = User.credentials;

  const Card = ({ title, status, message, comment }) => {
    
    let bgClass = '';
    if (status === 'Accepted') bgClass = 'bg-primary';
    else if (status === 'Pending') bgClass = 'bg-info';
    else if (status === 'Rejected') bgClass = 'bg-danger';
    return (
      <div className="col-sm-6 col-lg-3">
        <div className={`card text-white ${bgClass}`}>
          <div className="card-body">
            <div className="card-title">{title}</div>
            <div className="card-status">{status}</div>
            <div className="card-message">
              <div>{message}</div>
              {comment && <div>{comment}</div>}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProfileCard = () => {
    let status = '';
    let comment = '';
    if (faculty_approve === 1) {
      status = 'Accepted';
      comment = 'Now You can request any certificate.';
    } else if (faculty_approve === 0) {
      status = 'Pending';
      comment =
        'You can not request new certificate while your registration is under progress';
    } else {
      status = 'Rejected';
      comment = `Reason : ${faculty_comment}`;
    }
    const message = `Your application is ${status}.`;

    return (
      <Card
        title="Profile"
        status={status}
        message={message}
        comment={comment}
      />
    );
  };

  const RequestCard = () => {
    if (!requests) return <></>;
    return requests.map((req) => {
      let dept = '';
      let status = '';
      let message = '';
      let comment = '';
      if (req.status3 === 2 || req.status2 === 2 || req.status1 === 2) {
        if (req.status1 === 2) dept = 'Department';
        else if (req.status2 === 2) dept = 'Student Section';
        else dept = 'Student Section Head';

        status = 'Rejected';
        message = `Your application is Rejected by ${dept}.`;
        comment = `Reason : ${req.comment}`;
      } else if (req.status1 === 0 || req.status2 === 0 || req.status3 === 0) {
        if (req.status1 === 0) dept = 'Department';
        else if (req.status2 === 0) dept = 'Student Section';
        else dept = 'Student Section Head';

        status = 'Pending';
        message = `Your application is Pending at ${dept}.`;
        comment = 'Wait while you application is under progress';
      } else if (req.status3 === 1) {
        status = 'Accepted';
        message = 'Your application is Accepted.';
        comment = 'Please visit student section for issue your certificate';
      }
      return (
        <Card
          key={req.request_id}
          title={req.type}
          status={status}
          message={message}
          comment={comment}
        />
      );
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {<ProfileCard />}
        <RequestCard />
      </div>
    </div>
  );
}

export default StudentDashboard;
