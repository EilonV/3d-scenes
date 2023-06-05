import './assets/scss/styles.scss'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { Nav } from './components/nav'
import { Rocket } from './pages/rocket'
import { Sweeper } from './pages/sweeper'

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rocket' element={<Rocket />} />
        <Route path='/sweeper' element={<Sweeper />} />
      </Routes>

    </div>
  )
}

export default App
