import React from "react";
import Image from "next/image";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { BiRightArrowCircle } from "react-icons/bi";
export default function SideCourseCard() {
  return (
    <div className="relative border-2px border rounded-lg     ">
      <div className="h-48 relative overflow-hidden rounded-t-2xl">
        <Image fill src={"/images/Group5720.png"} alt="photo" />
      </div>
      <div>
        <div className="flex gap-3 justify-center py-3 border-b-2">
          <div className="flex gap-1 bg-slate-200 rounded-lg p-1 px-2 items-center">
            <AiOutlineFieldTime className="w-6 h-6" />
            <p>৬২ দিন বাকি</p>
          </div>
          <div className="flex gap-1 bg-slate-200 rounded-lg  px-2 p-1 items-center">
            <FaUserFriends className="w-6 h-6" />
            <p>১৫৪ সিট বাকি</p>
          </div>
        </div>
        <div className="">
          <div className="w-full ">
            <div className="flex justify-between p-5 ">
              <p className="text-2xl font-semibold">৳ ৪,০০০</p>
              <p>শেয়ার</p>
            </div>
            <div className="mx-5">
              <button className="w-full bg-theme text-white text-xl py-2 rounded-xl">
                জয়েন লাইভ ব্যাচ
              </button>
            </div>
          </div>
        </div>
        <div className="p-5">
          <p className="text-xl pb-5 ">এই কোর্সে আপনি পাচ্ছেন</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center-center gap-2 text-foreground">
              <BiRightArrowCircle className="w-6 h-6 " />
              <p>৬ মাসের স্টাডি প্ল্যান</p>
            </div>
            <div className="flex items-center-center gap-2 text-foreground">
              <BiRightArrowCircle className="w-6 h-6 " />
              <p>৬ মাসের স্টাডি প্ল্যান</p>
            </div>
            <div className="flex items-center-center gap-2 text-foreground">
              <BiRightArrowCircle className="w-6 h-6 " />
              <p>৬ মাসের স্টাডি প্ল্যান</p>
            </div>
            <div className="flex items-center-center gap-2 text-foreground">
              <BiRightArrowCircle className="w-6 h-6 " />
              <p>৬ মাসের স্টাডি প্ল্যান</p>
            </div>
            <div className="flex items-center-center gap-2 text-foreground">
              <BiRightArrowCircle className="w-6 h-6 " />
              <p>৬ মাসের স্টাডি প্ল্যান</p>
            </div>
            <div className="flex items-center-center gap-2 text-foreground">
              <BiRightArrowCircle className="w-6 h-6 " />
              <p>৬ মাসের স্টাডি প্ল্যান</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
