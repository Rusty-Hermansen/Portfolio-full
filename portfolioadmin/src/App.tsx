import { Routes, Route } from 'react-router-dom';
import NewUser from './Views/NewUser';
import Wireguard from './Views/Wireguard';

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element = {Wireguard}/>      
        <Route path='/newuser' element={NewUser}/>
    </Routes>

    <Wireguard/>
    <NewUser/>
    </div>
    
  );
}

export default App;
