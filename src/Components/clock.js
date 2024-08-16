import React from "react";
import { useState, useEffect } from "react";

const Clock = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const currentHours = now.getHours().toString().padStart(2, "0"); // Ensures two digits
      const currentMinutes = now.getMinutes().toString().padStart(2, "0"); // Ensures two digits

      setHours(currentHours);
      setMinutes(currentMinutes);
    };

    // Update the time immediately
    updateTime();

    // Set an interval to update the time every minute
    const intervalId = setInterval(updateTime, 60000); // 60,000 ms = 1 minute

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex gap-0 h-full w-full items-center font-sfProRounded justify-center -translate-x-8 -translate-y-4">
      <div className="text-cyan-500 z-0 tracking-tighter -rotate-2  font-black text-[34vw] relative">
        {hours[0]}
      </div>
      <div className="text-cyan-500 z-40 -rotate-4 translate-y-4 opacity-60 mix-blend-screen  tracking-tighter font-black text-[36vw] relative">
        {hours[1]}
      </div>

      <div className="relative text-gray-200 z-20 opacity-50 -rotate-4  tracking-tighter font-black text-[34vw]">
        :
      </div>
      <div className="relative text-cyan-500 z-0 rotate-6 tracking-tighter font-black text-[34vw]">
        {minutes[0]}
      </div>
      <div className="relative text-cyan-400 z-20 opacity-80 tracking-tighter mix-blend-screen font-black text-[34vw]">
        {minutes[1]}
      </div>
      {/* <div className="relative text-white z-20 mix-blend-screen text-[2vw] justify-end items-end ml-10 translate-y-32">
          {seconds}
        </div> */}
    </div>
  );
};

export default Clock;
