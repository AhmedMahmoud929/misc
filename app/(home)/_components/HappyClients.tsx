"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import UnderlinedTitle from "@/components/shared/UnderlinedTitle";
import { slideUp } from "@/lib/animation";
import { happyClientsData } from "@/constants/index";

interface HappyClientData {
  name: string;
  img: string;
}

export default function HappyClients() {
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsStart(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="bg-white py-16 relative">
      <div className="sm:px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <UnderlinedTitle
              before={"Our"}
              spotlight={"Happy Clients"}
              longVector
            />
          </motion.div>
          <motion.p
            className="text-mainColor max-w-2xl mx-auto text-[18px] mt-5"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col items-center gap-4 md:gap-4 mt-12"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsStart(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={handleSlideChange}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className={cn("mySwiper w-full h-[280px] ")}
          >
            {happyClientsData.map((ele: HappyClientData, ix: number) => (
              <SwiperSlide
                key={ix}
                className="relative max-w-[355px] h-full bg-babyBlue/40 shadow-md"
              >
                <div className="flex items-center gap-4 p-6">
                  <Avatar className="scale-[1.5]">
                    <AvatarImage src={ele.img} alt={ele.name} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="text-xl text-semibold">
                    <span>{ele.name}</span>
                    <Image
                      src="/icons/rateStars.svg"
                      alt="Rate"
                      width={100}
                      height={30}
                    />
                  </div>
                </div>
                <p className="text-mainColor p-6 pt-0 line-clamp-6">
                  Phosfluorescently synergize covalent outsourcing through
                  functional strategic theme areas. Assertively scale strategic
                  portals without distinctive relationships. Holisticly
                  cultivate tactical e-services before fully researched sources.
                </p>
              </SwiperSlide>
            ))}
          </Swiper>

          <motion.div
            className="flex items-center justify-center gap-4 mt-6"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <SlideButton
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isStart}
              isRight={false}
              className="swiper-button-prev"
            />
            <SlideButton
              onClick={() => swiperRef.current?.slideNext()}
              isRight={true}
              disabled={isEnd}
              className="swiper-button-next"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

interface SlideButtonProps {
  onClick: () => void;
  isRight: boolean;
  disabled: boolean;
  theme?: "light" | "dark";
  className?: string;
}

const SlideButton = ({
  onClick,
  isRight,
  disabled,
  theme = "dark",
  className,
}: SlideButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant={theme === "light" ? "secondary" : "default"}
      className={cn(
        "w-[100px] h-[40px] md:w-[130px] md:h-[55px] p-2 rounded-none shadow-md transition-all duration-300",
        disabled && "opacity-50 cursor-not-allowed",
        theme === "light" ? "bg-white" : "bg-darkBlue",
        className
      )}
      aria-label={isRight ? "Next slide" : "Previous slide"}
      disabled={disabled}
    >
      <Image
        src="/icons/Arrow - Right.svg"
        width={55}
        height={45}
        alt={isRight ? "Next" : "Previous"}
        className={cn(
          "transition-transform duration-300",
          isRight && "rotate-180",
          theme === "light" && "invert"
        )}
      />
    </Button>
  );
};
