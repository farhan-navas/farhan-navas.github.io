import { Route, Routes } from 'react-router-dom';
import Crew from './Crew';
import Destination from './Destination';
import Home from './Home'
import NavBar from './NavBar';
import NotFound from './NotFound';
import Technology from './Technology';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
