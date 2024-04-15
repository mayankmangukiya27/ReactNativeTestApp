import {useEffect, useRef, useState} from 'react';

const useDebounce = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const listenerRef = useRef<string | undefined | ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    listenerRef.current = setTimeout(() => setValue(initialValue), 1200);

    return () => {
      clearTimeout(listenerRef.current);
    };
  }, [initialValue]);

  return value;
};

export default useDebounce;
