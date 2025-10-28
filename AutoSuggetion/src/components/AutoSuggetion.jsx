import React, { useEffect, useState } from 'react'
import { cn } from '../utility/cn'
import useDebouncing from '../hooks/useDebouncing'
import useStaticData from '../hooks/useStaticData'
import useFetchHook from '../hooks/useFetchHook'
import SuggestedResult from './SuggestedResult'
const AutoSuggetion = ({placeholder,customStyle}) => {
    const [userInput,setUserInput]=useState("");
    const [result,setResult]=useState("");
    const {debounceInput}=useDebouncing(userInput,300);
    const {loading,error,data,fetchData}=useFetchHook();
    const {staticData}=useStaticData()
    const handleChange=(e)=>{
          setUserInput(e.target.value);
    } 

    useEffect(()=>{
      console.log("autosuggestion useEffect")
      async function fetchResult(){
         
         if(staticData){
          setResult(staticData);          
         }else{
           await fetchData("https://dummyjson.com/recipes");
           if(!error){
            console.log(data)
            setResult(data)
           }
         }
      }
      fetchResult()
    },[debounceInput])
  return (
    <div>
        <input placeholder={placeholder}
          className={cn("border-2 p-1 rounded-md w-3xs",customStyle)}
          onChange={handleChange}
        />
        {
          <div className="">
            {loading&&<p>Loading.....</p>}
            { error&& <p>Error while fetching the data</p>}
            {!error &&<SuggestedResult data={result}/>}
          </div>
        }
    </div>
  )
}

export default AutoSuggetion
