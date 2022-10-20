
import { Routes, Route } from 'react-router-dom'
import Info from './pages/Info';
import logo from './assets/logo.png'
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import Diary from './pages/Diary';
import Home from './pages/Home';
import Nutrition from './pages/Nutrition';
import Profile from './pages/Profile';
import AddMeal from './pages/AddMeal';

function App() {
  return (
    <div className = 'h-screen text-white bg-gradient-to-r from-[#0c2311] via-[#054c14] to-[#063008] '>

      <div className='w-[400px] mx-auto h-full bg-primary'>

        <nav className = 'h-20 flex items-center'> <img src = {logo} className = 'mx-auto' /> </nav>

        <Routes>
          <Route path = 'info' element = { <Info /> } />
          <Route path = '/' element = { <Home /> }>
            <Route index element = { <Dashboard /> } />
            <Route path = 'diary' element = { <Diary /> } />
            <Route path = 'nutrition' element = { <Nutrition /> } />
            <Route path = 'profile' element = { <Profile /> } />
            <Route path = 'search' element = { <Search /> } />
            <Route path = 'search/:id' element = { <AddMeal /> } />
          </Route>
        </Routes>

      </div>

    </div>
  );
}

export default App;