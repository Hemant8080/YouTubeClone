import React, { createContext, useContext, useState } from "react";

const UtilsContext = createContext(null);

export const UtilsContextProvider = ({ children }) => {
  const [isSidebar, setisSidebar] = useState(false);
  const [mobileShow, setMobileshow] = useState(false);

  return (
    <UtilsContext.Provider
      value={{ isSidebar, setMobileshow, setisSidebar, mobileShow }}
    >
      {children}
    </UtilsContext.Provider>
  );
};

export const useUtils = () => {
  const utilsContext = useContext(UtilsContext);
  if (!utilsContext) return null;

  return utilsContext;
};
