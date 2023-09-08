import React from 'react'
import './project.scss'

const Project = ({ image, title, desc, tags }) => {
    return (
        <div className='project-card'>
            <div className="project-image">
                <img src={image} alt="project preview" />
            </div>
            <div className="project-desc">
                <h2>{title}</h2>
                <p>{desc}</p>
                <ul>
                    {tags.map((tag,) => (
                        <li key={tag}> # {tag}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Project