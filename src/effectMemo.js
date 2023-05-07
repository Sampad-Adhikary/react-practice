import React, { useState, useEffect, useMemo } from "react";

function EffectMemo(props) {
  let [count, setCount] = useState(0);
  let [val, setVal] = useState(0);

  //useEffect() : it used to rerender the whole component based on certain dependencies
  useEffect(() => {
    let interval = setInterval(() => {
      setCount(count + 1);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  //useMemo() : it used to rerender the particular part of the  component based on certain dependencies, even if there is the state variable in this memo which is updated by useEffect it will not rerender till its own dependencies change
  let memo = useMemo(() => {
    return (
      <div>
        <h2>
          Not using Memo: count = {count} && val = {val}
        </h2>
      </div>
    );
  }, [val]);

  return (
    <div>
      {memo}
      <h2>Not using Memo: count = {count}</h2>
      {/* <button onClick={()=>{setCount(++count);}}>Increase Count</button> */}
      <button
        onClick={() => {
          setVal(++val);
        }}
      >
        Increase Val
      </button>
    </div>
  );
}

export default EffectMemo;
