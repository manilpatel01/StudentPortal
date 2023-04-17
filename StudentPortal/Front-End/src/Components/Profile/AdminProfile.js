import React from 'react'
import { connect } from 'react-redux'
import ModelChangeSign from './ModelChangeSign'
import ModelChangePhoto from './ModelChangePhoto'
import ModelChangePassword from './ModelChangePassword'
import Admin from './Tabe-Content/Admin'
import LeftProfilePanel from './LeftProfilePanel'
function AdminProfile(props) {
    const { credentials } = props.User;
    const sign = "/"+credentials["sign_url"]
    const photo = "/"+credentials["photo_url"]

    return (
        <>
            <ModelChangeSign
                sign={sign} domain="/admin" />

            <ModelChangePhoto
                photo={photo} domain="/admin" />

            <ModelChangePassword
                domain="/admin" />

            <LeftProfilePanel photo={photo} sign={sign} />
            
            <div className="col-lg-9 col-md-9 mt-5 mt-sm-0">
                <Admin credentials={credentials}></Admin>
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




export default connect(mapStateToProps, mapActionToProps)(AdminProfile)
