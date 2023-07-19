import React from "react";
import { AiOutlineRight } from "react-icons/ai";

export default function InscructorCard() {
  return (
    <div>
      <p className="text-3xl font-semibold pb-10">ইন্সট্রাক্টর</p>
      <div className="border-2 rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="w-24 h-24 rounded-xl bg-slate-800"></div>
          <div>
            <p className="text-lg font-semibold">Bondhan Podder Arjun</p>
            <p>Graphics Design Instructor</p>
          </div>
        </div>
        <div>
          <AiOutlineRight className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
