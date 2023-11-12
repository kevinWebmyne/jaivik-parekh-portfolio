import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-14 h-14 bg-light text-dark flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:bg-dark dark:text-light"
        whileHover={{
          backgroundColor: [
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        JP
      </MotionLink>
    </div>
  );
};

export default Logo;
