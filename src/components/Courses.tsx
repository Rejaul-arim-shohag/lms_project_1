import React from "react";
export default function Courses() {
  const cards = [
    {
      title: "ডিজিটাল মার্কেটিং",
      description: "গ্রাফিক ডিজাইন, ইউ আই ইউ এক্স ডিজাইন, মোশন গ্রাফিক",
      icon: "/images/Frame 33.png",
    },
    {
      title: "ডিজাইন",
      description: "গ্রাফিক ডিজাইন, ইউ আই ইউ এক্স ডিজাইন, মোশন গ্রাফিক",
      icon: "/images/Frame 33.png",
    },
    {
      title: "ডেভেলপমেন্ট",
      description: "গ্রাফিক ডিজাইন, ইউ আই ইউ এক্স ডিজাইন, মোশন গ্রাফিক",
      icon: "/images/Frame 33.png",
    },
    {
      title: "বিজনেস",
      description: "গ্রাফিক ডিজাইন, ইউ আই ইউ এক্স ডিজাইন, মোশন গ্রাফিক",
      icon: "/images/Frame 33.png",
    },
    {
      title: "ভিডিও ও এনিমেশন 2",
      description: "গ্রাফিক ডিজাইন, ইউ আই ইউ এক্স ডিজাইন, মোশন গ্রাফিক",
      icon: "/images/Frame 33.png",
    },
    {
      title: "টেকনোলজি",
      description: "গ্রাফিক ডিজাইন, ইউ আই ইউ এক্স ডিজাইন, মোশন গ্রাফিক",
      icon: "/images/Frame 33.png",
    },
  ];
  return (
    <div className="py-20  bg-[url('/images/courses_bg_iamge.png')]  bg-cover">
      <h2 className="text-4xl font-semibold text-center ">
        ক্যারিয়ার গোল সেট করে যাত্রা শুরু করুন
      </h2>
      <p className="text-center">
        যেকোনো বিষয়ে যেকোনো কিছু শিখতে চলে যান আপনার পছন্দের সেকশনে
      </p>
      <div className="container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-3 ">
        {cards.map((card, index) => (
          <div className="z-40 mt-20 relative rounded-lg bg-slate-5 p-6 bg-background hover:bg-teal-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="absolute -top-12 left-0 right-0">
              <img className="mx-auto w-90 h-90" src={card.icon} alt="" />
            </div>
            <div className="pt-12">
              <h3 className="mb-2 text-2xl font-bold leading-tight text-neutral-800 dark:text-neutral-50 text-center	">
                {card.title}
              </h3>
              <p className="pb-4  text-base text-neutral-600 dark:text-neutral-200 text-center	">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
