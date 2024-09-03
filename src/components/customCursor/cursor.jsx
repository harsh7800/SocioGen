import { createContext, useState } from "react";

export const CursorContext = createContext({
  size: "small",
  setSize: () => {},
});
export default function CursorManager() {
  const [size, setSize] = useState("small");
  return (
    <CursorContext.Provider value={{ size, setSize }}>
      {/* {props && props.children} */}
    </CursorContext.Provider>
  );
}
