import { motion } from "framer-motion";
import { slideUp } from "@/lib/animation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";

interface CustomeCardProps {
  ix: number;
  ele: {
    icon: string;
    title: string;
    body: string;
    url: string;
  };
}

function CustomCard({ ix, ele }: CustomeCardProps) {
  return (
    <motion.div
      key={ix}
      className="bg-white h-full text-center rounded-xl py-5 px-10 flex flex-col justify-between items-center"
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      transition={{ delay: 0.3 + ix * 0.1, duration: 0.6 }}
    >
      <div className="bg-midBlue w-[70px] h-[70px] rounded-full flex items-center justify-center">
        <Image src={ele.icon} width={45} height={45} alt={ele.title} />
      </div>
      <h1 className="text-2xl font-semibold">{ele.title}</h1>
      <p className="text-mainColor md:line-clamp-3">{ele.body}</p>
      <div>
        <Link href={ele.url} className="flex items-center gap-2">
          <span className="underline font-semibold">Learn More</span>
          <ArrowRightCircle />
        </Link>
      </div>
    </motion.div>
  );
}

export default CustomCard;
