import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Banner() {
  return (
    <section className="py-4 px-4 md:px-8 bg-slate-500 h-[30rem]">
      <div className="container  my-10 ">
        <div className="py-4 flex flex-col col-span-4">
          <h3 className="text-4xl text-theme-foreground font-semibold md:text-3xl">
            build your websites with{" "}
          </h3>
          <p className="text-white leading-relaxed mt-3">
            Nam erat risus, sodales sit amet lobortis ut, finibus eget metus.
            Cras aliquam ante ut tortor posuere feugiat. Duis sodales nisi id
            porta lacinia.
          </p>
        </div>
        <div className="flex gap-2">
          <Button>Start Learning</Button>
          <Button variant={"outline2"}>Start Learning</Button>
        </div>
      </div>
    </section>
  );
}
