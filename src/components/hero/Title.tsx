import React from "react";
import { motion } from "framer-motion";
import { TITLE } from "../../constant/mock-data";

const Title = () => {
  return (
    <React.Fragment>
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-fontBold title">
        {TITLE.split("").map((letter: string, idx: number) => (
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: idx * 0.07,
              },
            }}
            key={idx}>
            {letter}
          </motion.span>
        ))}
      </h1>
    </React.Fragment>
  );
};

export default Title;
//
