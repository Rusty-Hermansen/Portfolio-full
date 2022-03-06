import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ClientConfig from '../Models/clientConfig';
import { StoreDistpatch } from '../store';
import { addConfig, getStatus, restartService, removePeer } from '../store/client-config-slice'
import Registration from '../Components/Registration';
import { useStoreSelector } from '../store';
import keyModel from '../Models/keyModel'

const Wireguard = () => {
  const [peer, SetPeer] = useState<string>("");

  const dispatch = useDispatch<StoreDistpatch>();
  useEffect(() => {
    dispatch(getStatus())
  }, [dispatch, getStatus])

  const state = useStoreSelector(state => state.clientConfig.wg_status)

  const restartClicked = () => {
    dispatch(restartService());
  }

  const submitConfigHandler = (config: ClientConfig) => {
    dispatch(addConfig(config))
  }

  const peerChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    SetPeer(e.target.value)
  }
  const removePeerHandler = () => {
    try {
      const peerObject = new keyModel(peer)
      dispatch(removePeer(peerObject))
    }
    catch (err) {
      throw new Error("Invalid peer public key")
    }

  }
  return (
    <>

      <Registration onSubmit={submitConfigHandler} />
      <pre>{state}</pre>
      <br />
      <button type="button" onClick={restartClicked}>Restart Service</button>
      <br />
      <hr />
      <label>Enter the public key you want to remove from VPN:</label>
      <input type="text" onChange={peerChangeHandler}></input>
      <br />
      <button type="button" onClick={removePeerHandler}>Submit</button>
    </>
  )
}
export default Wireguard;