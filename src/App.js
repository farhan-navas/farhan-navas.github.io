import { Route, Routes } from 'react-router-dom';
import Crew from './Crew';
import Destination from './Destination';
import Home from './Home'
import Technology from './Technology';
import './App.css'

function App() {
  return (
    <main className='App'>
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
