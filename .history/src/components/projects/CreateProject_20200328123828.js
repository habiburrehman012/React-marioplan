import React, { Component } from 'react'

class CreateProject extends Component {
    state={
        title:"",
        content:""
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
        return (
            <div className="container">
                <form onSubmit={this.submitHandler} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.changeHandler}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="title">Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.changeHandler}/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateProject;
