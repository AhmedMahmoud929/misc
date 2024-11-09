"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { miscTeamData } from "@/constants";
import UnderlinedTitle from "@/components/shared/UnderlinedTitle";
import { slideInFromBottom, slideInFromLeft } from "@/lib/animationVariants";

export default function MISCTeam() {
  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          className="flex flex-col items-center justify-center text-center"
        >
          <motion.div variants={slideInFromBottom}>
            <UnderlinedTitle before="MISC" size="h2" spotlight="Team" />
          </motion.div>
          <motion.p
            variants={slideInFromBottom}
            custom={0.3}
            className="mx-auto text-base sm:text-lg max-w-3xl text-mainColor mt-4"
          >
            We work with the best quality professionals on the market in order
            to provide the best products to our patients.
          </motion.p>
        </motion.div>

        <div className="mx-auto grid gap-8 mt-12">
          {miscTeamData.map((member, index) => (
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={slideInFromLeft}
              custom={0.2 * (index + 1)}
              key={index}
              className="overflow-hidden mt-8"
            >
              <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <div className="bg-gray-200 relative aspect-square w-full max-w-[300px] md:w-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover"
                  />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center p-4 md:p-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-sm md:text-md text-mainColor font-medium">
                      ({member.specialty})
                    </p>
                  </div>
                  <p className="text-gray-500 mb-4 text-sm/relaxed line-clamp-4 md:line-clamp-6">
                    {member.description}
                  </p>

                  <Link href={member.bookingUrl} className="mt-2">
                    <Button
                      variant={"mainBlue"}
                      className="rounded-lg w-full md:w-auto"
                    >
                      Book an appointment
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
