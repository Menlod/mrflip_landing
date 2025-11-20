import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <span>{time}</span>;
};

export default Clock;
