import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import PersistLogin from './Layout/PersistLogin';
import ProfileUser from './Layout/ProfileUser';
import RequireAuth from './Layout/RequireAuth';
import Profile from './pages/Profile';
import Upload from './pages/Upload';
import Posts from './pages/Posts';
import Likes from './pages/Likes';
import Saved from './pages/Saved';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Rutas Publicas */}
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />

        {/* Rutas Privadas */}
        <Route element={<PersistLogin />}>
          <Route element={<ProfileUser />}>
            <Route element={<RequireAuth />}>
              <Route path='/' element={<Home />} />
              <Route path='/:email' element={<Profile />}>
                <Route path='/:email/' element={<Posts />} />
                <Route path='/:email/saved' element={<Saved />} />
                <Route path='/:email/likes' element={<Likes />} />
              </Route>
              <Route path='/upload' element={<Upload />} />
            </Route>
          </Route>
        </Route>

        {/* Error 404 */}
      </Route>
    </Routes>
  );
}

export default App;
