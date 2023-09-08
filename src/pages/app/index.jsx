import './app.scss'
import { Router } from '../../config'
import { Navbar, Footer } from '../../components'

function App() {
  return (
    <div className='wrapper'>
      <Navbar />
      <div className="content">
        <Router />
      </div>
      <Footer />
    </div>
  )
}

export default App
