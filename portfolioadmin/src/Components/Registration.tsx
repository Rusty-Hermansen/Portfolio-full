import { FC, FormEvent, ChangeEvent, useState } from 'react';
import ClientConfig from '../Models/clientConfig';

type Props = {
    onSubmit: (config: ClientConfig) => void;
}

const Registration: FC<Props> = (props): JSX.Element => {
    const [name, setName] = useState<string>("");
    const [ipAddress, setIpAddress] = useState<string>("");
    const [ipRange, setIpRange] = useState<string>("");
    const [publicKey, setPublicKey] = useState<string>("");
    const [privateKey, setPrivateKey] = useState<string>("");

    const isFormValid = (
        name.trim().length > 0 && 
        ipAddress.trim().length > 0 &&
        ipRange.trim().length> 0 
     
    )
    

    const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
       setName(event.target.value);
    }
    const ipAddressChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setIpAddress(event.target.value);
    }
    const ipRangeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setIpRange(event.target.value);
    }

    

    const submitHandler = (event: FormEvent) =>{
        event.preventDefault();
        if (isFormValid){
            const config: ClientConfig = {
                name,
                ipAddress,
                dateAdded: new Date(),
                ipRange
                
            }
            props.onSubmit(config);
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
        <label>Allowed IP Range</label>
        <input type="text" onChange={ipRangeChangeHandler} />
        <br/>
        <button type='submit'>Submit</button>
    </form>
    )
}
export default Registration;