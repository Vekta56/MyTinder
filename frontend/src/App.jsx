import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from './components/Body'
import Login from './pages/Login'
import Profile from './pages/Profile'

function App() {
  return (
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
