import './App.css';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Dashboard from './pages/dashboard';
import VerifyLand from './pages/VerifyLand';
import VerifyUser from './pages/VerifyUser';
import TransferOwnerShip from './pages/TransferOwnerShip';
import Login from './pages/Login';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={ <Dashboard /> } />
        <Route exact path="/VerifyLand"  element={ <VerifyLand /> } />
        <Route exact path="/VerifyUser"  element={ <VerifyUser /> } />
        <Route exact path="/TransferOwnerShip"  element={ <TransferOwnerShip /> } />
        <Route exact path="/Login"  element={ <Login /> } />
      </Routes>
    </Router>
  );
}

export default App;
