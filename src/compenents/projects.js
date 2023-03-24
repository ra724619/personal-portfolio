import React, {useState,useEffect} from 'react';
import projectsData from './projects.json';

function Project(props) {
    return(
        <div className='project'>
            <h2>{props.title}</h2>
            <img alt={props.title} src={props.src}/>
            <p><a href={props.deployedLink}>View deployed app</a></p>
            <p><a href={props.githubLink}>View GitHub repository</a></p>
        </div>
    );
}

function ProjectGallery() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData)
    },[]);

    return (
        <div className="project-gallery">
            <h1>Project Gallery</h1>
            <p>You can check out the project I worked on:</p>
            {projects.map((project) => (
            <Project
                key={project.id}
                title={project.title}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
                src={project.src}
            />
            ))}
        </div>
    )
}

export default ProjectGallery;