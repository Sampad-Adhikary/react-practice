import { useState } from "react";
export default function Form(){
    let [name,setName] = useState('');
    let [age,setAge] = useState(0);
    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');
    let [isValid,setValid] = useState(true);
    let inpName,inpAge,inpPass,inpMail;
    function changeHandler(e){
        if(e.target.placeholder === "name"){
            inpName = e.target.value;
        }
        else if(e.target.placeholder === "age"){
            inpAge = e.target.value;
        }
        else if(e.target.placeholder === "email"){
            inpMail = e.target.value;
        }
        else{
            inpPass = e.target.value;
        }
    }

    function formSubmit(e){
        let countUpp = 0;
        let countLow = 0;
        let countNum = 0;
        let flag = false

        for(let i=0;i<inpMail.length;i++){
            if(inpMail[i] === '@'){
                flag = true;
            }
        }

        for(let i=0;i<inpPass.length;i++){
            if(inpPass[i]>='A' && inpPass[i]<='Z'){
                countUpp = countUpp+1;
            }
            else if(inpPass[i]>='a' && inpPass[i]<='z'){
                countLow = countLow+ 1;
            }
            else if(inpPass[i]>='0' && inpPass[i]<='9'){
                countNum = countNum+1;
            }
        }
        if(countNum >0 && countLow >0 && countUpp>0 & flag === true){
            alert("all okay!");
        }
        else if(flag === false){
            alert("Wrong Email")
        }
        else{
            setValid(false);
            setName(inpName);
            setAge(inpAge);
            setEmail(inpMail);
            setPassword(inpPass);
        }
    }
    let message = isValid?"":"Password must have atleast one lowercase, one uppercase, one number";


    // if(!isValid){
        return(<div>
            <input type="text" placeholder="name" onChange={changeHandler}/>
            <input type="number" placeholder="age" onChange={changeHandler} />
            <input type="email" placeholder="email" onChange={changeHandler} required/>
            <input type="password" placeholder="password" onChange={changeHandler}/>
            <button type="submit" onClick={formSubmit}>Submit</button>
            <h2>{message}</h2>
            <p>{name}</p>
            <p>{age}</p>
            <p>{email}</p>
            <p>{password}</p>
        </div>);
    // }
    // else{
    //     return(<div>

    //     </div>)
    // }
}