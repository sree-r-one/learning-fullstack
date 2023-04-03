import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";

// const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
const NavButton = ({ title, customFunc, color, icon, notificationColor }) => (
  <button
    type="button"
    onClick={customFunc}
    style={{ color }}
    className="hover:bg-gray-light relative rounded-full p-3 text-xl"
  >
    <span
      style={{ background: notificationColor }}
      className={`absolute right-2 top-2 h-2 w-2 rounded-full ${
        notificationColor && "ring-2 ring-white drop-shadow-lg"
      }`}
    />
    {icon}
  </button>
);

const Navbar = () => {
  // destructure context from useStateContext
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  // Implement UseEffect for screensize and setScreenSize
  useEffect(
    () => {
      // Define function to set the screen size
      const handleResize = () => {
        setScreenSize(window.innerWidth);
      };

      // Add event listener for resize
      window.addEventListener("resize", handleResize);

      // Call the function to set the screen size
      handleResize();

      // remove event listener on unmount
      return () => window.removeEventListener("resize", handleResize);
    },

    // There are no dependencies for this useEffect
    []
  );

  // Implement useEffect for different screen sizes
  useEffect(
    () => {
      if (screenSize < 768) {
        setActiveMenu(false);
      } else {
        setActiveMenu(true);
      }
    },

    // Add dependencies for this useEffect : this depends on screenSize
    [screenSize]
  );

  return (
    <div className="sidebar relative z-10 flex justify-between bg-green-100  ">
      <div className="flex">
        <NavButton
          title={"Testing"}
          color="black"
          icon={<AiOutlineMenu />}
          customFunc={() => setActiveMenu((prev) => !prev)}
        />
        <div className="ml-2 mt-1 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-4 rounded py-2 pl-2 pr-20 text-xl font-extrabold  tracking-tight text-slate-900"
          >
            <SiShopware /> <span>Shoppeei</span>
          </Link>
          {/* Button for closing the sidebar */}
        </div>
      </div>
      {/* Menu on the right side of the Navbar */}
      <div className="flex">
        <NavButton
          title={"Cart"}
          color="black"
          icon={<FiShoppingCart />}
          customFunc={() => handleClick("cart")}
        />
        <NavButton
          title={"Chat"}
          notificationColor="red"
          color="black"
          icon={<BsChatLeft />}
          customFunc={() => handleClick("chat")}
        />
        <NavButton
          title={"Notifications"}
          notificationColor="orange"
          color="black"
          icon={<RiNotification3Line />}
          customFunc={() => handleClick("notification")}
        />
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
      </div>
    </div>
  );
};

export default Navbar;
