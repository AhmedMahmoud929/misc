"use client";

import UnderlinedTitle from "@/components/shared/UnderlinedTitle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { slideLeft, slideUp } from "@/lib/animation";
import { motion } from "framer-motion";

export default function OffersSection() {
  const specialties = [
    {
      title: "Orthopedics",
      description:
        "Specializing in joint replacement, spinal surgery, and sports injuries.",
      image: "/images/offers-1.png",
    },
    {
      title: "Cardiology",
      description:
        "Offering interventional cardiology, cardiac surgery, and rehabilitation.",
      image: "/images/offers-2.png",
    },
    {
      title: "Cosmetic Surgery",
      description:
        "Bringing hope releasing invasive techniques to complex reconstructive surgeries.",
      image: "/images/offers-3.png",
    },
    {
      title: "Cardiology",
      description:
        "Offering interventional cardiology, cardiac surgery, and rehabilitation.",
      image: "/images/offers-4.png",
    },
    {
      title: "Neurology",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "/images/offers-5.png",
    },
    {
      title: "Wellness treatments",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "/images/offers-6.png",
    },
    {
      title: "Advanced diagnostics",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: "/images/offers-7.png",
    },
    {
      title: "Fertility",
      description:
        "Successful IVF treatments with high success rates for international patients.",
      image: "/images/offers-8.png",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <UnderlinedTitle
            spotlight="Specialties Offered"
            longVector
            size="h2"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              className="overflow-hidden flex flex-col bg-babyBlue rounded-lg w-[300px] h-[400px] p-4 transition-colors"
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div className="h-[210px] rounded-md overflow-hidden w-full relative">
                <img
                  src={specialty.image}
                  alt={`${specialty.title} illustration`}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-grow flex-col justify-between">
                <div className=" px-0 pt-4">
                  <div className="text-xl font-semibold mb-1 line-clamp-1">
                    {specialty.title}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {specialty.description}
                  </p>
                </div>

                <Button size="sm" className="w-full">
                  Show more
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="flex justify-center mt-8 md:mt-12"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Button variant={"mainBlue"} size={"custome"} className="px-8">
            Check out more
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
