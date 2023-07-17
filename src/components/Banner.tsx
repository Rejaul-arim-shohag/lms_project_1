import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Banner() {
  return (
    <section className="px-4 md:px-8 bg-slate-500 !py-36 bg-[url('/images/Group5720.png')] ">
      <div className="container  pb-10">
        <div className="py-4 flex flex-col col-span-4 space-y-9">
          <h3 className="text-4xl text-theme-foreground font-semibold mt-10">
            দক্ষতা অর্জনের সাথে বদলে ফেলুন ক্যারিয়ার।
          </h3>
          <p className="text-white text-2xl w-1/2 leading-relaxed mt-3">
            আপনার পছন্দ অনুযায়ী লাইভ ক্লাস কোর্স বা প্রি রেকর্ড কোর্সে যুক্ত হয়ে
            নিজের ক্যারিয়ার গড়ে তুলুন।
          </p>
        </div>
        <div className="flex gap-2 ">
          <Button className="text-lg">Start Learning</Button>
          <Button className="text-lg" variant={"outline2"}>
            Start Learning
          </Button>
        </div>
      </div>
    </section>
  );
}
