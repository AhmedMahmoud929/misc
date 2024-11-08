// components/WhySection.js

"use client";

import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { whySecData } from "@/constants/index";
import Image from "next/image";
import UnderlinedTitle from "@/components/shared/UnderlinedTitle";
import { motion } from "framer-motion";
import { fadeIn, slideLeft, slideUp } from "@/lib/animation";

export default function WhySection() {
  return (
    <section className="w-full bg-babyBlue rounded-sm py-12 md:py-16 lg:py-20">
      <div className="sm:px-4 max-w-7xl mx-auto">
        <div className="container flex flex-col gap-12 lg:flex-row lg:gap-24 items-center px-4 md:px-6">
          <motion.div
            className="relative w-[60%] h-[500px]"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/whySectionImg.png"
              alt="Healthcare professional with holographic medical icons"
              fill
            />
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <UnderlinedTitle
              before="Why Choose"
              spotlight="MISC"
              after="For Your Healthcare Experience?"
              size="h2"
            />

            <p className="text-gray-500 md:text-lg">
              We collaborate with internationally accredited hospitals and
              clinics that utilize the latest technology and medical
              advancements.
            </p>
            <div className="space-y-6">
              {whySecData.map((ele, ix) => (
                <motion.div
                  key={ix}
                  className="flex items-center gap-4"
                  variants={slideUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{
                    duration: 0.4,
                    delay: 0.1 + ix * 0.2,
                  }}
                >
                  <div className="h-6 w-6">
                    <Shield className="h-6 w-6 text-sky-500 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-mainColor font-semibold">{ele}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              variants={slideUp}
              transition={{
                duration: 0.4,
                delay: 0.4,
              }}
            >
              <Button variant={"mainBlue"} size="lg" className="py-6">
                Book an appointment
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
