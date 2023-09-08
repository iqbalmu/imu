import React from 'react'
import { TitlePage } from '../../components'
import Project from '../../components/Project'
import { projects } from '../../data';

const Projects = () => {
  return (
    <div>
      <TitlePage title={"Projects"} desc={"several projects that I made"} />
      <br /><br />

      <div className='showcase'>
        {
          projects.map((project) => (
            <Project key={project.id} image={project.image} title={project.title} desc={project.desc} tags={project.tags} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects