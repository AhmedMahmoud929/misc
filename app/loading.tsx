"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#f8fbff]">
      <div className="flex flex-col items-center gap-8">
        {/* Logo animation container */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 rounded-full border-4 border-[#4696e6] border-t-transparent"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center p-4"
          >
            {/* Replace this with your actual logo - using a medical cross as placeholder */}
            <svg
              className="w-12 h-12 text-midBlue"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <Image
              src={"icons/Misc logo.svg"}
              alt="MISC"
              width={200}
              height={200}
            />
          </motion.div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-[#2d4b6b] mb-2">
            Loading Your Healthcare Experience
          </h2>
          <p className="text-[#7a92a9]">
            Please wait while we prepare your journey to better health
          </p>
        </motion.div>

        {/* Animated dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="w-3 h-3 rounded-full bg-[#4696e6]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
