"use client";

import UnderlinedTitle from "@/components/shared/UnderlinedTitle";
import {
  fadeIn,
  slideInFromLeft,
  slideInFromRight,
} from "@/lib/animationVariants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-babyBlue/50 via-white to-white">
      <motion.div
        initial="initial"
        whileInView="animate"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 sm:pt-48 pb-12 sm:pb-16 md:pb-20"
      >
        <motion.div className="text-center mb-8 sm:mb-12" variants={fadeIn}>
          <UnderlinedTitle spotlight="About Us" longVector size="h1" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.h2
                variants={slideInFromLeft}
                custom={0.2}
                className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900"
              >
                Our Mission
              </motion.h2>
              <motion.p
                className="text-base sm:text-lg text-gray-600"
                variants={slideInFromLeft}
                custom={0.4}
              >
                To provide seamless, world-class medical care to international
                patients, positioning Qatar as a premier global destination for
                medical tourism by leveraging cutting-edge technology and
                superior healthcare services.
              </motion.p>
            </div>

            <div className="space-y-4">
              <motion.h2
                variants={slideInFromLeft}
                custom={0.6}
                className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900"
              >
                Our Vision
              </motion.h2>
              <motion.p
                variants={slideInFromLeft}
                custom={0.8}
                className="text-base sm:text-lg text-gray-600"
              >
                To become the leading global hub for personalized and accessible
                healthcare solutions, bridging patients and world-class medical
                providers through innovative technology, exceptional service.
              </motion.p>
            </div>
            <motion.p
              variants={slideInFromLeft}
              custom={1}
              className="text-base sm:text-lg text-gray-600"
            >
              MISC Health Connect is a premier medical tourism facilitator based
              in Qatar, dedicated to connecting international patients with the
              nation's exceptional healthcare services. Established with the
              vision of making world-class medical care accessible to all, MISC
              Health Connect has become a trusted name in the industry, known
              for its unwavering commitment to excellence, personalized patient
              care, and innovative service offerings.
            </motion.p>
          </div>

          <motion.div
            variants={slideInFromRight}
            custom={0.3}
            className="lg:ml-auto mt-8 lg:mt-0"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-2xl">
              <Image
                src="/images/aboutPic.png"
                alt="Medical professional performing a procedure"
                className="inset-0 w-full h-full object-cover"
                width={Number.MAX_SAFE_INTEGER}
                height={Number.MAX_SAFE_INTEGER}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutSection;
