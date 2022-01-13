import React, { useState, useEffect } from 'react'
import '../IfoodCounter/IfoodCounter.css'

export default function IfoodCounter() {

    const [value, setValue] = useState(1);
    //1-Mundando o estado do CSS
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active");

    //2-useEffect
    //useEffect(FUNÇÃO que deve excecutar) e (evento ou variável deve ser vigiado)
    // useEffect(()=>{
    //     // alert('componente montado')
    //     // ,[value]), ou seja, sempre que ,[value]) for alterado dispara uma atualizaçao da função
    //     document.getElementById("moeda").innerHTML = 2.00*value;
    // },[value])

    useEffect(()=>{
        // alert('você não pode mais dimuniur itens')
        console.log(`o estilo do botão atual é: ${buttonStyle}`)
    },[buttonStyle])

    function down() {
        if (value > 0) {
            setValue(value - 1)
        }

    //2-Mundando o estado do CSS
        if (value <= 1){
            setButtonStyle("counter-button-minus-desactive")
        }


    }
    function up() {
        setValue(value + 1)
        if (value + 1){
            setButtonStyle("counter-button-minus-desactive")
        }
    }

    return (
        <div className="counter-wrapper">
            <button
                className={buttonStyle}
                onClick={down}
            >
                -
            </button>
            <p>{value}</p>
            <button
                className="counter-button-plus-active"
                onClick={up}
            >
                +
            </button>
           
            <button id="moeda">12,00</button>

        </div>
    )
}
// 1-<button id="moeda">12,00</button>
// Conforme alterar a qtde o valor deve ser somado++
// Para isso utilizaremoa o useEFFect
