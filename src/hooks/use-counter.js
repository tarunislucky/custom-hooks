import { useState, useEffect } from "react";
//useCounter is a custom hook that creates a counter state for the component that used it, updates it after every 1 second.
const useCounter = (forwards) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => forwards ? prevCounter + 1 : prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  return counter;
}

export default useCounter;