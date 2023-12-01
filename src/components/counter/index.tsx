import React from "react";

export default function CountButton({
  count,
  increment,
  decrement,
}: {
  count: number;
  increment: () => void;
  decrement: () => void;
}) {
  const style = "bg-black text-white px-2 rounded-md";

  return (
    <div className="flex items-center">
      <button onClick={decrement} disabled={count === 0} className={style}>
        -
      </button>
      <div className="p-2">
        <div>{count}</div>
      </div>
      <button onClick={increment} disabled={count === 5} className={style}>
        +
      </button>
    </div>
  );
}
