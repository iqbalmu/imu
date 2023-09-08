import React from 'react'
import './contact-form.scss'

const ContactForm = () => {
  return (
    <div>
        <div className="form-group">
            <div className="form-control">
                <label htmlFor="name">Name</label>
                <input type="text" name='name' id='name' placeholder='your name' required/>
            </div>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email' placeholder='email@example.com' required/>
            </div>
        </div>
        <div className="form-control">
            <label htmlFor="subject">Subject</label>
            <input type="text" name='subject' id='subject' placeholder='subject' required/>
        </div>
        <div className="form-area">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10" placeholder='your message' required>

            </textarea>
        </div>
        <div className="form-control">
            <button>Submit</button>
        </div>
    </div>
  )
}

export default ContactForm