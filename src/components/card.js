// import {useHistory} from 'react-router-dom';
export default function Card(props){
    // const history = useHistory();
    // function handleclick(){
    //     history.push("/cardDetails");
    // }

    return(
        <div className="card" >
            <h1>{props.heading1}</h1>
            <h2>{props.heading2}</h2>
            <img className="imageCls" src={props.img1} alt="img1"/>
            <img className="imageCls" src={props.img2} alt="img2"/>
        </div>
    );
}
