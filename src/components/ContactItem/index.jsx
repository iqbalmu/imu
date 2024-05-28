/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'
import './contact-item.scss'

const ContactItem = ({title, content, url}) => {
  return (
    <div className='contact-item'>
        <p className='title'>{title}</p>
        <p>
          <Link to={url} target='_blank'>{content}</Link>
          <span> ↗️</span>
        </p>
      </div>
  )
}

export default ContactItem