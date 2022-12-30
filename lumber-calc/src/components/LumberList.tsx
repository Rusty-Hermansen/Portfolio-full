import {FC, FormEvent, ChangeEvent, useState } from 'react';


const LumberList: FC<any>= () : JSX.Element  => {
  return (
<>
<h1>Create a Lumber List</h1>
<p>This page is intended to generate a list of lumber items with their costs and at different margins that are calculated
    from the cost of each respective item. The cost of each item is calculated from the <b>price-per-thousand</b> cost.
</p>
</>
)  
}


export default LumberList;