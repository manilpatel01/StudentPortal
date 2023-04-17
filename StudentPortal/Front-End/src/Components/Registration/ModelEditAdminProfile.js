import React, { useEffect ,useState} from 'react'
import { updateGLobalAdmin } from '../../redux/actions/dataAction'
import { connect, useDispatch } from 'react-redux'
import {destroy} from 'redux-form'
import Loading from '../../Util/Loading'
import EditAdminForm from './EditAdminForm'
import { CLEAR_ERRORS } from '../../redux/type'

function ModelEditAdminProfile(props) {
    const dispatch = useDispatch();
    const [user, setUser] = useState(props.user)
    const { loading, errors, success } = props.UI
    useEffect(() => {
        return () => {
          dispatch(destroy('AdminForm'));
        };
      }, []);

    useEffect(() => {
        setUser(props.user)
    }, [loading, errors, success,props.user])
    

    const handleSubmit = async (values) => {
        

        const formData = new FormData();
        Object.keys(values).forEach((field, index) => {
            formData.append(field, values[field]);
        });

        await props.updateGLobalAdmin(formData);
        setTimeout(() => {
            dispatch({ type: CLEAR_ERRORS })
            document.getElementById('profile-model-close').click()
        }, 3000)

    };
    return (

        <div class="modal fade" id="edit_admin_profile"  tabindex="-1" role="dialog" aria-labelledby="edit_profile_title" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="edit_profile_title">Edit Admin Profile</h4>
                        <button type="button" id="profile-model-close" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <EditAdminForm  onSubmit={handleSubmit} initialValues={user} />
                        {loading === true ?
                            <Loading /> :
                            errors.error && (
                                <div class="alert alert-danger"
                                    style={{ textAlign: "center" }}
                                >
                                    There's Might Be Some Server Error
                                </div>)
                        }
                        {
                            success &&
                            <div class="alert alert-success"
                                style={{ textAlign: "center" }}
                            >
                             Admin Profile Changed SucccesFully
                            </div>
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    UI: state.UI
});
export default connect(mapStateToProps, { updateGLobalAdmin })(ModelEditAdminProfile)