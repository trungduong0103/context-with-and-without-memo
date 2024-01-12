import React, { useContext } from "react";

function Child({ ctx }) {
  const ctxValue = useContext(ctx);
  const { counter, name, increment } = ctxValue;

  console.log("child of", name);
  return (
    <div className="box">
      <p>Child of {counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default React.memo(Child);
