"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import UnderlinedTitle from "@/components/shared/UnderlinedTitle";
import { slideUp } from "@/lib/animation";

// Define the missing types
interface SlideData {
  name: string;
  details: string;
  img: string;
}

interface ExploreSliderProps {
  data: {
    title: {
      before: string;
      spotlight: string;
      after: string;
      isLongVector: boolean;
    };
    paragraph: string;
    isBigCards: boolean;
    slidesData: SlideData[];
  };
}

export default function ExploreSlider({ data }: ExploreSliderProps) {
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setIsStart(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="bg-babyBlue py-16 relative">
      <div className="sm:px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <UnderlinedTitle
              before={data.title.before}
              spotlight={data.title.spotlight}
              after={data.title.after}
              longVector={data.title.isLongVector}
            />
          </motion.div>
          <motion.p
            className="text-mainColor max-w-2xl mx-auto text-[18px] mt-5"
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            {data.paragraph}
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
            className={cn(
              "mySwiper w-full",
              data.isBigCards ? "h-[430px]" : "h-[340px]"
            )}
          >
            {data.slidesData.map((ele: SlideData, ix: number) => (
              <SwiperSlide
                key={ix}
                className="relative max-w-[305px] h-full bg-gray-200"
              >
                <div
                  className={cn(
                    "absolute p-4 bottom-4 left-1/2 -translate-x-1/2 z-10 w-[90%] rounded-lg",
                    data.isBigCards
                      ? "h-[195px] bg-sky-blue-linear-2"
                      : "h-[100px] bg-sky-blue-linear"
                  )}
                >
                  <h1
                    className={cn(
                      "text-2xl text-white font-semibold leading-7",
                      data.isBigCards ? "line-clamp-2" : "line-clamp-1"
                    )}
                  >
                    {ele.name}
                  </h1>
                  <h2
                    className={cn(
                      "text-white",
                      data.isBigCards ? "line-clamp-4" : "line-clamp-1"
                    )}
                  >
                    {ele.details}
                  </h2>
                </div>
                <Image
                  src="/icons/LinkedIn.svg"
                  alt="Linkedin"
                  width={40}
                  height={40}
                  className="absolute z-10 top-3 right-3"
                />
                <Image
                  src={ele.img}
                  alt={ele.name}
                  className="z-1"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
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
              theme="light"
              isRight={false}
              className="swiper-button-prev"
            />
            <SlideButton
              onClick={() => swiperRef.current?.slideNext()}
              isRight={true}
              theme="light"
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
