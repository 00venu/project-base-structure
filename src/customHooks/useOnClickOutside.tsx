import { useEffect } from "react";

const useOnClickOutside = (ref: any, handler: any) => {
  useEffect(() => {
    console.log(ref);
    const listener = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    };
    document.addEventListener("mousedown", listener, true);
    return () => {
      document.removeEventListener("mousedown", listener, true);
    };
  }, [ref, handler]);
};
export default useOnClickOutside;
