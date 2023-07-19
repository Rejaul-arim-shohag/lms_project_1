import Batch from "@/components/Batch";
import SingleCourse from "@/components/SingleCourse";
import ContactSection from "@/components/contactSection";
import React from "react";

export default function CoursePage() {
  return (
    <>
      <SingleCourse />
      <Batch />
      <Batch />
      <Batch />
      <ContactSection />
    </>
  );
}
