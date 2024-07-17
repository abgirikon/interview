import React from 'react';
import {connect} from "react-redux";
import {getCurrentUser, changePassword, uploadPicture} from '../../redux/actions/profile';
import {updateuser} from "../../redux/actions/manageuser";
import '../../styles/project.css'
import '../../styles/common.css';
import '../../styles/custom.css';


const Dashboard = ({getCurrentUser, updateuser, changePassword, uploadPicture,}) => {
    return (<div className="marginTop">
        <h3 className='label-bold'>User Details</h3>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <input type="file" id="file" />
        </div>
        {/*  Table  */}
    </div>);
}

const mapStateToProps = (state) => ({
    //currentUserDetails: state.profile.userDetails
});

const mapDispatchToProps = {
    getCurrentUser,
    updateuser,
    changePassword,
    uploadPicture
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


