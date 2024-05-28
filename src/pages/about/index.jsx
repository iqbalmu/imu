import React from 'react'
import { TitlePage } from '../../components'
import './about.scss'

const About = () => {
  return (
    <div>
      
      <TitlePage title={"About"} desc={"a glimpse of me that you may not want to know"} />
      <br /><br />
      <p className="text">
      Hello, my name is Iqbal Muhakim, a bachelor of software engineering student. Born in West Sumatra, Indonesia. just someone who loves programming and solving problems with it. interested in web programming, backend development and various other programming aspects. 
      </p>
    </div>
  )
}

export default About