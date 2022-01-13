import { Fragment } from "react";

function Counter(){
    let quantity = 10;

    function upQuantity(){
        quantity++;
        document.getElementById('counter-box').innerHTML = quantity;
        console.log(quantity);
    }

    function downQuantity(){
        quantity--;
        document.getElementById('counter-box').innerHTML = quantity;
        console.log(quantity);
    }
    return(
        <Fragment>
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={upQuantity}>Aumentar</button>

            <button onClick={downQuantity}>Diminuir</button>
        </Fragment>

    )
}
export default Counter;