"use client";

import CustomCard from "@/components/shared/CustomCard";
import UnderlinedTitle from "@/components/shared/UnderlinedTitle";
import { coreServicesData } from "@/constants";
import React from "react";
import { slideInFromBottom, slideInFromTop } from "@/lib/animationVariants";
import { motion } from "framer-motion";

function CoreServices() {
  return (
    <section className="custome-cont py-16">
      {/* Header */}
      <motion.div
        initial="initial"
        whileInView="animate"
        className="text-center space-y-6"
      >
        <motion.div variants={slideInFromBottom}>
          <UnderlinedTitle spotlight="Core Services" longVector size="h1" />
        </motion.div>
        <motion.p
          variants={slideInFromBottom}
          custom={0.2}
          className="mx-auto text-lg max-w-3xl text-mainColor"
        >
          bridging the gap between international patients and Qatar's
          world-class healthcare services.
        </motion.p>
      </motion.div>
      {/* Cards */}
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={slideInFromTop}
        custom={0.4}
        className="bg-darkBlue rounded-lg py-[50px] px-[35px] grid grid-cols-3 gap-4 mt-10"
      >
        {coreServicesData.map((ele, ix) => (
          <div key={ix} className="h-full">
            <CustomCard ix={ix} ele={ele} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default CoreServices;
