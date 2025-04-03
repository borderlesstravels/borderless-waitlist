import { useEffect, useState } from "react";

const useSettle = () => {
  const [isSettled, setIsSettled] = useState(false);

  useEffect(() => {
    setIsSettled(true);
  }, []);

  return { isSettled };
};

export default useSettle;
