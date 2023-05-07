import React, { useState } from "react";

export default function DateTime(){
    var date = new Date();
    const [currTime,updateCurrentTime] = useState(false);

    const [currDate,updateCurrentDate] = useState(false);
    function showTime(){
        updateCurrentTime(!currTime); 
    }
    function showDate(){
        updateCurrentDate(!currDate);
    }

    function getCurrentDate(){
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }
    function getCurrentTime(){
        return date.toLocaleTimeString('en-US');
    }

    return(
        <div>
            {currDate && <h1>{getCurrentDate()}</h1>}
            {currTime && <h1>{getCurrentTime()}</h1>}
            <button onClick={showDate}>Get Date</button>
            <button onClick={showTime}>Get Time</button>
        </div>
    );
}