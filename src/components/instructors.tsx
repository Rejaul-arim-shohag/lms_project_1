import React from "react";
export default function Instructors() {
    const InstructorList = [
        {
            title: 'William Crader',
            description: 'Marketing Instructor',
            icon: "/images/Rectangle27.png"
        },
        {
            title: 'David Lauber',
            description: 'PHP Instructor',
            icon: "/images/Rectangle25.png"
        },
        {
            title: 'David Davis',
            description: 'SMM Instructor',
            icon: "/images/Rectangle23.png"
        },
        {
            title: ' Joseph Roe',
            description: 'UI/UX Instructor',
            icon: "/images/Rectangle21.png"
        },

    ];
    return (
        <div className="my-20 py-20 bg-[url('/images/Group5720.png')]">
            <h2 className="text-4xl font-semibold text-center my-5 text-white">ক্যারিয়ার গড়াতে ইন্ডাস্ট্রি এক্সপার্টগন</h2>
            <p className="text-center my-4 pt-2 text-white">স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</p>
            <div className="container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-4 py-5 my-5">
                {InstructorList.map((instructor, index) => (
                    <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg relative">
                        <img className="w-full" src={instructor?.icon} alt="Sunset in the mountains" />
                        <div className="px-6 py-4 text-center bg-secondary w-5/6 rounded-lg absolute -bottom-7 mb-4 mx-auto w-90 h-90">
                            <div className="">
                                <div className="font-bold text-xl mb-2">{instructor?.title}</div>
                                <p className="text-gray-700 text-base">
                                    {instructor?.title}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}