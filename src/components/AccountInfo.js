import React from 'react';

function AccountInfo(props) {
    return (
        <div className="account-info-container">
            <div>
                <div className="acc-inner-div">
                    <p className="acc-info-title">Username:  </p>
                    <p className="acc-info-text"> {props.user.username}</p>
                </div>
            </div>
            <div>
                <div className="acc-inner-div">
                    <p className="acc-info-title">Email:  </p>
                    <p className="acc-info-text"> {props.user.email}</p>
                </div>
            </div>
            <div>
                <p onClick={() => props.logout(props.history)} className="logout-link">Logout</p>
            </div>
        </div>
    );
}

export default AccountInfo;