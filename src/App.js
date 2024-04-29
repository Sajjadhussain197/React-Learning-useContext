import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Displaycomponent from './components/Displaycomponent';
import Btncomponent from './components/Btncomponent';
import { BrowserRouter as Router , Route,Routes, Link } from "react-router-dom";
import Index from './pages';
import About from './pages/about';
import { UserContext } from './Usercontext';
function App() {
//  const [time,setTime]= useState({ms:0,s:0,m:0,h:0})
const [user, setUser]=useState("Adeel")
  return (
    <>
    {/* <div className="main-section">
    <div className="clock-holder">
      <div className="stopwatch">
        <Displaycomponent time={time}/>
        <Btncomponent/>
        </div>
    </div>
    </div> */}
<Router>
  <div className='main-seciton'><nav><ul><li><Link to='/' >Home</Link> </li>
  <li><Link to='/about' >About</Link> </li></ul></nav>
  <UserContext.Provider value={{ user,setUser }}>
  <Routes>
  <Route path='/' exact Component={Index}/>
  <Route path='/about/' Component={About}/>
  </Routes>
  </UserContext.Provider>
  </div>
</Router>
    </>
  );
}

export default App;
