import { FC, FormEvent, ChangeEvent, useState } from 'react';
import clientConfig from '../Models/clientConfig';

const Registration: FC = (): JSX.Element => {
    const [name, setName] = useState<string>();
    const [ipAddress, setIpAddress] = useState<string>();
    const [ipRange, setIpRange] = useState<string>();
    const [publicKey, setPublicKey] = useState<string>();
    const [privateKey, setPrivateKey] = useState<string>();

    const isFormValid = {
        name.trim().length > 0 && 
        ipAddress.trim().length > 0 &&
        ipRange.trim().length> 0 &&
        publicKey.trim().length>0 &&
        privateKey.trim().length>0;
    }
    }

    const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
       setName(event.target.value);
    }
    const ipAddressChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setIpAddress(event.target.value);
    }
    const ipRangeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setIpRange(event.target.value);
    }
    const publicKeyChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPublicKey(event.target.value);
    }
    const privateKeyChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPrivateKey(event.target.value);
    }
    

    const submitHandler = (event: FormEvent) =>{
        event.preventDefault();
        if (isFormValid){
              const config: clientConfig = {
            name,
            ipAddress,
            dateAdded: new Date(),
            ipRange,
            publicKey,
            privateKey, 
        }
        }
      

    }
    return( <form>
        <label>Client Name:</label>
        <input type="text"/>
        <label>IP Address:</label>
        <input type="text"/>
        <label>Allowed IP Range:</label>
        <input type="text"/>
        <label>Client Public Key:</label>
        <input type="text"/>
        <label>Client Private Key:</label>
        <input type="text"/>
        <button type ="submit">Submit</button>
    </form>
    )
}
export default Registration;