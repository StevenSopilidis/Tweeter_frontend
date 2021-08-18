import React from "react";
import { motion } from "framer-motion";
import { blue1, white2 } from "../Styles";

const circleStyle = {
  display: "block",
  width: "3rem",
  height: "3rem",
  border: "0.5rem solid #e9e9e9",
  borderTop: "0.5rem solid #3498db",
  borderRadius: "50%",
  position: "absolute",
  boxSizing: "border-box",
  top: 0,
  left: 0
};

const spinTransition = {
  loop: Infinity,
  ease: "linear",
  duration: 1
};

export default function CircleLoader() {
  return (
      <motion.span
        style={{
          height: "6rem",
          width: "6rem",
          display: "block",
          border: `.7rem solid ${white2}`,
          borderTop: `.7rem solid ${blue1}`,
          borderRadius: "50%",
        }}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
  );
}