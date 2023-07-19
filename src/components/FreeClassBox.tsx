import React from "react";

export default function FreeClassBox() {
  return (
    <div className="bg-[#FFCE3C] py-6 rounded-xl flex justify-between items-center px-5">
      <div>
        <p>ফ্রি ওরিয়েন্টেশন ক্লাস</p>
        <p className="font-semibold">১৫ আগস্ট, মঙ্গল - রাত ৯:০০</p>
      </div>
      <div>
        <button className="bg-theme text-white p-2 px-5 rounded-lg font-semibold">
          বুক করুন
        </button>
      </div>
    </div>
  );
}
