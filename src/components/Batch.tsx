import React from "react";
import CourseCard from "./CourseCard";

export default function Batch() {
  const batch_data = [
    {
      id: 1,
      course_name: "Advance Graphic Design",
      course_fee: "4000",
      batch_no: 7,
      days_left: 42,
      thumbnail: "/images/Course1.png",
      Seats_left: 10,
      instructor_name: "Bruce M. Mann",
      instructor_image: "/images/course_instructor.png",
    },
    {
      id: 2,
      course_name: "Advance Graphic Design",
      course_fee: "4000",
      batch_no: 7,
      days_left: 42,
      thumbnail: "/images/Course2.png",
      Seats_left: 10,
      instructor_name: "Bruce M. Mann",
      instructor_image: "/images/course_instructor.png",
    },
    {
      id: 3,
      course_name: "Advance Graphic Design",
      course_fee: "4000",
      batch_no: 7,
      days_left: 42,
      thumbnail: "/images/Course3.png",
      Seats_left: 10,
      instructor_name: "Bruce M. Mann",
      instructor_image: "/public/images/course_instructor.png",
    },
  ];
  return (
    <div className="container my-20">
      <h1 className="text-4xl font-bold pb-10">আপকামিং ব্যাচ</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {batch_data.map((item, index) => (
          <CourseCard course={item} key={index} />
        ))}
      </div>
    </div>
  );
}
