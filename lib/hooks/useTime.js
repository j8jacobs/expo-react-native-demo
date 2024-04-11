/**
 * https://react.dev/reference/rules/components-and-hooks-must-be-pure
 */
import { useState, useEffect } from "react";

export function useTime() {
  // new Date() not idempotent, so use initializer function
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return time;
}
