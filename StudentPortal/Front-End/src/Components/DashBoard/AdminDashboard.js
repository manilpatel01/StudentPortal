import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function AdminDashboard() {
  
 
  const dashboard = useSelector((state) => state.User.dashboard);

  const Card = ({ title, count, link }) => {
    const disabled = count === 0 ? 'disabled' : '';
    return (
      <div className="col-sm-6 col-lg-4 mb-4">
        <div className="card text-center">
          <div className="card-header">
            <div className="card-title" style={{ fontSize: '1.3rem' }}>
              {title}
            </div>
          </div>
          <div className="card-body" style={{ fontSize: '1.2rem' }}>
            <div>
              Pennding {title}: <b>{count}</b>
            </div>
          </div>
          <div className="card-footer">
            <Link to={link} className={`btn btn-primary btn-block ${disabled}`}>
              Approve Now
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const DashboardCard = () => {
    if (!dashboard) return <></>;
    const key = Object.keys(dashboard);
    if (!key) return <></>;

    return key.map((item) => {
      let link = '';
      if (item === 'Registered Student') link = '/admin/pendingVerification';
      else if (item === 'Applied Document') link = '/admin/pendingDocument';

      return (
        <Card key={item} title={item} count={dashboard[item]} link={link} />
      );
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-around">
        <DashboardCard />
      </div>
    </div>
  );
}

export default AdminDashboard;
