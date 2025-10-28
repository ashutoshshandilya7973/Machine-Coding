import React, { useEffect, useRef, useState } from "react";

const useDebouncing = (value,delay) => {
  const [debounceInput, setDebounceInput] = useState("");
  const ref = useRef("");
  console.log("outer")
  useEffect(() => {
    console.log("inner")
    ref.current=setTimeout(()=>{
        setDebounceInput(value);
    },delay)

    return ()=>{
      console.log("clearTimeOut");
      clearTimeout(ref.current)
    }
  }, [value]);


  return {
    debounceInput,
  };
};

export default useDebouncing;
