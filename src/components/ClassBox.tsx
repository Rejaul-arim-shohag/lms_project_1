import React from "react";

export default function ClassBox() {
  return (
    <div className="bg-slate-200 rounded-lg p-5">
      <div className="flex gap-5 min-w-full ">
        <div className="w-3/12 border-r-2  border-slate-400">
          <button className="bg-theme rounded-lg p-3 text-white">
            ব্যাচ ২
          </button>
        </div>
        <div className="w-4/12  border-r-2 border-slate-400">
          <p>শুরু হবে</p>
          <p className="font-semibold">মঙ্গলবার, ২৯ আগস্ট</p>
        </div>
        <div className="w-5/12">
          <p>ক্লাস শিডিউল</p>
          <p className="font-semibold">মঙ্গলরবি (রাত ৯:০০ - ১০:৩০)</p>
        </div>
      </div>
    </div>
  );
}
