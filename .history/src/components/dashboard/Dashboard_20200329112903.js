import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';

class Dashboard extends React.Component
{
    
    render()
    {
        const {prjects} = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects= {this.props.projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard);