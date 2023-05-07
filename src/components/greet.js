import { useEffect, useState } from "react";

export default function Greet(){
    let time = new Date().getHours();
    let [hours,setHours] = useState(time);
    var greeting;
    if(hours>=5 && hours<12){
        greeting = 'Good Morning';
    }
    else if(hours>=12 && hours<15){
        greeting = "Good Afternoon";
    }
    else if(hours>=15 && hours<19){
        greeting = "Good Evening";
    }
    else{
        greeting = "Good Night";
    }

    useEffect(()=>{
        const refresh = setInterval(
            ()=>{
                setHours(new Date().getHours());
            },3600000
        );
        return ()=>{
            clearInterval(refresh);
        }
    },[])

    let varcolor = 'black';
    switch(greeting){
        case('Good Morning'):
            varcolor = 'green';
            break;
        case('Good Afternoon'):
            varcolor = 'orange';
            break;
        case('Good Evening'):
            varcolor = 'blue';
            break;
        default:
            varcolor = 'black';
    }

    return(
        <div>
            <h1 style={{color:varcolor}}>{greeting}</h1>
        </div>
    );
}