import { useState } from "react";

function useCount(initialCount = 1, minCount = 0, maxCount = 5) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > minCount) {
      setCount(count - 1);
    }
  };

  return {
    count,
    increment,
    decrement,
    isMinCount: count === minCount,
    isMaxCount: count === maxCount,
  };
}

export default useCount;
