import React, { useEffect, useState } from 'react'
import { cn } from '../utility/cn'
import useDebouncing from '../hooks/useDebouncing'
import useStaticData from '../hooks/useStaticData'
import useFetchHook from '../hooks/useFetchHook'
const AutoSuggetion = ({placeholder,customStyle}) => {
    const [userInput,setUserInput]=useState("");
    const [result,setResult]=useState("");
    const {debounceInput}=useDebouncing(userInput,300);
    const {loading,error,data,fetchData}=useFetchHook();
    
    const handleChange=(e)=>{
          setUserInput(e.target.value);
    } 

    useEffect(()=>{
      async function fetchResult(){
        
      }
      fetchResult()
    },[debounceInput])
  return (
    <div>
        <input placeholder={placeholder}
          className={cn("border-2 p-1 rounded-md w-3xs",customStyle)}
          onChange={handleChange}
        />
    </div>
  )
}

export default AutoSuggetion
