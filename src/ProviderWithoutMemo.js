import { createContext, useState } from "react";

export const CustomCtx = createContext(null);

function ProviderWithoutMemo({ children }) {
  const [counter, setCounter] = useState(0);

  const value = {
    name: "ProviderWithoutMemo",
    counter,
    increment: () => setCounter((c) => c + 1)
  };

  return <CustomCtx.Provider value={value}>{children}</CustomCtx.Provider>;
}

export default ProviderWithoutMemo;
