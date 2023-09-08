import React from 'react'
import { ContactForm, TitlePage } from '../../components'


const Conctact = () => {
  return (
    <div>
      <TitlePage title={"Contact"} desc={"contact me if you have no need but curious"} />
      <br /><br />
      <div className='form-contact'>
        <ContactForm />
      </div>
    </div>
  )
}

export default Conctact