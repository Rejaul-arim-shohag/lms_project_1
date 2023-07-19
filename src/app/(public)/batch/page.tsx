import SingleCourse from "@/components/SingleCourse";
import Batch from "@/components/Batch";
import React from "react";
import ContactSection from "@/components/contactSection";

export default function BatchPage() {
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
