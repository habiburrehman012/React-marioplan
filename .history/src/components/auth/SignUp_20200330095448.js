import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
    state={
        email:"",
        password:"",
        firstName:"",
        lastName:""
    }

    submitHandler = (e) => {
        e.preventDefault();

        console.log("data=>",this.state);
    }

    changeHandler=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        });
    }

    render() {

        const { auth } = this.props;

        if (auth.uid) return <Redirect to='/'/>

        return (
            <div className="container">
                <form onSubmit={this.submitHandler} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.changeHandler}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.changeHandler}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.changeHandler}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.changeHandler}/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">SignUp</button>
                    </div>
                </form>
            </div>
        );
    }
}



export default SignUp;
