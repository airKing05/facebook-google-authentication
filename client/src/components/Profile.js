import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Profile(props) {
    const history = useHistory();
    const [userData, setUserData] = useState({
        userName: "",
        userImg: "",
        userEmail: "",
        userSex: ""
    });

    useEffect(() => {
       if(props.user){
        setUserData({
            userName: props.user.userName,
            userImg: props.user.userImg,
            userEmail: props.user.userEmail,
            userSex: props.user.userSex
        })
       }
    }, [])

    return (

        <div className="container my-5 text-center" style={{maxWidth: '800px'}}>
            {
                props.user ? <div>
                    <h1>Welcome too the your profile Page</h1>
                    <div className="row mt-4 py-4 px-3" style={{boxShadow: '0px 0px 5px #000'}}>
                        <div className="col-3 d-flex align-items-center">
                            <img src={userData.userImg} className="img-fluid img-thumbnail"  alt="user-image" style={{width:'250px'}}/>
                        </div>
                        <div className="col-9 ">
                            <h3 className="d-flex justify-content-start">{props.user.googleId}</h3>
                            <h2 className="d-flex justify-content-start">{userData.userName}</h2>
                            <h3 className="d-flex justify-content-start">{userData.userEmail}</h3>
                            <h4 className="d-flex justify-content-start" style={{textTransform: ' capitalize'}}> <strong>Gender: </strong> &nbsp; {userData.userSex}</h4>
                        </div>
                    </div>


                </div> : history.push('/')
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps)(Profile);
