import React from 'react';

function AccountInfo(props) {
    return (
        <div className="account-info-container">
            <div>
                <p>Username:</p>
                <p>{props.user.username}</p>
            </div>
            <div>
                <p>Email:</p>
                <p>{props.user.email}</p>
            </div>
        </div>
    );
}

export default AccountInfo;