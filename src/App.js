import { Route, Routes, Link, NavLink } from 'react-router-dom';
import Crew from './Crew';
import Destination from './Destination';
import Home from './Home'
import Technology from './Technology';
import './App.css'
import Logo from './starter-code/assets/shared/logo.svg'

function App() {
  return (
    <main className='App'>
      <nav className='NavBar'>
        <img src={Logo} />
        <h6><NavLink to={'/home'} className={({isActive}) => isActive ? 'active': undefined}>00 HOME</NavLink></h6>
        <h6><NavLink to={'/destination'} className={({isActive}) => isActive ? 'active': undefined}>01 DESTINATION</NavLink></h6>
        <h6><NavLink to={'/crew'} className={({isActive}) => isActive ? 'active': undefined}>02 CREW</NavLink></h6>
        <h6><NavLink to={'/technology'} className={({isActive}) => isActive ? 'active': undefined}>03 TECHNOLOGY</NavLink></h6>
      </nav>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
