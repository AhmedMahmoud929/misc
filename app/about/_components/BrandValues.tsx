"use client";

import UnderlinedTitle from "@/components/shared/UnderlinedTitle";
import Image from "next/image";
import React from "react";
import { slideInFromBottom, slideInFromLeft } from "@/lib/animationVariants";
import { motion } from "framer-motion";

function BrandValues() {
  return (
    <section>
      <div className="custome-cont py-16">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          className="text-center space-y-6"
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
            className="mx-auto text-lg max-w-3xl text-mainColor"
          >
            bridging the gap between international patients and Qatar's
            world-class healthcare services.
          </motion.p>
        </motion.div>
        {/* Grid Item */}
        <motion.div
          initial="initial"
          whileInView="animate"
          className="grid grid-cols-5 mt-8 gap-8"
        >
          <motion.div
            variants={slideInFromLeft}
            custom={0.4}
            className="relative aspect-square w-full rounded-md bg-gray-300 col-span-2"
          >
            <Image
              src="/images/valuesImg.png"
              fill
              alt="Values"
              objectPosition="center"
              objectFit="cover"
            />
          </motion.div>
          <motion.div
            variants={slideInFromBottom}
            custom={0.4}
            className="col-span-3 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold capitalize">
              A set of values that guide every aspect of our operations:
            </h3>
            <ul className="list-decimal pl-6 mt-4 space-y-9">
              <li>
                <u>Compassion</u>
                {": "}
                We prioritize the well-being and comfort of our patients,
                treating each individual with empathy and understanding.
              </li>

              <li>
                <u>Integrity</u>
                {": "}
                Honesty and transparency are fundamental to our relationships
                with patients, partners, and staff. We adhere to the highest
                ethical standards in all our dealings.
              </li>

              <li>
                <u>Excellence</u>
                {": "}
                We strive for perfection in every service we provide,
                continually seeking to exceed expectations through innovation
                and attention to detail.
              </li>

              <li>
                <u>Collaboration</u>
                {": "}
                Recognizing that healthcare is a collective effort, we foster
                strong partnerships with medical professionals, facilities, and
                other stakeholders to deliver the best outcomes.
              </li>

              <li>
                <u>Cultural Sensitivity</u>
                {": "}
                We respect the diverse backgrounds of our patients, ensuring
                that services are tailored to meet cultural, religious, and
                personal preferences.
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default BrandValues;
