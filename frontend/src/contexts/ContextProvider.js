// import createContext
import React, { createContext, useState, useContext } from "react";

// create context
const StateContext = createContext();

// set initial state
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// export provider
export const ContextProvider = ({ children }) => {
  // For monitoring the active menu
  const [activeMenu, setActiveMenu] = useState(true);
  // For monitoring Navbar menu click
  const [isClicked, setIsClicked] = useState(initialState);
  // For Monitoring screen size
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
