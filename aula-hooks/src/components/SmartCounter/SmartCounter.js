import { Fragment } from 'react';
import { useState } from 'react';

function SmartCounter(){
    //quantity = propriedade que fica na memória (variavel )que estou trabalhando
    //upQuantity = é uma função que atualiza a quantity  
    //useState(1) = quarda e armazena o valor dentro de quantity => (1), atualizandoo o valor
    const[quantity, upQuantity] = useState(1);
    return (
        <Fragment>
            <h1>{quantity}</h1>
            <button onClick={()=>upQuantity(quantity + 1)}>Aumentar</button>

            <button onClick={()=>upQuantity(quantity - 1)}>Diminuir</button>

            
        </Fragment>

        
    )
    //upQuantity(quantity++)=> função (intenção=lógica) sendo excecutada
}
export default SmartCounter;