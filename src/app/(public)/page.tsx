import Banner from "@/components/Banner";
import Courses from "@/components/Courses";
import ContactSection from "@/components/contactSection";
import Instructors from "@/components/instructors";
import Reviews from "@/components/reviews";
import React from "react";

export default function Home() {
  return (
    <>
      <Banner />
      <Courses/>
      <Instructors/>
      <Reviews/>
      <ContactSection/>
    </>
  );
}
