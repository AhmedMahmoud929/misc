"use client";

import UnderlinedTitle from "@/components/shared/UnderlinedTitle";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { slideLeft, slideRight, slideUp } from "@/lib/animation";
import { Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function WhyQatar() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Phone number submitted:", phoneNumber);
  };

  return (
    <section className="custome-cont overflow-x-hidden px-4 py-20 ">
      <div className="grid items-center gap-2 lg:grid-cols-2">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <UnderlinedTitle
            before="Why Choose"
            size="h2"
            spotlight="Qatar"
            after="For Your HealthCare Experience?"
          />
          <ul className="text-mainColor list-disc flex flex-col gap-4 max-w-[90%] md:text-[18px]">
            <motion.span
              className="text-lg"
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              As a leading destination for medical tourism, Qatar offers:
            </motion.span>
            <motion.li
              className="text-lg ml-5"
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              State-of-the-Art Medical Facilities: Equipped with the latest
              technology and staffed by highly qualified professionals, Qatar's
              hospitals provide world-class care.
            </motion.li>
            <motion.li
              className="text-lg ml-5"
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              International Accreditations: Many Qatari healthcare institutions
              have received international accreditations, assuring compliance
              with global standards.
            </motion.li>
          </ul>
        </motion.div>

        <motion.div
          className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] lg:-mb-24 -mb-16  lg:mr-8"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <Image
            alt="Patients in waiting room"
            src="/images/ImgBackGrad.svg"
            className="hidden sm:block absolute right-12 top-0"
            width={413}
            height={362}
          />
          <Image
            alt="Patients in waiting room"
            src="/images/QaterOrg.png"
            className="sm:absolute right-20 top-8"
            width={413}
            height={362}
          />
        </motion.div>
      </div>

      <ul className="text-mainColor list-disc text-lg flex flex-col gap-4 mt-14 w-[90%]">
        <motion.li
          className="ml-5"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          Cultural Hospitality: Qatar's rich cultural heritage and commitment to
          hospitality enhance the patient experience, providing comfort and
          support during treatment and recovery.
        </motion.li>
        <motion.li
          className="ml-5"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          Strategic Location: Qatar's geographic position makes it accessible
          from various parts of the world, with excellent transportation
          infrastructure.
        </motion.li>
      </ul>
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 1, duration: 0.4 }}
      >
        <Button variant={"mainBlue"} size={"lg"} className="mt-8">
          Book an oppointment
        </Button>
      </motion.div>
    </section>
  );
}
