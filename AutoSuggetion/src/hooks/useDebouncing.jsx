import React, { useEffect, useRef, useState } from "react";

const useDebouncing = (value,delay) => {
  const [debounceInput, setDebounceInput] = useState("");
  const ref = useRef("");
 
  useEffect(() => {
    ref.current=setTimeout(()=>{
        setDebounceInput(value);
    },delay)

    return ()=>clearTimeout(ref.current)
  }, [value]);


  return {
    debounceInput,
  };
};

export default useDebouncing;
