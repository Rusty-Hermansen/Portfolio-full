import { Routes, Route } from 'react-router-dom';
import NewUser from './Views/NewUser';
import Wireguard from './Views/Wireguard';

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element = {Wireguard}
/>      <Route path='/'element={NewUser}/>
    </Routes>
    </div>
    
  );
}

export default App;
