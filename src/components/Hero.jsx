import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[90px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600" />
          <div className="w-1 sm:h-60 h-40 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black" />
        </div>
        <div className="items-center">
          <h1 className="font-serif... text-white text-5xl py-12 ">
            <span className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
              Aman Jain
            </span>
          </h1>
          <h2 className="font-serif... text-white text-3xl">
            I develop 3D designs, user
            <br className="sm:block hidden" />
            Interfaces and web applications
          </h2>
          {/* <div className="py-8">
    <br></br>
          </div> */}
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
