import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface UnderlinedTitleProps {
  before?: string;
  spotlight: string;
  after?: string;
  specialPosition?: string;
  size?: "h1" | "h2" | "h3";
  longVector?: boolean;
}

function UnderlinedTitle({
  before,
  spotlight,
  after,
  specialPosition,
  size = "h1",
  longVector = false,
}: UnderlinedTitleProps) {
  const Tag = size;

  return (
    <Tag
      className={cn(
        "mb-4 font-bold tracking-tight",
        size === "h1" && "text-5xl lg:text-6xl",
        size === "h2" && "text-4xl lg:text-5xl",
        size === "h3" && "text-3xl lg:text-4xl"
      )}
    >
      {before && before + " "}
      <span className="relative inline-block">
        <Image
          src={
            longVector ? "/icons/Vector-long.svg" : "/icons/Vector-short.svg"
          }
          width={longVector ? 200 : 100}
          height={20}
          className={cn(
            "absolute w-full",
            specialPosition ? specialPosition : "bottom-0 right-0"
          )}
          alt=""
          aria-hidden="true"
        />
        <span className="relative">{spotlight}</span>
      </span>
      {after && " " + after}
    </Tag>
  );
}

export default UnderlinedTitle;
