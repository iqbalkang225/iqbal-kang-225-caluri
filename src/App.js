import { Routes, Route } from 'react-router-dom';
import Info from './pages/Info';
import logo from './assets/logo.png';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Diary from './pages/Diary';
import Home from './pages/Home';
import Nutrition from './pages/Nutrition';
import Profile from './pages/Profile';
import AddMeal from './pages/AddMeal';
import Calories from './pages/Calories';
import Nutrients from './pages/Nutrients';
import Macros from './pages/Macros';
import EditMeal from './pages/EditMeal';

function App() {
  return (
    <div className='h-screen text-white bg-gradient-to-r from-[#0c2311] via-[#054c14] to-[#063008] 2xl:text-3xl 3xl:text-4xl overflow-y-hidden'>
      <div className='w-[400px] 2xl:w-[600px] 3xl:w-[800px] mx-auto h-full bg-primary'>
        <nav className='h-20 flex items-center'>
          <img src={logo} className='mx-auto' />
        </nav>

        <Routes>
          <Route path='info' element={<Info />} />
          <Route path='/' element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path='diary' element={<Diary />} />
            <Route path='edit' element={<EditMeal />} />
            <Route path='profile' element={<Profile />} />
            <Route path='search' element={<Search />} />
            <Route path='search/:id' element={<AddMeal />} />
            <Route path='nutrition' element={<Nutrition />}>
              <Route index element={<Calories />} />
              <Route path='nutrients' element={<Nutrients />} />
              <Route path='macros' element={<Macros />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
