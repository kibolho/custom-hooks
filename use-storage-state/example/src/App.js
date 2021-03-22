import React from "react";
import { useStorageState } from "use-storage-state";

const App = () => {
  const [counter, setCounter] = useStorageState("counter", 0);
  return (
    <>
      <div>{counter}</div>
      <button onPress={setCounter((prev) => prev++)}>+</button>
      <button onPress={setCounter((prev) => prev--)}>-</button>
    </>
  );
};
export default App;
