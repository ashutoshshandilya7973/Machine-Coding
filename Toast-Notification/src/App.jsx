import { useState } from "react";
import useCustomNotification from "./hooks/useCustomNotification";

function App() {
  const [count, setCount] = useState(0);
  const {
    NotificationComponents,
    triggerNotification, //this would be a function
  } = useCustomNotification({position:"top-left"});
  return (
    <div className="relative h-screen w-screen">
      <NotificationComponents />
      <div className="w-2xl h-screen m-auto  bg-amber-50 ">
        <p>Toast Components</p>
        <div className="grid grid-cols-2">
          <div
            className="p-4 border-2 rounded-2xl m-2"
            onClick={() =>
              triggerNotification(
                {
                  type : "success",
                message :"This is success Notification",
                duration : 3000
                }
              )
            }
          >
            Success
          </div>
          <div
            className="p-4 border-2 rounded-2xl m-2 "
            onClick={() =>
              triggerNotification(
               {
                 type : "error",
                message : "This is error Notification",
                duration : 3000
               }
              )
            }
          >
            Error
          </div>
          <div
            className="p-4 border-2 rounded-2xl m-2"
            onClick={() =>
              triggerNotification(
               {
                 type :"warning",
                message :"This is warning Notification",
                duration : 3000
               }
              )
            }
          >
            Warning
          </div>
          <div
            className="p-4 border-2 rounded-2xl m-2"
            onClick={() =>
              triggerNotification(
               {
                 type :"info",
                message : "This is info Notification",
                  duration : 3000
               }
              )
            }
          >
            Info
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
