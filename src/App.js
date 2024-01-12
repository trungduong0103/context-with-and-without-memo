import { useState } from "react";
import "./styles.css";

import ProviderWithoutMemo, {
  CustomCtx as CtxWithoutMemo
} from "./ProviderWithoutMemo";

import ProviderWithMemo, { CustomCtx as CtxWithMemo } from "./ProviderWithMemo";

import Child from "./Child";

export default function App() {
  const [, forceRender] = useState();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <ProviderWithoutMemo>
        <Child ctx={CtxWithoutMemo} />
      </ProviderWithoutMemo>

      <ProviderWithMemo>
        <Child ctx={CtxWithMemo} />
      </ProviderWithMemo>

      <button onClick={() => forceRender({})}>Rerender Parent</button>
    </div>
  );
}
