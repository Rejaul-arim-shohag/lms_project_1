import React from "react";

export default function Notice() {
  return (
    <div className="w-screen bg-[#F2BA11] text-center ">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-screen-xl mx-auto py-2 lg:py-5">
        <div className="text-md lg:text-lg">
          <p>
            ঈদ উপলক্ষে কুপন কোড <strong>"EID25"</strong> ব্যাবহার করলেই পাবেন
            বেস্টসেলিংসব কোর্সে 35% এর বিশাল ছাড় |
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex gap-1 items-center ">
            <p className="rounded-lg p-2 bg-[#F2CD5C]">02</p>
            <p>Hours</p>
          </div>
          <div className="flex gap-1 items-center ">
            <p className="rounded-lg p-2 bg-[#F2CD5C]">02</p>
            <p>Minitue</p>
          </div>
          <div className="flex gap-1 items-center ">
            <p className="rounded-lg p-2 bg-[#F2CD5C]">02</p>
            <p>Second</p>
          </div>
        </div>
      </div>
    </div>
  );
}
