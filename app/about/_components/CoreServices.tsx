"use client";

import CustomCard from "@/components/shared/CustomCard";
import UnderlinedTitle from "@/components/shared/UnderlinedTitle";
import { coreServicesData } from "@/constants";
import React from "react";
import { slideInFromBottom, slideInFromTop } from "@/lib/animationVariants";
import { motion } from "framer-motion";

function CoreServices() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          className="text-center space-y-4 sm:space-y-6"
        >
          <motion.div variants={slideInFromBottom}>
            <UnderlinedTitle spotlight="Core Services" longVector size="h2" />
          </motion.div>
          <motion.p
            variants={slideInFromBottom}
            custom={0.2}
            className="mx-auto text-base sm:text-lg max-w-3xl text-mainColor"
          >
            Bridging the gap between international patients and Qatar's
            world-class healthcare services.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={slideInFromTop}
          custom={0.4}
          className="bg-darkBlue rounded-lg py-8 sm:py-12 px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 md:mt-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {coreServicesData.map((ele, ix) => (
              <div key={ix} className="h-full">
                <CustomCard ix={ix} ele={ele} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CoreServices;
