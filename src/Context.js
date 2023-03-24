import { createContext } from "react";
import { useCycle } from "framer-motion";

export const Context = createContext()

export default function MyContext({ children }) {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <Context.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </Context.Provider>
  )
}