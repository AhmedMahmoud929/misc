"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { Archivo } from "next/font/google";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { packages } from "@/constants/index";
import UnderlinedTitle from "@/components/shared/UnderlinedTitle";
import { slideUp } from "@/lib/animation";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["700"],
});

interface Package {
  title: string;
  description: string;
  features: string[];
}

export default function PackagesSection() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      setIsStart(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    }
  }, [activeIndex]);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    setIsStart(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="sm:px-4 max-w-7xl mx-auto py-24 relative">
      <motion.div
        className="text-center mb-12"
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <UnderlinedTitle before="Our Featured" spotlight="Packages" />
      </motion.div>

      <motion.div
        className="flex flex-col lg:flex-row items-center gap-4 md:gap-4"
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <div className="hidden lg:block">
          <SlideButton
            onClick={() => swiperRef.current?.slidePrev()}
            isRight={false}
            disabled={isStart}
          />
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          centeredSlides={true}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            840: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          loop={false}
          initialSlide={1}
          onSlideChange={handleSlideChange}
          className="mySwiper w-full flex items-center justify-center h-[500px]"
        >
          {packages.map((pkg: Package, ix: number) => (
            <SwiperSlide key={ix}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: activeIndex === ix ? 1 : 0.9,
                  y: activeIndex === ix ? 0 : 20,
                }}
                transition={{ duration: 0.1 }}
                className={cn(
                  "bg-secondaryGray flex flex-col justify-between p-4 rounded-2xl overflow-hidden w-full max-w-[360px] mx-auto duration-300",
                  activeIndex === ix ? "bg-babyBlue h-[97%]" : "h-[85%] mt-4"
                )}
              >
                <div>
                  <div className="text-center pt-3 border-b border-gray-400 w-[90%] mx-auto">
                    <h3
                      className={`text-4xl font-semibold mb-4 ${archivo.className}`}
                    >
                      {pkg.title}
                    </h3>
                    <p className="text-mainColor opacity-50 text-xs mb-6">
                      {pkg.description}
                    </p>
                  </div>
                  <ul className="space-y-3 pt-6 px-4">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="bg-darkBlue h-5 w-5 rounded-full flex justify-center items-center">
                          <Check className="text-white h-4 w-7" />
                        </div>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: feature,
                          }}
                          className={cn(
                            "text-xs opacity-50",
                            activeIndex === ix && "opacity-100"
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex justify-center">
                  <Button variant="mainBlue" className="group">
                    Choose this Package
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hidden lg:block">
          <SlideButton
            onClick={() => swiperRef.current?.slideNext()}
            isRight={true}
            disabled={isEnd}
          />
        </div>

        <div className="flex items-center justify-center gap-4 lg:hidden">
          <SlideButton
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isStart}
          />
          <SlideButton
            onClick={() => swiperRef.current?.slideNext()}
            isRight
            disabled={isEnd}
          />
        </div>
      </motion.div>
    </section>
  );
}

interface SlideButtonProps {
  onClick: () => void;
  isRight?: boolean;
  disabled: boolean;
}

const SlideButton = ({ onClick, isRight, disabled }: SlideButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "w-[100px] h-[40px] md:w-[130px] md:h-[55px] bg-darkBlue p-2 rounded-none shadow-md transition-all duration-300",
        disabled && "opacity-50 cursor-not-allowed"
      )}
      aria-label={isRight ? "Next slide" : "Previous slide"}
      disabled={disabled}
    >
      <Image
        src="/icons/Arrow - Right.svg"
        width={55}
        height={45}
        alt="arrow"
        className={cn(
          "transition-transform duration-300",
          isRight ? "rotate-180" : "rotate-0"
        )}
      />
    </Button>
  );
};
