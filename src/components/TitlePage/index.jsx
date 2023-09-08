import React from 'react'
import './titlepage.scss'

const TitlePage = ({title, desc}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p className='title-desc'>{desc}</p>
    </div>
  )
}

export default TitlePage