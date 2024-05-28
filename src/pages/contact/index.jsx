import { TitlePage } from '../../components'
import ContactItem from '../../components/ContactItem'
import { contacts } from '../../data'

const Conctact = () => {
  return (
    <div>
      <TitlePage title={"Contact"} desc={"contact me if you have no need but curious"} />
      <br /><br />

      {contacts.map((item) => (
        <ContactItem key={item.id} title={item.title} content={item.content} url={item.url} />
      ))}

      {/* <div className='form-contact'> */}
        {/* <ContactForm /> */}
      {/* </div> */}
    </div>
  )
}

export default Conctact