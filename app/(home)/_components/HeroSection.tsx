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
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[calc(100vh-4rem)] mt-28 md:mt-32">
        <div className="col-span-2 xl:col-span-1 h-full flex flex-col justify-center">
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
            className="text-mainColor text-sm sm:text-base lg:text-lg -mt-2"
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
            className="flex flex-col sm:flex-row max-w-lg border mt-6 sm:mt-9 rounded-xl shadow-md"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <div className="flex items-center flex-1 pl-3 sm:pl-5 py-2 sm:py-0">
              <Map className="text-gray-300 w-5 h-5 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search Procedure/Doctor/Hospital/Destination"
                className="flex-1 border-0 outline-0 px-2 sm:px-3 py-2 placeholder:text-gray-300 placeholder:font-medium text-sm"
              />
            </div>
            <div className="p-2 sm:py-2 sm:pr-4">
              <Button
                variant={"mainBlue"}
                type="submit"
                className="rounded-lg px-4 sm:px-10 w-full sm:w-auto"
                size={"lg"}
              >
                <Search strokeWidth={3} />
              </Button>
            </div>
          </motion.form>

          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4 sm:mt-10"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Button
              variant={"mainBlue"}
              className="py-3 px-4 sm:py-[28px] sm:px-[30px] w-full sm:w-auto"
            >
              Book an appointment
            </Button>
            <Button
              variant={"ghost"}
              className="flex justify-start sm:bg-transparent hover:bg-transparent  items-center gap-2 py-3 px-4 sm:py-[28px] sm:px-[30px] w-full sm:w-auto"
            >
              <Image
                src={"/icons/phoneIcon.svg"}
                width={40}
                height={40}
                alt="Phone icon"
              />
              <div className="text-left">
                <h2 className="text-midBlue text-base sm:text-lg font-semibold">
                  24H Emergency Service
                </h2>
                <p className="text-mainColor font-semibold mt-1 text-sm sm:text-base">
                  0900-78601
                </p>
              </div>
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center justify-center md:justify-start gap-2 ml-auto sm:ml-0 mt-3"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className=" text-gray-400 text-base sm:text-lg">
              Know Us Better
            </span>
            <Image
              src={"/icons/play-button.svg"}
              width={20}
              height={20}
              alt="play"
            />
          </motion.div>
        </div>

        <motion.div
          className="hidden xl:flex justify-center items-center mt-8 lg:mt-0"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <HeroSecModel />
        </motion.div>
      </div>

      {/* Cards */}
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-[rgb(214,241,255)] rounded-xl p-4 sm:p-6 lg:p-8">
          {featuresData.map((ele, ix) => (
            <div key={ix} className="h-full">
              <CustomCard ix={ix} ele={ele} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
