"use client";

import { useState, useEffect } from "react";
import { Languages, Menu, User, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants/index";
import { Button } from "@/components/ui/button";
import NavDropdownButton from "@/components/NavDropdownButton";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // setIsSticky(window.scrollY > 100);
      setIsSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={cn(
        "bg-babyBlue absolute px-4 md:px-6 left-1/2 -translate-x-1/2 z-50 flex transform items-center justify-between transition-all duration-500 ease-in-out",
        isSticky
          ? "fixed top-0 w-full backdrop-blur-sm "
          : "top-8 w-[88%] rounded-xl",
        isMobileMenuOpen ? "h-screen" : "h-[90px]"
      )}
    >
      <div className="flex w-full items-center gap-2">
        {/* ====== LOGO ====== */}
        <Link href="/" className="relative h-16 w-16 md:h-20 md:w-20">
          <Image src="/icons/Misc logo.svg" alt="Mist" fill />
        </Link>

        {/* ====== MOBILE MENU TOGGLE ====== */}
        <button
          className="z-50 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* ====== DESKTOP MENU ====== */}
        {/* ====== LINKS ====== */}
        <ul className="mr-8 flex flex-grow items-center justify-center gap-8">
          {navLinks.map(({ title, href }, ix) => (
            <li key={ix}>
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>

        {/* ====== ACTIONS ====== */}
        <div className="flex items-center gap-4">
          <Button variant="mainBlue" size="custome">
            Video consult
          </Button>
          <NavDropdownButton
            icon={Languages}
            items={["English", "Spanish", "French", "German", "Italian"]}
          />
          <NavDropdownButton
            icon={User}
            items={[
              "View Profile",
              "Account Settings",
              "Notifications",
              "Help & Support",
              "Log Out",
            ]}
          />
        </div>
      </div>

      {/* ====== MOBILE MENU ====== */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-[90px] h-[calc(100vh-90px)] w-full bg-babyBlue px-4 py-8 md:hidden">
          <ul className="mb-8 flex flex-col gap-6">
            {navLinks.map(({ title, href }, ix) => (
              <li key={ix}>
                <Link
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <Button variant="mainBlue" size="custome" className="w-full">
              Video consult
            </Button>
            <NavDropdownButton
              icon={Languages}
              items={["English", "Spanish", "French", "German", "Italian"]}
            />
            <NavDropdownButton
              icon={User}
              items={[
                "View Profile",
                "Account Settings",
                "Notifications",
                "Help & Support",
                "Log Out",
              ]}
            />
          </div>
        </div>
      )}
    </motion.nav>
  );
}
