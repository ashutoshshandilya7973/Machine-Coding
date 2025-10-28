import React from "react"
import Accordions from "./components/Accordions"
function App() {

  return (
    <div className="">
        <Accordions defaultValue="item-1">
          <Accordions.AccordionItem value="item-1">
               <Accordions.AccordionTrigger>hey i am item-1</Accordions.AccordionTrigger>
               <Accordions.AccordionContent>hey there i am using watsappp how ae you doing tonight</Accordions.AccordionContent>
          </Accordions.AccordionItem>
           <Accordions.AccordionItem value="item-2">
               <Accordions.AccordionTrigger>hey i am item-2</Accordions.AccordionTrigger>
               <Accordions.AccordionContent>hey there i am using watsappp how ae you doing tonight</Accordions.AccordionContent>
          </Accordions.AccordionItem>
           <Accordions.AccordionItem value="item-3">
               <Accordions.AccordionTrigger>hey i am item-3</Accordions.AccordionTrigger>
               <Accordions.AccordionContent>hey there i am using watsappp how ae you doing tonight</Accordions.AccordionContent>
          </Accordions.AccordionItem>
        </Accordions>
    </div>
  )
}



export default App
