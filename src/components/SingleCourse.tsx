import React from "react";
import { Button } from "./ui/button";
export default function SingleCourse() {
  return (
    <div className="flex flex-col md:flex-row justify-center py-10">
      <div className="w-full md:w-1/2 lg:w-1/3 p-4 bg-white">
        <h1 className="text-4xl font-bold text-center py-4">ডিজিটাল মার্কেটিং</h1>
        <h4 className="text-sm text-center pb-2">ওয়েব এবং অ্যাপ ডেভেলপমেন্ট, টেক-ক্যারিয়ার গড়ুন এখনই।</h4>
        <div className="flex justify-center mt-10">
          <button className="text-base mr-3 bg-purple-600 font-semibold text-white rounded-none px-8 py-3">লাইভ কোর্স</button>
          <button className="text-base font-semibold rounded-none px-8 py-3 bg-gray-100 ">প্রি রেকর্ড কোর্স</button>
        </div>
      </div>
    </div>
  );
}
