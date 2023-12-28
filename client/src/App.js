import './App.css';
import './Game.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/404'
import My from './pages/My';
import Invite from './pages/Invite';
import Recharge from './pages/Recharge';
import Register from './pages/Register';
import Toast from './components/Toast';
import Privilege from './pages/Privilege';
import MyLink from './pages/MyLink';
import TaskReward from './pages/TaskReward';
import CheckIn from './pages/CheckIn';
import FastParity from './games/FastParity';




function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my" element={<My />} />
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/invite" element={<Invite />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/invite/privilege' element={<Privilege/>}/>
        <Route path='/invite/my-link' element={<MyLink/>}/>
        <Route path='check-in' element={<CheckIn/>}/>
        <Route path='task-reward' element={<TaskReward/>}/>
        <Route path='/fast-parity' element={<FastParity/>}></Route>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </Router>
    <Toast/>
    </>
  )
}

export default App;
