import { cn } from "@/lib/utils";
import React from "react";

interface UnderlinedTitleProps {
  before?: string;
  spotlight: string;
  after?: string;
  specialPosition?: string;
  size?: string;
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
  return (
    <h1
      className={cn(
        "mb-4",
        size === "h1" && "text-h1 font-bold ",
        size === "h2" &&
          "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
      )}
    >
      {before && before + " "}
      <span className="relative">
        <img
          src={longVector ? "/icons/Vector-long.svg" : "/icons/Vector-short.svg"}
          className={cn(
            "absolute w-full",
            specialPosition ? specialPosition : "bottom-0 right-0"
          )}
          alt="vector line"
        />
        <span className="relative">{spotlight}</span>
      </span>
      {after && " " + after}
    </h1>
  );
}

export default UnderlinedTitle;
