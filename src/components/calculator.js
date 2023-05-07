// import { useState } from "react";

// export default function Calculator(){
//     let [num1,setNum1] = useState(0);
//     let [num2,setNum2] = useState(0);

//     let [result,setResult] = useState(0);

//     function changeHandler(e){
//         if(e.target.placeholder === "Enter first number"){
//             setNum1(e.target.value);
//             setNum2(num2);
//         }
//         else{
//             setNum1(num1);
//             setNum2(e.target.value);
//         }
//     }

//     function add(e){
//         e.preventDefault();
//         var res = parseInt(num1)+parseInt(num2);
//         // console.log(res);
//         setResult(res);
//     }
//     function subtract(e){
//         e.preventDefault();
//         var res = num1-num2;
//         setResult(res);
//     }
//     function multiply(e){
//         e.preventDefault();
//         var res = num1*num2;
//         setResult(res);
//     }
//     function divide(e){
//         e.preventDefault();
//         var res = num1/num2;
//         setResult(res);
//     }

//     return(
//         <div>
//             <h2>Calculator</h2>
//             <form>
//                 <input onChange={changeHandler} type="number" placeholder="Enter first number"/>
//                 <input onChange={changeHandler} type="number" placeholder="Enter second number"/>
//                 <br></br>
//                 <button onClick={add} className="funcBtn" >+</button>
//                 <button onClick={subtract} className="funcBtn" >-</button>
//                 <br></br>
//                 <button onClick={multiply} className="funcBtn" >*</button>
//                 <button onClick={divide} className="funcBtn" >/</button>
//                 <div>
//                     <h3>Result: {result}</h3>
//                 </div>
//             </form>
//         </div>
//     );
// }

import React, { useState } from "react";

export default function Calculator(){
    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);
    const [operator,setOperator] = useState("");
    const [result,setResult] = useState(0);

    function handleNumberClick(e){
        e.preventDefault();
        const value = e.target.value;
        if(operator === ""){
            setNum1(parseInt(num1 + value));
        }
        else{
            setNum2(parseInt(num2 + value));
        }
    }

    function handleOperatorClick(e){
        e.preventDefault();
        setOperator(e.target.value);
    }

    function handleEqualClick(e){
        e.preventDefault();
        let res = 0;
        switch(operator){
            case "+":
                res = num1 + num2;
                break;
            case "-":
                res = num1 - num2;
                break;
            case "*":
                res = num1 * num2;
                break;
            case "/":
                res = num1 / num2;
                break;
            default:
                break;
        }
        setResult(res);
        setNum1(res);
        setNum2(0);
        setOperator("");
    }

    return(
        <div>
            <h2>Calculator</h2>
            <form>
                <input type="text" value={num1} readOnly/>
                <input type="text" value={operator} readOnly/>
                <input type="text" value={num2} readOnly/>
                <br />
                <button value="1" onClick={handleNumberClick}>1</button>
                <button value="2" onClick={handleNumberClick}>2</button>
                <button value="3" onClick={handleNumberClick}>3</button>
                <button value="+" onClick={handleOperatorClick}>+</button>
                <br />
                <button value="4" onClick={handleNumberClick}>4</button>
                <button value="5" onClick={handleNumberClick}>5</button>
                <button value="6" onClick={handleNumberClick}>6</button>
                <button value="-" onClick={handleOperatorClick}>-</button>
                <br />
                <button value="7" onClick={handleNumberClick}>7</button>
                <button value="8" onClick={handleNumberClick}>8</button>
                <button value="9" onClick={handleNumberClick}>9</button>
                <button value="*" onClick={handleOperatorClick}>*</button>
                <br />
                <button value="0" onClick={handleNumberClick}>0</button>
                <button onClick={handleEqualClick}>=</button>
                <button value="/" onClick={handleOperatorClick}>/</button>
                <button onClick={() => {setNum1(0); setNum2(0); setOperator(""); setResult(0);}}>Clear</button>
                <br />
                <h3>Result: {result}</h3>
            </form>
        </div>
    );
}
