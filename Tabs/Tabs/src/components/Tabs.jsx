import React, { useContext, useState } from "react";
import { cn } from "../lib/utils";
import { createContext } from "react";
const TabContext = createContext();
const Tabs = ({ children, className, defaultValue = "" }) => {
  const [active, setActive] = useState(defaultValue);
  return (
    <TabContext.Provider value={{ active, setActive }}>
      <div className={cn("flex flex-col gap-2", className)}>{children}</div>;
    </TabContext.Provider>
  );
};

function TabList({ children, className }) {
  return (
    <div className={cn(`p-1 flex bg-gray-600 `, className)}>{children}</div>
  );
}

function TabTrigger({ children, className, value }) {
  const { active, setActive } = useContext(TabContext);

  return (
    <div
      className={cn(
        `${active === value ? "border-2 border-white" : ""}`,
        className
      )}
      value={value}
      onClick={()=>setActive(value)}
    >
      {children}
    </div>
  );
}
function TabContent({ children, className, value }) {
  const { active, setActive } = useContext(TabContext);
  if(value!==active){
    return null;
  }
  return (
    <div className={cn(``,className)}>{children}</div>
  )
}

Tabs.TabList=TabList;
Tabs.TabTrigger=TabTrigger;
Tabs.TabContent=TabContent

export default Tabs;
