import React from 'react';

const ProjectList = ({projects}) => {
    return(
        <div className="project-list section">
            {projects && projects.map(project=>{
                return (
                    <ProjectSummary project={project}/>
                )
            })}
        </div>
    );
}

export default ProjectList;