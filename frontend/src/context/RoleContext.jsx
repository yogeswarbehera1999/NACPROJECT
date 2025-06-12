import { createContext } from "react";
export const RoleContext = createContext({});
export function RoleContextProvider({ value, children }) {
  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
}
