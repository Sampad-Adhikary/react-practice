import { userContext } from "./App"
import { useContext } from "react"

export default function CompE(){
    let value = useContext(userContext);
    return(
        <div>   
            <br/>
        
            {value}

            <br/>
            <br/>
        </div>
    )
}