import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => {

    const {auth} = props;

    cont links = auth.id ? <SignedInLinks/>  : <SignedOutLinks/>;

    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Mario Plan</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);