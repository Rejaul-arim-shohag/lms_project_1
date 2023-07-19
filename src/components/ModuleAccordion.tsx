import React from "react";
import { GoDotFill } from "react-icons/go";
import { Accordion } from "./ui/accordion";
import { AccordionBox } from "./AccordianBox";
export default function ModuleAccordion() {
  return (
    <div>
      <div>
        <p className="text-3xl font-semibold pb-2">কোর্স মডিউল</p>
        <div className="flex items-center">
          <div className="flex items-center">
            <GoDotFill className="text-slate-200" />
            <p>১৬ টি মডিউল</p>
          </div>
          <div className="flex items-center">
            <GoDotFill className="text-slate-200" />
            <p>১৬ টি মডিউল</p>
          </div>
          <div className="flex items-center">
            <GoDotFill className="text-slate-200" />
            <p>১৬ টি মডিউল</p>
          </div>
        </div>
      </div>
      <AccordionBox />
    </div>
  );
}
