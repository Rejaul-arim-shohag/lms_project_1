import React from "react";
import { BiRightArrowCircle } from "react-icons/bi";

export default function LearingBox() {
  return (
    <div className="">
      <p className="text-2xl font-semibold pb-5">কোর্সটি করে যা শিখবেন</p>
      <div className="grid grid-cols-2   border-2 rounded-xl gap-5 p-5">
        <div className="flex items-center gap-2 text-foreground ">
          <BiRightArrowCircle className="w-6 h-6 text-theme shrink-0 min-h-5" />
          <p>
            ৬ মা ৬ মাসের স্টাডি প্ল্যান৬ মাসের স্টাডি প্ল্যান৬ মাসের স্টাডি
            প্ল্যান৬ মাসের স্টাডি প্ল্যান৬ মাসের স্টাডি প্ল্যানসের স্টাডি
            প্ল্যান
          </p>
        </div>
        <div className="flex items-center gap-2 text-foreground">
          <BiRightArrowCircle className="w-6 h-6 text-theme shrink-0 min-h-5 " />
          <p>
            ৬ মাসের স্টাডি প্ল্যান৬ মাসের স্টাডি প্ল্যান৬ মাসের স্টাডি প্ল্যান৬
            মাসের স্টাডি প্ল্যান৬ মাসের স্টাডি প্ল্যান
          </p>
        </div>
        <div className="flex items-center gap-2 text-foreground">
          <BiRightArrowCircle className="w-6 h-6 text-theme shrink-0 min-h-5" />
          <p>৬ মাসের স্টাডি প্ল্যান</p>
        </div>
        <div className="flex items-center gap-2 text-foreground">
          <BiRightArrowCircle className="w-6 h-6 text-theme shrink-0 min-h-5" />
          <p>৬ মাসের স্টাডি প্ল্যান</p>
        </div>
        <div className="flex items-center gap-2 text-foreground">
          <BiRightArrowCircle className="w-6 h-6 text-theme shrink-0 min-h-5" />
          <p>৬ মাসের স্টাডি প্ল্যান</p>
        </div>
        <div className="flex items-center gap-2 text-foreground">
          <BiRightArrowCircle className="w-6 h-6 text-theme shrink-0 min-h-5" />
          <p>৬ মাসের স্টাডি প্ল্যান</p>
        </div>
        <div className="flex items-center gap-2 text-foreground">
          <BiRightArrowCircle className="w-6 h-6 text-theme shrink-0 min-h-5" />
          <p>৬ মাসের স্টাডি প্ল্যান</p>
        </div>
      </div>
    </div>
  );
}
