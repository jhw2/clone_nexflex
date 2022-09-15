import { useEffect, useState } from "react";

export const useDebounce = ( value: string, delay = 500): string => {
  const [bounceValue, setBounceValue] = useState<string>(value);
  useEffect(() => {
    const handle =setTimeout(() => {
      setBounceValue(value);
    }, delay);
    return () => clearTimeout(handle);
  }, [value, delay]);
  return bounceValue;
};
