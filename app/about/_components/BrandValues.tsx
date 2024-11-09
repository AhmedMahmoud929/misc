"use client";

import UnderlinedTitle from "@/components/shared/UnderlinedTitle";
import Image from "next/image";
import React from "react";
import { slideInFromBottom, slideInFromLeft } from "@/lib/animationVariants";
import { motion } from "framer-motion";
import { brandValuesData } from "@/constants";

function BrandValues() {
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
            <UnderlinedTitle
              before="Our"
              spotlight="Brand Values"
              longVector
              size="h2"
            />
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

        {/* Grid Item */}
        <motion.div
          initial="initial"
          whileInView="animate"
          className="mt-12 sm:mt-16 md:mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
            <motion.div
              variants={slideInFromLeft}
              custom={0.4}
              className="relative aspect-square w-full max-w-md mx-auto md:max-w-none md:col-span-2 rounded-md overflow-hidden bg-gray-300"
            >
              <Image
                src="/images/valuesImg.png"
                alt="Our Brand Values"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </motion.div>
            <motion.div
              variants={slideInFromBottom}
              custom={0.4}
              className="md:col-span-3 flex flex-col justify-center"
            >
              <h3 className="text-xl sm:text-2xl font-semibold capitalize mb-4 sm:mb-6">
                A set of values that guide every aspect of our operations:
              </h3>
              <ul className="list-decimal pl-5 space-y-4 sm:space-y-6 text-sm sm:text-base">
                {brandValuesData.map((value, index) => (
                  <li
                    key={index}
                    className="pb-2 border-b border-gray-200 last:border-b-0"
                  >
                    <span className="font-semibold underline">
                      {value.title}
                    </span>
                    : {value.description}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BrandValues;
