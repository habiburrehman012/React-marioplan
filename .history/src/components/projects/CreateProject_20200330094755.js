import React, { Component } from 'react';
import {connect} from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import {Redirect} from 'react-router-dom';

class CreateProject extends Component {
    state={
        title:"",
        content:""
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.createProject(this.state);
    }

    changeHandler=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        });
    }

    render() {
        const {projects, auth} = this.props;

        if (!auth.uid)
            return <Redirect to='/signin'/>

        return (
            <div className="container">
                <form onSubmit={this.submitHandler} className="white">
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.changeHandler}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="title">Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.changeHandler}/>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject);
