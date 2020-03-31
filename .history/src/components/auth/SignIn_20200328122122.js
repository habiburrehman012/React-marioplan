import React, { Component } from 'react'

export default class SignIn extends Component {
    state={

    }

    submitHandler = () => {

    }

    changeHandler=()=>{

    }

    render() {
        return (
            <div className="container">
                <form onSubmit={submitHandler} className="white">
                    <h5 className="grey-text text-darken-3"></h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={changeHandler}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={changeHandler}/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}
