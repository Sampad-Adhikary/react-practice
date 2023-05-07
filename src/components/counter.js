import React, { useRef, useContext, useReducer } from 'react';


const Counter = () => {
    let myRef = useReducer(null);
    const clickHandler = () => {
        myRef.current.value = "I Love Coding";
        myRef.current.style.color = 'red';
    }
    return(
        <div>
            <input type='text' ref = {myRef} placeholder='enter something'/>
            <button onClick={clickHandler}>Check Ref</button>
        </div>
    );
};


export default Counter;
