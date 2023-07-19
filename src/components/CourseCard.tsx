import React from "react";
import { Button } from "./ui/button";

interface CourseCardProps {
  course: {
    id: string | number;
    course_name: string;
    course_fee: string | number;
    batch_no: string | number;
    days_left: string | number;
    thumbnail: string;
    Seats_left: string | number;
    instructor_name: string;
    instructor_image: string;
  };
}
const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a className="relative" href="#">
        <img className="rounded-t-lg w-full" src={course.thumbnail} alt="" />
        <h2 className="absolute  bottom-5 right-5 px-5 py-2 bg-amber-400 text-black	 rounded-full font-semibold">৳ ৪,০০০</h2>
      </a>

      <div className="p-5">
        <div className="flex space-x-4">
          <h2 className=" bottom-5   p-2 bg-gray-100 text-blac rounded-lg font-medium">ব্যাচ ৭</h2>
          <h2 className=" bottom-5   p-2 bg-gray-100 text-blac rounded-lg font-medium">৩৯ সিট বাকি</h2>
          <h2 className=" bottom-5  p-2 bg-gray-100 text-blac rounded-lg font-medium">৪২ দিন বাকি</h2>
        </div>
        <a href="#">
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white py-4">{course.course_name}</h5>
        </a>
        <div className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img className="w-10 h-10 rounded-full" src="/images/Rectangle25.png" alt="Neil image" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-lg font-medium text-gray-900 truncate dark:text-white">Neil Sims</p>
            </div>
            <Button className=" mr-3 bg-theme-color font-medium text-white rounded-md bg-purple-600" size="sm" variant={"default"}>
              বিস্তারিত দেখুন
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
