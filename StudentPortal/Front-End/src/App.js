import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { logout, setAuthorization } from './redux/actions/userAction';
import jwt_decode from 'jwt-decode';

import './App.css';
import Loading from './Util/Loading';
import store from './redux/store';
import AuthRoute from './AuthRoute/AuthRoute';
import NoAuthRoute from './AuthRoute/NoAuthRoute';
import Navigation from './Components/Navigation/Navigation';
import { $CombinedState } from 'redux';
import SearchAdmin from './Components/AdminPanel/SearchAdmin';
const UpdateUserInfo = lazy(() => import('./Components/AdminPanel/Update_Student_Admin/update_user_info'));

const ApproveFeeRefund = lazy(() =>
  import('./Components/AdminPanel/ApproveFeeRefund')
);
const SemesterProgression = lazy(() =>
  import('./Components/AdminPanel/SemesterProgression')
);
const FindDocument = lazy(() => import('./Components/AdminPanel/FindDocument'));
const SearchStudent = lazy(() =>
  import('./Components/AdminPanel/SearchStudent')
);
const Home = lazy(() => import('./Components/Home/Home'));
const studentDashboard = lazy(() =>
  import('./Components/DashBoard/StudentDashBoard')
);
const AdminDashboard = lazy(() =>
  import('./Components/DashBoard/AdminDashboard')
);
const PenndingVerification = lazy(() =>
  import('./Components/AdminPanel/PenndingVerification')
);
const ApproveCertificate = lazy(() =>
  import('./Components/AdminPanel/ApproveCertificate')
);
const Request = lazy(() => import('./Components/RequestCertifiacte/Request'));
const ForgotPassword = lazy(() =>
  import('./Components/ForgotPassword/ForgotPassword')
);
const AdminRegisterForm = lazy(() =>
  import('./Components/Registration/AdminRegisterForm')
);
const StudentRegisterForm = lazy(() =>
  import('./Components/Registration/StudentRegisterForm')
);
const ImportExcel = lazy(() => import('./Components/ImportData/ImportExcel'));
const Profile = lazy(() => import('./Components/Profile/Profile'));
const Login = lazy(() => import('./Components/Login/login'));
const Logout = lazy(() => import('./Components/Logout/Logout'));
const NotFound = lazy(() => import('./Components/NotFound/NotFound'));

function App() {
  
  const token = localStorage.getItem('token');
  const domain = localStorage.getItem('domain');

  if (token && domain) {
    if (jwt_decode(token).exp < Date.now() / 1000) {
      store.dispatch(logout());
    } else {
      store.dispatch(setAuthorization(token, domain));
    }
  }
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Suspense fallback={<Loading />}>
          <Switch>
            <NoAuthRoute exact path="/" component={Home} />
            <NoAuthRoute exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <NoAuthRoute
              exact
              path="/forgotPassword"
              component={ForgotPassword}
            />
            <NoAuthRoute
              exact
              path="/registerStudent"
              component={StudentRegisterForm}
            />

            <NoAuthRoute
              exact
              path="/registerFaculty"
              component={AdminRegisterForm}
            />

            <AuthRoute exact path="/profile" component={Profile} />
            <AuthRoute exact path="/student" component={studentDashboard} />
            <AuthRoute exact path="/admin" component={AdminDashboard} />
            <AuthRoute
              exact
              path="/admin/pendingVerification"
              component={PenndingVerification}
            />
            <AuthRoute
              exact
              path="/admin/pendingDocument"
              component={ApproveCertificate}
            />
            <AuthRoute
              exact
              path="/admin/pendingFeeRefund"
              component={ApproveFeeRefund}
            />

            <AuthRoute
              exact
              path="/admin/search-student"
              component={SearchStudent}
            />
            <AuthRoute
              exact
              path="/admin/findDocument"
              component={FindDocument}
            />
            <AuthRoute
              exact
              path="/admin/progressionBySem"
              component={SemesterProgression}
            />
            <AuthRoute
              exact
              path="/admin/updateStudentOrAdmin"
              component={UpdateUserInfo}
            />
            <AuthRoute exact path="/student/request" component={Request} />
            <AuthRoute exact path="/importExcel" component={ImportExcel} />
            <AuthRoute
              exact
              path="/admin/sshead/searchAdmin"
              component={SearchAdmin}
            />

            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;

// function DemoComp() {

// const [state, setState] = useState("")
//   useEffect(() => {

//     (async () => {

//       await Axios.get('/api/testMe')
//         .then((res) => {
//           setState(res)
//         })
//         .catch((err) => console.log(err));

//     })();

//     })
//   return (
//     <div>
//       {state}
//     </div>
//   )
// }
