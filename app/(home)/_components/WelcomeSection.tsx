"use client";

import UnderlinedTitle from "@/components/shared/UnderlinedTitle";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { slideLeft, slideRight, slideUp } from "@/lib/animation";

export default function WelcomeSection() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Phone number submitted:", phoneNumber);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
          >
            <UnderlinedTitle
              before="We're"
              size="h2"
              spotlight="Welcoming"
              after="New Patients And Can't Wait To Meet You."
            />
          </motion.div>

          <motion.p
            className="text-mainColor text-sm sm:text-base md:text-lg lg:text-xl max-w-[90%]"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We use only the best quality materials on the market in order to
            provide the best products to our patients, so don't worry about
            anything and book yourself.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row max-w-md gap-4 sm:gap-0"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center flex-1 border rounded-lg sm:rounded-r-none pl-3 sm:pl-5">
              <Phone className="text-gray-300 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="tel"
                placeholder="Enter your Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1 border-0 outline-0 px-2 sm:px-3 py-3 sm:py-4 placeholder:text-gray-300 placeholder:font-medium text-sm sm:text-base"
              />
            </div>
            <Button
              variant={"mainBlue"}
              type="submit"
              className="sm:rounded-l-none px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-7 w-full sm:w-auto"
            >
              Submit
            </Button>
          </motion.form>
        </div>

        <motion.div
          className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] lg:-mb-12 mb-6 lg:mt-0"
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
            src="/images/boyInHospital.png"
            className="sm:absolute right-20 top-8"
            width={413}
            height={362}
          />
        </motion.div>
      </div>
    </section>
  );
}
