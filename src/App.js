import { Route, Routes, Link } from 'react-router-dom';
import Crew from './Crew';
import Destination from './Destination';
import Home from './Home'
import NotFound from './NotFound';
import Technology from './Technology';
import './App.css'

function App() {
  return (
    <main className='App'>
      <nav className='NavBar'>
        <h6><Link to={'/'}>00 HOME</Link></h6>
        <h6><Link to={'/destination'}>01 DESTINATION</Link></h6>
        <h6><Link to={'/crew'}>02 CREW</Link></h6>
        <h6><Link to={'/technology'}>03 TECHNOLOGY</Link></h6>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
