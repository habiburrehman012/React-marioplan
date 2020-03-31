import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

function ProjectDetail(props) {
    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>lorem ipssum anada dasdd dasldsad pldpasld pdsladp oo pdplas</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>
                        Posted by the Habib
                    </div>
                    <div>
                        2nd September, 10 pm
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps)=>{
    console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.Projects;
    const project = projects ? projects[id]:null;
    return {
        project
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'Projects'}
    ])
)(ProjectDetail);