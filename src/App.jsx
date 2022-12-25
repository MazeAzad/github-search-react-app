import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashbord from './page/dashbord';
import Login from './page/login';
import ProtectedRoute from './page/protectedRoute';
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element=
          {
            <ProtectedRoute>
              <Dashbord />
            </ProtectedRoute>
          } />

        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App
