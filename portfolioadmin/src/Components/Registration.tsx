import { FC, FormEvent, ChangeEvent, useState } from 'react';
import ClientConfig from '../Models/clientConfig';
import nameModel from '../../../Models/nameModel';
import ipAddressModel from '../../../Models/ipAddressModel';

type Props = {
    onSubmit: (config: ClientConfig) => void;
}

const Registration: FC<Props> = (props): JSX.Element => {
    const [name, setName] = useState<string>("");
    const [ipAddress, setIpAddress] = useState<string>("");
   

    

    const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
       setName(event.target.value);
    }
    const ipAddressChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setIpAddress(event.target.value);
    }


    

    const submitHandler = (event: FormEvent) =>{
        event.preventDefault();
        try{
            const userObject = new nameModel(name);
            const ipAddressObject = new ipAddressModel(ipAddress)
            const config = new ClientConfig(
                userObject,
                ipAddressObject,
                new Date())
            props.onSubmit(config)
        }
        catch(err){
            throw new Error("Invalid name or ip address")
        }
    

    }
    return( 
    <form onSubmit={submitHandler}>
        <label>Client Name</label>
        <input type="text" onChange={nameChangeHandler}/>
        <br/>
        <label>IP Address</label>
        <input type="text" onChange={ipAddressChangeHandler} />
        <br/>
        <button type='submit'>Submit</button>
    </form>
    )
}
export default Registration;