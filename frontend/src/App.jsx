import './App.css'
import RegisterPage from './Screens/RegisterPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Screens/HomePage';
import AdminPage from './Screens/AdminPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
