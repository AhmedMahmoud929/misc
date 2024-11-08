"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavDropdownButtonProps {
  icon: React.ElementType;
  items: string[];
}

export default function NavDropdownButton({
  icon: Icon,
  items,
}: NavDropdownButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-14 w-14 rounded-2xl bg-white p-0 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),0_2px_4px_-2px_rgba(0,0,0,0.1)] hover:bg-white"
        >
          <div className="flex items-center justify-center">
            <Icon className="h-6 w-6 text-gray-400" />
            {isOpen ? (
              <ChevronUp className="ml-1 h-3 w-3 text-gray-400" />
            ) : (
              <ChevronDown className="ml-1 h-3 w-3 text-gray-400" />
            )}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 rounded-xl bg-white p-2 shadow-lg"
        align="end"
        sideOffset={5}
      >
        {items.map((item, index) => (
          <DropdownMenuItem
            key={index}
            className="rounded-lg px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900"
          >
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
