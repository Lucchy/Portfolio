import '../styles/projects.css'
import Card from './Card';
import projectsData from '../projects.json';
import React, { useState } from 'react';

const Projects = ({children}) => {
    const [selectedFilter, setSelectedFilter] = useState('All');
    
    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };


    const filteredProjects = projectsData.filter((project) => {
        return selectedFilter === 'All' || project.tech.includes(selectedFilter);
    });

    return (
        <div className='projects' id='projects'>
            <h2>My Projects</h2>
            <div className="p-ctn">
                <p className='p-intro'>{children}</p>
            </div>
            <div className='projects-ctn'>
                <div className="filters">
                    <p className={selectedFilter === 'All' ? 'active-filter':''} onClick = {() => handleFilterClick('All')}>All</p>
                    <p className={selectedFilter === 'HTML & CSS' ? 'active-filter':''} onClick={() => handleFilterClick('HTML & CSS')}>HTML & CSS</p>
                    <p className={selectedFilter === 'JS' ? 'active-filter':''} onClick={() => {handleFilterClick('JS')}}>JS</p>
                    <p className={selectedFilter === 'React' ? 'active-filter':''} onClick={() => {handleFilterClick('React')}}>React</p>
                    <p className={selectedFilter === 'SEO' ? 'active-filter':''} onClick={() => {handleFilterClick('SEO')}}>SEO</p>
                </div>
                <div className={`cards`}>
                    {filteredProjects
                    .sort((a,b) => b.id - a.id) //ordre décroissant
                    .map((project) => (
                        <Card 
                            key={project?.id}
                            url={project?.url}
                            img={project?.img} 
                            title= {project?.title}
                            description= {project?.description}
                            tags={project?.tags}
                        />
                    ))}
                </div>
            </div>
        </div>
    );

};

export default Projects;