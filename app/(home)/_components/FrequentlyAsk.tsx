"use client";

import UnderlinedTitle from "@/components/shared/UnderlinedTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsData } from "@/constants/index";
import { slideUp } from "@/lib/animation";
import { motion } from "framer-motion";

export default function FrequentlyAsk() {
  return (
    <section className="py-16 my-4 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <UnderlinedTitle spotlight="Frequently Ask Question" longVector />
        </motion.div>
        <motion.p
          className="text-muted-foreground mt-6 mb-12 w-[70%] mx-auto"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          We use only the best quality materials on the market in order to
          provide the best products to our patients.
        </motion.p>

        <Accordion type="single" collapsible className="w-full">
          {faqsData.map((faq, index) => (
            <motion.div
              key={index}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2 + index * 0.2, duration: 0.4 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border-none mb-4 group rounded-lg hover:bg-[#4B93D6] duration-150"
              >
                <AccordionTrigger className="px-6 rounded-lg py-4 hover:no-underline group-hover:bg-[#4B93D6] group-hover:text-white transition-colors duration-150">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6  pb-4 text-left text-white">
                  <div className="h-[1px] mb-8 w-full bg-white/50"></div>

                  <div className="px-6 mb-2">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
