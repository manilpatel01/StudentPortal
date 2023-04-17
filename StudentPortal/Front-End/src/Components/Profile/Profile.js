import React from 'react'
import { useSelector } from 'react-redux'
import StudentProfile from './StudentProfile'
import AdminProfile from './AdminProfile'

function Profile() {
    const user = useSelector(state => state.User.credentials)

    return (
        <div className="container">
            <div className="row profile-title">
                <h3 className="title-text"><i className="fa fa-users"></i> View Profile</h3>
            </div>
            <div className="row mt-5">
                {
                    user.role === 'ROLE_STUDENT' ?
                        <StudentProfile /> :
                        <AdminProfile />
                }
            </div>

        </div>


    )
}

export default Profile
