import { useState } from "react";
import { List } from "./list";

export default function Search(){
    let [keyword,setKeyword]  = useState(null);
    var value;
    function handleChange(e){
        value = e.target.value;
        
    }
    function handleClick(e){
        e.preventDefault();
        setKeyword(value);
    }
    return(
        <div>
            <form>
                <input type="text" onChange={handleChange} placeholder="search here"/>
                <br/>
                <button type="submit" onClick={handleClick}>Search</button>
            </form>
            <List query = {keyword}/>
        </div>
    );
}