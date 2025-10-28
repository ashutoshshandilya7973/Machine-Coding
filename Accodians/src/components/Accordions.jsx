import React, { createContext, useContext, useState } from "react";
import { cn } from "../lib/utils";

const AccordionContext = createContext();
const ValueContext = createContext();

const Accordions = ({
  children,
  className,
  type,
  collapsible,
  defaultValue = "",
}) => {
  const [collapseItem, setCollapseItem] = useState(defaultValue);

  return (
    <AccordionContext.Provider value={{ collapseItem, setCollapseItem }}>
      <div className={cn("flex flex-col gap-5", className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

function AccordionItem({ children, className, value }) {
  return (
    <ValueContext.Provider value={value}>
      <div className={cn("border-b-2 border-gray-500", className)}>{children}</div>
    </ValueContext.Provider>
  );
}

function AccordionTrigger({ children, className }) {
  const {collapseItem, setCollapseItem } = useContext(AccordionContext); // ✅ Correct context
  const value = useContext(ValueContext);
   const handleClick = () => {
    setCollapseItem((prev) =>
      prev === value && collapseItem ? "" : value
    );
  };
  return (
    <div className={cn("", className)} onClick={handleClick}>
      {children}
    </div>
  );
}

function AccordionContent({ children, className }) {
  const { collapseItem } = useContext(AccordionContext); // ✅ Correct context
  const value = useContext(ValueContext);

  if (value !== collapseItem) return null;

  return <div className={cn("", className)}>{children}</div>;
}

Accordions.AccordionItem = AccordionItem;
Accordions.AccordionTrigger = AccordionTrigger;
Accordions.AccordionContent = AccordionContent;

export default Accordions;
