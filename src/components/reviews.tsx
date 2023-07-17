"use client";
import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { FcNext, FcPrevious } from "react-icons/fc";

export default function Reviews() {
  const reviewers = [
    {
      name: "Neil Sims",
      email: "neilsims@gmail.com",
      image: "/images/Rectangle25.png",
      review_content:
        "ইউআই ইউএক্স কোর্সটি স্কিল ডেভেলপমেন্টের জন্য অনেক হেল্পফুল একটি কোর্স। আমার প্রতিটি প্রবলেমই তারা লাইভ ক্লাসেই সলভ করার চেষ্টা করেছে। এছাড়াও সাপোর্ট ইন্সট্রাক্টররাও অনেক ভালো। এসব কারণেই ইউআই ইউএক্স এর লার্নিং জার্নিটা আমার জন্য ছিল অসাধারণ।",
    },
    {
      name: "Neil Sims",
      email: "neilsims@gmail.com",
      image: "/images/Rectangle25.png",
      review_content:
        "ইউআই ইউএক্স কোর্সটি স্কিল ডেভেলপমেন্টের জন্য অনেক হেল্পফুল একটি কোর্স। আমার প্রতিটি প্রবলেমই তারা লাইভ ক্লাসেই সলভ করার চেষ্টা করেছে। এছাড়াও সাপোর্ট ইন্সট্রাক্টররাও অনেক ভালো। এসব কারণেই ইউআই ইউএক্স এর লার্নিং জার্নিটা আমার জন্য ছিল অসাধারণ।",
    },
    {
      name: "Neil Sims",
      email: "neilsims@gmail.com",
      image: "/images/Rectangle25.png",
      review_content:
        "ইউআই ইউএক্স কোর্সটি স্কিল ডেভেলপমেন্টের জন্য অনেক হেল্পফুল একটি কোর্স। আমার প্রতিটি প্রবলেমই তারা লাইভ ক্লাসেই সলভ করার চেষ্টা করেছে। এছাড়াও সাপোর্ট ইন্সট্রাক্টররাও অনেক ভালো। এসব কারণেই ইউআই ইউএক্স এর লার্নিং জার্নিটা আমার জন্য ছিল অসাধারণ।",
    },
    {
      name: "Neil Sims",
      email: "neilsims@gmail.com",
      image: "/images/Rectangle25.png",
      review_content:
        "ইউআই ইউএক্স কোর্সটি স্কিল ডেভেলপমেন্টের জন্য অনেক হেল্পফুল একটি কোর্স। আমার প্রতিটি প্রবলেমই তারা লাইভ ক্লাসেই সলভ করার চেষ্টা করেছে। এছাড়াও সাপোর্ট ইন্সট্রাক্টররাও অনেক ভালো। এসব কারণেই ইউআই ইউএক্স এর লার্নিং জার্নিটা আমার জন্য ছিল অসাধারণ।",
    },
    {
      name: "Neil Sims",
      email: "neilsims@gmail.com",
      image: "/images/Rectangle25.png",
      review_content:
        "ইউআই ইউএক্স কোর্সটি স্কিল ডেভেলপমেন্টের জন্য অনেক হেল্পফুল একটি কোর্স। আমার প্রতিটি প্রবলেমই তারা লাইভ ক্লাসেই সলভ করার চেষ্টা করেছে। এছাড়াও সাপোর্ট ইন্সট্রাক্টররাও অনেক ভালো। এসব কারণেই ইউআই ইউএক্স এর লার্নিং জার্নিটা আমার জন্য ছিল অসাধারণ।",
    },
    {
      name: "Neil Sims",
      email: "neilsims@gmail.com",
      image: "/images/Rectangle25.png",
      review_content:
        "ইউআই ইউএক্স কোর্সটি স্কিল ডেভেলপমেন্টের জন্য অনেক হেল্পফুল একটি কোর্স। আমার প্রতিটি প্রবলেমই তারা লাইভ ক্লাসেই সলভ করার চেষ্টা করেছে। এছাড়াও সাপোর্ট ইন্সট্রাক্টররাও অনেক ভালো। এসব কারণেই ইউআই ইউএক্স এর লার্নিং জার্নিটা আমার জন্য ছিল অসাধারণ।",
    },
  ];
  const settings = {
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    slidesToScroll: 1,

    arrows: true,
    dots: false,
    prevArrow: <FcPrevious />,
    nextArrow: <FcNext />,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          arrows: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className=" py-20 bg-no-repeat  bg-cover bg-[url('/images/review_bg_image.png')]">
      <div className="text-center container">
        <h1 className="text-4xl font-semibold mb-8">
          আমাদের সাকসেস স্টুডেন্টদের রিভিউস
        </h1>
        <p className="text-xl my-4 ">
          কোর্স করার পর আমাদের স্টুডেন্টদের অনুভূতি শেয়ার করে
        </p>
      </div>

      <div className="container mx-auto py-5 my-5">
        <Slider {...settings}>
          {reviewers.map((item, index) => (
            <div
              className=" border-2 p-4 px-6 bg-background rounded-2xl "
              key={index}
            >
              <div className="flex items-center mt-2.5 mb-5">
                <svg
                  className="w-6 h-6 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-6 h-6 text-yellow-300 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-6 h-6 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span> */}
              </div>
              <div>
                <p className="text-lg">
                  ইউআই ইউএক্স কোর্সটি স্কিল ডেভেলপমেন্টের জন্য অনেক হেল্পফুল
                  একটি কোর্স। আমার প্রতিটি প্রবলেমই তারা লাইভ ক্লাসেই সলভ করার
                  চেষ্টা করেছে। এছাড়াও সাপোর্ট ইন্সট্রাক্টররাও অনেক ভালো। এসব
                  কারণেই ইউআই ইউএক্স এর লার্নিং জার্নিটা আমার জন্য ছিল অসাধারণ।
                </p>
              </div>

              <div className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-20 h-20 rounded-full"
                      src="/images/Rectangle25.png"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                      Neil Sims
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <img src="/images/vector.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
