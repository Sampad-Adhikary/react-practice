export function List (props){
    let data = [
        {
            key: 'ab',
            val: "abcd"
        },
        {
            key: 'ab',
            val: "abcd"
        },
        {
            key: 'ab',
            val: "abcd"
        },
        {
            key: 'xq',
            val: "abcd"
        },
        {
            key: 'xq',
            val: "abcd"
        }
    ]
    return(
        <div>
            {data.map((item)=>{
                if(item['key'] === props.query){
                    return(
                    <h1>{item['val']}</h1>
                )
                }
                else{
                    return(
                        <br></br>
                    );
                }
            })}
        </div>
    );
}