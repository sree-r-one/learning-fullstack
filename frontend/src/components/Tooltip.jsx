import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

const Tooltip = ({ message, children, pos, delay }) => {
  return (
    <Tippy content={message} placement={pos} delay={delay}>
      <button>{children}</button>
    </Tippy>
  );
};

export default Tooltip;
