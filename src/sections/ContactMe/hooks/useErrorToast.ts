import { useEffect, useState } from "react";

const useErrorToast = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 300);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);

  return { show };
};

export { useErrorToast };
