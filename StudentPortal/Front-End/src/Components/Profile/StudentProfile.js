import React from 'react'
import { connect } from 'react-redux'

import Student from './Tabe-Content/Student'
import Personal from './Tabe-Content/Personal'
import Family from './Tabe-Content/Family'

import ModelChangeSign from './ModelChangeSign'
import ModelChangePhoto from './ModelChangePhoto'
import ModelChangePassword from './ModelChangePassword'
import ModelEditProfile from './ModelEditProfile'
import LeftProfilePanel from './LeftProfilePanel'
function StudentProfile(props) {
    const { credentials } = props.User;
    const photo = "/"+credentials["photo_url"]
    const sign ="/"+credentials["sign_url"]
    return (
        <>
            <ModelChangeSign
                sign={sign} domain="/student" />

            <ModelChangePhoto
                photo={photo} domain="/student" />

            <ModelChangePassword
                domain="/student" />

            {!props.faculty_approve && <ModelEditProfile user={credentials}/>}
            <LeftProfilePanel photo={photo} sign={sign} faculty_approve={props.faculty_approve} />
            <div className="col-lg-9 col-md-9 mt-5 mt-sm-0">
                <ul className="nav nav-tabs viewProfileTab">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#student"><i className="fas fa-user-graduate"></i> Student Details</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#personal"><i className="fa fa-bookmark"></i> Personal Details</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#family"><i className="fa fa-info"></i> Family Details</a>
                    </li>

                </ul>

                <div className="tab-content">
                    <Student credentials={credentials} />
                    <Personal personal={credentials.info} />
                    <Family family={credentials.guardian} />
                </div>

            </div>
        </>
    )
}


const mapStateToProps = (state) => ({
    UI: state.UI,
    User: state.User,

})

const mapActionToProps = {

}

export default connect(mapStateToProps, mapActionToProps)(StudentProfile)
