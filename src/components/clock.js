import { useEffect, useState } from "react";

export default function Clock(){
    let time = new Date().toLocaleTimeString();
    let [currTime,setTime] = useState(time);
    useEffect(()=>{

        const timeInterval = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);
        return ()=>{
            clearInterval(timeInterval)
        };
    },[])
    return(
        <div>
            <h1>{currTime}</h1>
        </div>
    );
}
