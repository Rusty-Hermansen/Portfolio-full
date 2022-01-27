import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ClientConfig from './Models/clientConfig';
import apiService from './services/apiService';
import './App.css';
import { StoreDistpatch } from './store';
import { addConfig, getStatus, restartService} from './store/client-config-slice'
import Registration from './Components/Registration';
import { useStoreSelector} from './store';


function App() {
 

  const dispatch = useDispatch<StoreDistpatch>();
 useEffect(()=>{
    dispatch(getStatus())
  }, [dispatch, getStatus])

  const state = useStoreSelector(state => state.clientConfig.wg_status)
  
  const restartClicked = () => {
    dispatch(restartService());
  }

    const submitConfigHandler = (config: ClientConfig) =>{
      dispatch(addConfig(config))
      }
  return (
    <>
    <Registration onSubmit={submitConfigHandler}/>
    <pre>state</pre>
    <button type="button" onClick={restartClicked}>Restart Service</button>
    </>
    
  );
}

export default App;
