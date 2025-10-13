import { useState } from 'react'
import AutoSuggetion from './components/AutoSuggetion'

function App() {
  const fetchSuggetion= async()=>{

  }
  return (
     <div className='w-xl m-auto flex flex-col gap-5'>
        <h1>AutoSuggestion/TypeAhead Components</h1>
        <AutoSuggetion
           placeholder="Enter the recipies"
           fetchSuggetion={fetchSuggetion}
           dataKey="name"
           customLoading={<>Loading recipies....</>}
           onSelect={(res)=>console.log(res)}
           onChange={(input)=>{}}
           onBlur={(e)=>{}}
           onFocus={(e)=>{}}
           customStyle={""}
        />
     </div>
  )
}

export default App
