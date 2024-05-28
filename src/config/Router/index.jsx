import { Route, Routes } from 'react-router-dom'
import { About, Contact, Projects } from '../../pages'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<About />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default Router