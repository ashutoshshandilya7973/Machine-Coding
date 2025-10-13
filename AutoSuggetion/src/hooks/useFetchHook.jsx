import React, { useMemo, useState } from 'react'

const useFetchHook = () => {
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    const [data,setData]=useState("");
    
    const fetchData=async(url)=>{
        setLoading(true)
        setError(false)
        setData(null);

        try {
            const res=await fetch(url);
            const data=await res.json();
            setData(data)
            
        } catch (error) {
            setError(true)
        }finally{
            setLoading(false)
        }
    };
    return {loading,error,data,fetchData};
}

export default useFetchHook
