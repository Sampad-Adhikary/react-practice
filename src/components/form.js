import { useState } from "react";

export default function Form(){
    let [firstName, setFirstName] = useState("First Name");
    let [lastName, setLastName] = useState("Last Name");
    let [email, setEmail] = useState("Email");
    let fname,lname,mail;
    function changeHandler(e){
        if(e.target.placeholder === 'first name'){
            fname = e.target.value;
        }
        else if(e.target.placeholder === 'last name'){
            lname = e.target.value;
        }
        else{
            mail = e.target.value
        }
    }

    function submitHandler(e){
        e.preventDefault();
        alert("form submitted!!");
        setFirstName(fname);
        setLastName(lname);
        setEmail(mail);
    }

    return(
        <div>
            <h2>{firstName} {lastName} {email}</h2>
            <input onChange={changeHandler} placeholder="first name" />
            <input onChange={changeHandler} placeholder="last name" />
            <input onChange={changeHandler} placeholder="email" />
            <button onClick={submitHandler}>Submit</button>
        </div>
    );
}