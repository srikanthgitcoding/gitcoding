import React, { useState, useMemo, useCallback } from "react";

export const useCounter = (initial) => {
  const [count, setCount] = useState(initial);
  const setCounter = useCallback(() => {
    setCount(count + 1);
  }, [setCount]);
  return useMemo(() => {
    console.log("useCounter");
    return [count, setCounter];
  }, [count, setCount]);
};
