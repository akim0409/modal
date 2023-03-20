import { useState } from "react";

// https://daveceddia.com/images/counter-component.png
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-zinc-200 flex justify-center items-center">
      <div className="border-2 border-zinc-400 p-4">
        <div className="text-2xl font-semibold text-zinc-600 text-center select-none">
          Counter
        </div>
        <div className="flex justify-between items-center">
          <button
            className="m-2 px-3 text-4xl border-2 border-zinc-400 select-none"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </button>
          <div className="w-16 mx-6 text-4xl font-semibold text-zinc-600 text-center">
            {count}
          </div>
          <button
            className="m-2 px-2 text-4xl border-2 border-zinc-400 select-none"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
