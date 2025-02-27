import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import SendMoney from './pages/SendMoney';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send/:id" element={<SendMoney />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
