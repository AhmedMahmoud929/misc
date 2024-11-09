import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import LocalFont from "next/font/local";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { footerLinks, socialIcons } from "@/constants/index";

const drukwideFont = LocalFont({
  src: "../../app/fonts/ClashDisplay-Semibold.woff",
});

function Footer() {
  return (
    <footer className="w-full bg-babyBlue px-4 py-12 md:px-6">
      <div className="sm:px-4 max-w-7xl mx-auto">
        <div className="mx-auto max-w-xl text-center">
          <h2
            className={cn(
              "text-5xl mt-4 font-bold text-[#1a1a1a]",
              drukwideFont.className
            )}
          >
            Get More Updates
          </h2>
          <p className="text-mainColor mt-4 mb-12 ">
            Join our mailing list to stay in the loop with our newest feature
            releases, drops, promos, and updates.
          </p>
          <form className="flex flex-col md:flex-row items-center pl-4 px-2 gap-2 rounded-full md:bg-white/50">
            <input
              className="min-h-16 flex-1 text-lg rounded-md md:rounded-full px-6 outline-0 w-full md:w-fit border-0"
              placeholder="Your Email..."
              type="email"
            />
            <Button
              variant={"mainBlue"}
              className="h-12 rounded-md w-full md:w-fit md:rounded-full px-8"
            >
              I&apos;m In
            </Button>
          </form>
        </div>

        <div className="flex flex-col mt-32 mb-6 items-center justify-between gap-8 md:flex-row">
          <Link href="/" className="text-2xl font-bold text-[#1a1a1a]">
            <Image
              src="/icons/mini-logo.svg"
              alt="MISC"
              width={90}
              height={40}
            />
          </Link>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
            {footerLinks.map(({ name, url }, ix) => (
              <Link
                href={url}
                key={ix}
                className="text-mainColor font-semibold hover:text-[#1a1a1a]"
              >
                {name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-sm text-[#666666]">
            All rights reserved © MISC.com | Terms and conditions apply!
          </p>
          <div className="flex items-center gap-4">
            {socialIcons.map(({ name, icon, url }, ix) => (
              <Link
                key={ix}
                href={url}
                className="bg-black rounded-full flex items-center justify-center h-8 w-8 hover:opacity-70"
              >
                {icon}
                <span className="sr-only">{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
