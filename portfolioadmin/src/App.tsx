import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ClientConfig from './Models/clientConfig';
import apiService from './services/apiService';
import './App.css';
import { StoreDistpatch } from './store';
import { addConfig} from './store/client-config-slice'
import Registration from './Components/Registration';

function App() {
  const dispatch = useDispatch<StoreDistpatch>();

  

    const submitConfigHandler = (config: ClientConfig) =>{
      dispatch(addConfig(config))
      }
  return (
    <Registration onSubmit={submitConfigHandler}/>
  );
}

export default App;
