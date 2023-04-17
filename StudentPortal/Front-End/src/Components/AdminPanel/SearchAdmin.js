import Axios from 'axios';
import React, { useState } from 'react';
import { APIENDPOINTS } from '../../redux/api_endpoint';
import Loading from '../../Util/Loading';
import AdminModel from './AdminModel';
import AdminTable from './AdminTable';
import SearchAdminForm from './SearchAdminForm';

function SearchAdmin() {
  const [admins, setAdmins] = useState(null);
  const [admin, setAdmin] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    console.log(values);
    setLoading(true);
    await Axios.get(APIENDPOINTS.searchAdmin(), { params: values })
      .then((res) => {
        console.log(res.data);
        setAdmins(res.data);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  return (
    <div className="container mt-5">
      <SearchAdminForm onSubmit={handleSubmit} />
      {loading ? (
        <Loading />
      ) : (
        admins &&
        (admins.length === 0 ? (
          <h1 className="text-center">No Admin Found!</h1>
        ) : (
          <>
            <AdminTable data={admins} setAdmin={setAdmin} />
            <AdminModel credential={admin} />
          </>
        ))
      )}
    </div>
  );
}

export default SearchAdmin;
