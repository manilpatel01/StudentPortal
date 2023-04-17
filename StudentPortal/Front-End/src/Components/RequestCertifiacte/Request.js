import React, { useState ,useEffect} from "react";
import { connect ,useDispatch} from "react-redux";
import { requestCertificate } from "../../redux/actions/userAction";
import {CLEAR_ERRORS} from "../../redux/type"
import Loading from "../../Util/Loading";
import BonafideForm from "./BonafideForm";
import CharacterForm from "./CharacterForm";
import ConductForm from "./ConductForm";
import RankForm from "./RankForm";
import FeeRefundForm from "./FeeRefundForm";

const Request = (props) => {
  const dispatch = useDispatch();
  const { loading, errors, success } = props.UI;
  const [type, setType] = useState("");

  useEffect(() => {
   
    return () => {
      dispatch({
        type: CLEAR_ERRORS
      })
    }
  },[])
  

  const handleSubmit = (values) => {
    const formData = new FormData();
    Object.keys(values).forEach((field, index) => {
      if (field === "request_document") {
        formData.append(field, values[field], values[field].name);
      } else {
        formData.append(field, values[field]);
      }
    });
    props.requestCertificate(type, formData, props.history);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div class="container mt-5">
      <h1>Request Certificate</h1>
      <hr class="mb-5" />

      {loading === true ? (
        <Loading />
      ) : (
        errors.error && (
          <div class="alert alert-danger" style={{ textAlign: "center" }}>
            {errors.error}
          </div>
        )
      )}
      {success && (
        <div class="alert alert-success" style={{ textAlign: "center" }}>
          Certificate Apply SucccesFully.
        </div>
      )}

      <div className="from-group w-50 mx-auto mb-4">
        <select onChange={handleTypeChange} className="form-control">
          <option disabled hidden selected>
            Select Certificate Type
          </option>
          <option value="bonafide">Bonafide Certificate</option>
          <option value="character">Character Certificate</option>
          <option value="conduct">Conduct Certificate</option>
          <option value="rank">Rank Certificate</option>
        </select>
      </div>

      {type === "bonafide" && <BonafideForm onSubmit={handleSubmit} />}
      {type === "character" && <CharacterForm onSubmit={handleSubmit} />}
      {type === "conduct" && <ConductForm onSubmit={handleSubmit} />}
      {type === "rank" && <RankForm onSubmit={handleSubmit} />}
      {type === "feerefund" && <FeeRefundForm onSubmit={handleSubmit} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

export default connect(mapStateToProps, { requestCertificate })(Request);
