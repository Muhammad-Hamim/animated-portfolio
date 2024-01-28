import React from "react";
import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23px" height="23px" viewBox="0 0 23 23">
        <motion.path
          variants={{
            closed: { d: "M 2 2.4 L 20 2.4" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
          strokeWidth="3"
          stroke="#000000"
          strokeLinecap="round"
        />
        <motion.path
          d="M 2 9.423 L 20 9.423"
          variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
          strokeWidth="3"
          stroke="#000000"
          strokeLinecap="round"
        />
        <motion.path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.345" },
          }}
          strokeWidth="3"
          stroke="#000000"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
