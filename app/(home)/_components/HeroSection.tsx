"use client";

import HeroSecModel from "@/components/HeroSecModel";
import UnderlinedTitle from "@/components/shared/UnderlinedTitle";
import { Button } from "@/components/ui/button";
import { featuresData } from "@/constants/index";
import { ArrowRightCircle, Map, Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideLeft, slideRight, slideUp } from "@/lib/animation";
import CustomCard from "@/components/shared/CustomCard";

function HeroSection() {
  return (
    <div className="sm:px-4 max-w-7xl mx-auto">
      {/* Hero */}
      <div className="grid grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 gap-12 min-h-screen mt-16">
        <div className="h-full flex flex-col justify-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
          >
            <h1 className="scale-[0.90] origin-left">
              <UnderlinedTitle
                before="Get Ready For Your Best"
                spotlight="Healthcare"
                after="Experience!"
              />
            </h1>
          </motion.div>

          <motion.p
            className="text-mainColor -mt-2"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Choosing MISC for your medical tourism needs ensures that you
            receive not only the best medical care but also a seamless and
            stress-free experience.
          </motion.p>

          <motion.form
            className="flex max-w-lg border mt-9 rounded-xl shadow-md"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <div className="flex items-center flex-1 pl-5">
              <Map className="text-gray-300" />
              <input
                type="text"
                placeholder="Search Procedure/Doctor/Hospital/Destination"
                className="flex-1 inset-0 border-0 outline-0 px-3 pl-4 placeholder:text-gray-300 placeholder:font-medium"
              />
            </div>
            <div className="py-2 pr-4">
              <Button
                variant={"mainBlue"}
                type="submit"
                className="rounded-lg px-10"
                size={"lg"}
              >
                <Search strokeWidth={3} />
              </Button>
            </div>
          </motion.form>

          <motion.div
            className="flex items-center mt-10"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Button variant={"mainBlue"} className="py-[28px] px-[30px]">
              Book an appointment
            </Button>
            <Button
              variant={"ghost"}
              className="flex hover:bg-transparent items-center gap-2 py-[28px] px-[30px]"
            >
              <Image
                src={"/icons/phoneIcon.svg"}
                width={60}
                height={60}
                alt="Phone icon"
              />
              <div className="text-left">
                <h1 className="text-midBlue text-lg font-semibold">
                  24H Emergency Service
                </h1>
                <p className="text-mainColor font-semibold mt-1">0900-78601</p>
              </div>
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-items gap-2 mt-3"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="text-gray-400 text-lg">Know Us Better</span>
            <Image
              src={"/icons/play-button.svg"}
              width={20}
              height={20}
              alt="play"
            />
          </motion.div>
        </div>

        <motion.div
          className="flex justify-center items-center"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <HeroSecModel />
        </motion.div>
      </div>

      {/* Cards */}
      <div
        className="
        grid grid-cols-3 
        relative bg-[rgb(214,241,255)] rounded-xl h-96 py-[45px] px-[35px] gap-6 z-20"
      >
        {featuresData.map((ele, ix) => (
          <div key={ix} className="h-full">
            <CustomCard ix={ix} ele={ele} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
