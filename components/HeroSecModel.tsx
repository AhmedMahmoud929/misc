"use client";

import { cn } from "@/lib/utils";
import { Earth, PhoneCall, Ticket, Umbrella, Video } from "lucide-react";
import Image from "next/image";
import React from "react";

function HeroSecModel() {
  return (
    <div className="relative flex flex-col justify-end h-full w-full">
      <div className="relative h-[90%] w-full">
        <Image
          src="/images/docBackCircle.png"
          alt="Doc-Model"
          fill
          objectFit="contain"
          objectPosition="bottom"
        />
        <Image
          src="/images/docBackCircle.png"
          alt="Doc-Model"
          fill
          className="scale-75"
          objectFit="contain"
          objectPosition="bottom"
        />
        <div className="absolute top-0 w-full h-full rounded-full animate-spin-slow">
          <AnimatedIcon position={"-right-1 top-[64%]"} icon={<Video />} />
          <AnimatedIcon position={"-left-4 top-[49%]"} icon={<Earth />} />
          <AnimatedIcon position={"right-28 top-[5%]"} icon={<Ticket />} />
        </div>
        <div className="relative w-full h-full top-[242px] scale-75">
          <div className=" rounded-full animate-spin-slow">
            <AnimatedIcon
              position={"-right-1 top-[64%]"}
              icon={<PhoneCall />}
            />
            <AnimatedIcon position={"-left-4 top-[49%]"} icon={<Umbrella />} />
          </div>
        </div>

        <Image
          src="/images/docModel.png"
          alt="Doc-Model"
          fill
          objectFit="contain"
          objectPosition="bottom"
        />
      </div>
    </div>
  );
}

const AnimatedIcon = ({
  position,
  icon,
}: {
  position: string;
  icon: React.ReactNode;
}) => (
  <div
    className={cn(
      "absolute -right-3 top-[60%] bg-midBlue h-14 w-14 flex justify-center items-center rounded-full animate-spin-slow shadow-blue",
      position
    )}
  >
    <div className="text-white">{icon}</div>
  </div>
);

export default HeroSecModel;
