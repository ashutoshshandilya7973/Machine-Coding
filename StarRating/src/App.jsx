import { useState } from 'react'

import Star from './Star'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <Star count={8}/>
   </>
  )
}

export default App
