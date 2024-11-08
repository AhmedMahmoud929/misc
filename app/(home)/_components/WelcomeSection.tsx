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

  const handleSubmit = () => {
    // e.preventDefault();
    console.log("Phone number submitted:", phoneNumber);
  };

  return (
    <section className="sm:px-4 max-w-7xl mx-auto py-24 grid items-center gap-8 lg:grid-cols-2">
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
          className="text-mainColor max-w-[90%] md:text-[18px]"
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
          className="flex max-w-md"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center flex-1 border rounded-l-lg pl-5">
            <Phone className="text-gray-300" />
            <input
              type="tel"
              placeholder="Enter your Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="flex-1 inset-0 border-0 outline-0 px-3 pl-4 py-4 placeholder:text-gray-300 placeholder:font-medium"
            />
          </div>
          <Button
            variant={"mainBlue"}
            type="submit"
            className="rounded-l-none px-8 py-7"
          >
            Submit
          </Button>
        </motion.form>
      </div>

      <motion.div
        className="relative h-full min-h-[400px]"
        variants={slideRight}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <Image
          alt="Patients in waiting room"
          src="/images/ImgBackGrad.svg"
          className="absolute right-12 top-0"
          width={413}
          height={362}
        />
        <Image
          alt="Patients in waiting room"
          src="/images/boyInHospital.png"
          className="absolute right-20 top-8"
          width={413}
          height={362}
        />
      </motion.div>
    </section>
  );
}
