import React from "react";
import Reviews from "./reviews";
import ReviewSwip from "./reviewSwip";

export default function CourseReview() {
  return (
    <div className="relative">
      <p className="text-3xl font-semibold pb-10">রিভিউ</p>
      <>
        <ReviewSwip />
      </>
    </div>
  );
}
