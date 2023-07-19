import AboutCourse from "@/components/AboutCourse";
import ClassBox from "@/components/ClassBox";
import FreeClassBox from "@/components/FreeClassBox";
import HelpBox from "@/components/HelpBox";
import InscructorCard from "@/components/InscructorCard";
import LearingBox from "@/components/LearingBox";
import ModuleAccordion from "@/components/ModuleAccordion";
import Notice from "@/components/Notice";

import CourseReview from "@/components/CourseReview";

import SideCourseCard from "@/components/SideCourseCard";
import TitleCard from "@/components/TitleCard";
import { Shell } from "@/components/shells/shell";
import React from "react";

export default function CourseDetails() {
  return (
    <>
      <Notice />
      <Shell>
        <div className="flex flex-col lg:flex-row justify-between w-full gap-5">
          <div className="w-full lg:w-9/12  flex flex-col gap-7">
            <TitleCard />
            <ClassBox />
            <LearingBox />
            <FreeClassBox />
            <ModuleAccordion />
            <InscructorCard />
            <AboutCourse />
            <CourseReview />
            <HelpBox />
          </div>
          <div className="w-full lg:w-4/12">
            <SideCourseCard />
          </div>
        </div>
      </Shell>
    </>
  );
}
