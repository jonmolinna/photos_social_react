import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import PersistLogin from './Layout/PersistLogin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Rutas Publicas */}
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />

        {/* Rutas Privadas */}
        <Route element={<PersistLogin />}>
          <Route path='' element={<Home />} />
        </Route>

        {/* Error 404 */}
      </Route>
    </Routes>
  );
}

export default App;
