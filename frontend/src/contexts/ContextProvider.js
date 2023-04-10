// import createContext
import React, { createContext, useState, useContext, useEffect } from "react";

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
  // For monitoring if user is scrolling
  const [isScrolling, setIsScrolling] = useState(false);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  // Implement useEffect to monitor if use is scrolling
  useEffect(() => {
    // declare timeout variable
    let timeout;

    const handleScroll = () => {
      if (window.scrollY > 0) {
        // User is scrolling
        setIsScrolling(true);

        // Clear timeout if user is scrolling
        clearTimeout(timeout);

        // Set timeout to reset isScrolling to false after 1000ms
        timeout = setTimeout(() => {
          setIsScrolling(false);
        }, 500);
      } else {
        // User is not scrolling
        setIsScrolling(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Call handleScroll() to set initial state
    handleScroll();

    // Remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

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
        isScrolling,
        setIsScrolling,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
