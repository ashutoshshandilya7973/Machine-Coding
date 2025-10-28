import React from "react"
import Tabs from "./components/Tabs"
function App() {

  return (
   <div className=" ">
       <Tabs defaultValue="name">
          <Tabs.TabList>
            <Tabs.TabTrigger value="name">Name</Tabs.TabTrigger>
            <Tabs.TabTrigger value="email">Email</Tabs.TabTrigger>
          </Tabs.TabList>
          <Tabs.TabContent value="name"><input name="name" placeholder="Enter your name" className="border-2 border-black" /></Tabs.TabContent>
          <Tabs.TabContent value="email"><input name="email" placeholder="Enter your email"  className="border-2 border-black"/></Tabs.TabContent>
       </Tabs>
   </div>
  )
}

export default App
