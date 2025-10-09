import React, { useState, Memo } from "react";
import Icons from "../utils/icons";
const bgColor = {
  success: "bg-green-500",
  error: "bg-red-500",
  info: "bg-blue-500",
  warning: "bg-yellow-500",
};
const Position = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
};


const useCustomNotification = ({ position }) => {
  const [notifyState, setNotifyState] = useState([]);
  const indent=Position[position]
  function NotificationComponents() {
    return <div className={` absolute ${indent}`}>{
        notifyState.map((item,index)=>{
            const Icon=Icons[item.type]
            const color=bgColor[item.type]
             return (
                <div key={index} className={`${color} flex justify-around items-center p-2 m-2.5 `}>
                    <Icon/>
                    <p>{item.message}</p>
                    <Icons.cross/>
                </div>
             )
            
        })
        }
        </div>;
  }
  function triggerNotification(
    {
        type ="",
    message = "",
    duration,
    Animation = "",
    }
  ) {
    setNotifyState((prev) => [...prev, { type, message, Animation }]);
    setTimeout(
      () =>
        setNotifyState((prev) => {
          let newArr = [...prev];
          newArr.shift();
          return newArr;
        }),
      duration
    );
  }
  return {
    NotificationComponents,
    triggerNotification, //this would be a function
  };
};

export default useCustomNotification;
