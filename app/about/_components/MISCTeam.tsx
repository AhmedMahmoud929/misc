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
    <section className="w-full py-16">
      <div className="container px-4 md:px-6">
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
            className="mx-auto text-lg max-w-3xl text-mainColor"
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
              custom={0.2}
              key={index}
              className="overflow-hidden mt-8"
            >
              <div className="flex justify-center items-center gap-5 ">
                <div className="bg-gray-200 relative aspect-square md:aspect-[5.5/6] rounded-lg overflow-hidden w-[300px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="w-1/2 flex flex-col justify-center p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-3xl font-bold tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-md text-mainColor font-medium">
                      ({member.specialty})
                    </p>
                  </div>
                  <p className="text-gray-500 mb-4 text-sm/relaxed line-clamp-6">
                    {member.description}
                  </p>

                  <Link href={member.bookingUrl}>
                    <Button variant={"mainBlue"} className="rounded-lg">
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
