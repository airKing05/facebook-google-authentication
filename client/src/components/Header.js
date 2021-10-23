import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

function Header(props) {
    const renderContect = () => {
        switch (props.user) {
            case null:
                return <a className="nav-link" href="#loading">Loading...</a>
            case false:
                return <a className="nav-link" href="/auth/google">SignUp</a>
            default:
                return (
                    <React.Fragment>
                        <Link className="nav-link" to="/profile">Profile</Link>
                        <a className="nav-link" href="/api/logout">LogOut</a>
                    </React.Fragment>
                )
        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger ">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Facebook Google Auth</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ml-auto" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <Link className="nav-link active" aria-current="page" to= '/'>Home</Link>
                        {
                            renderContect()
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
};

const mapStateToProps = (state) => {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps)(Header);
