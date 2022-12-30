import {FC, FormEvent, ChangeEvent, useState } from 'react';


const CalcCost: FC<any>= () : JSX.Element  => {
    const [cost, setCost] = useState<number>(0.0);
    const [margin, setMargin] = useState<number>(0.0);
    const [retailPrice, setRetailPrice] = useState(0.0);

    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault();
        let calculatedPrice = cost / (1 - (margin / 100 ))
        setRetailPrice(calculatedPrice) 
    }

    const costChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCost(parseFloat(event.target.value))
    }

    const marginChangedHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMargin(parseFloat(event.target.value))
    }

  return (

    <div className="container">
        <div className="row">
            <ul>
                <h1>Calculate Price from Cost</h1>  
            </ul>  
        </div>
        <div className="row">
            <form onSubmit={onSubmitHandler}>
                <label>Item Cost:</label>
                <input type='text' onChange={costChangedHandler}/>
                <br/>
                <label>Desired Percentage of margin:</label>
                <input type='text' onChange={marginChangedHandler}/>%
                <button type='submit'>Get Sale Price</button>
            </form>
            <br/>
        </div>
        { retailPrice != 0.0 &&
            <div className="row">
                        The retail price of your item is <b>$${retailPrice}</b>.
                    </div>

        }
        


    </div>
)  
}


export default CalcCost;