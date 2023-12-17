import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/404'
import My from './pages/My';
import Invite from './pages/Invite';
import Recharge from './pages/Recharge';
import Register from './pages/Register';


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my" element={<My />} />
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/invite" element={<Invite />} />
        <Route path='/register' element={<Register/>}></Route>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </Router>
  )
}

export default App;
