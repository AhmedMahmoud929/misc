"use client";

import Image from "next/image";
import { slideInFromBottom, slideInFromTop } from "@/lib/animationVariants";
import { motion } from "framer-motion";
import { partners } from "@/constants";

export default function PartnerSection() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      className="py-12 pb-24 bg-white"
    >
      <div className="container px-4 md:px-6">
        <motion.h2
          variants={slideInFromBottom}
          className="text-center text-xl md:text-2xl font-medium text-gray-400 mb-12"
        >
          Our strength lies in our strategic alliances with Qatar's{" "}
          <span className="text-midBlue font-semibold">premier</span> healthcare
          institutions
        </motion.h2>

        {/* Mobile view - static grid */}
        <motion.div
          variants={slideInFromBottom}
          custom={0.2}
          className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:hidden"
        >
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center p-4">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={80}
                className="max-w-[160px] h-auto grayscale opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </motion.div>

        {/* Desktop view - infinite scroll */}
        <motion.div
          variants={slideInFromBottom}
          custom={0.2}
          className="hidden lg:block overflow-hidden whitespace-nowrap"
        >
          <div className="inline-flex animate-scroll">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div key={`first-${index}`} className="mx-12 flex">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="max-w-[160px] h-auto grayscale opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div key={`second-${index}`} className="mx-12 flex">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="max-w-[160px] h-auto grayscale opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
