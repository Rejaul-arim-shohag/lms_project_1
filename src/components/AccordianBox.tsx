import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AiFillPlayCircle } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";

export function AccordionBox() {
  return (
    <Accordion type="single" className="w-full pt-10  ">
      <AccordionItem
        value="item-1"
        className="border-2 text-lg p-2 !px-4 rounded-xl mb-5"
      >
        <AccordionTrigger>
          <div className="flex">
            <p className="text-lg font-semibold pb-2">ফটোশপের সাথে পরিচয় </p>
            <div className="flex items-center !text-sm">
              <div className="flex items-center">
                <GoDotFill className="text-slate-200" />
                <p>১৬ টি মডিউল</p>
              </div>
              <div className="flex items-center">
                <GoDotFill className="text-slate-200" />
                <p>১৬ টি মডিউল</p>
              </div>
              <div className="flex items-center">
                <GoDotFill className="text-slate-200" />
                <p>১৬ টি মডিউল</p>
              </div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="border-t-2 flex justify-between  py-3 ">
            <div className="flex items-center gap-3 text-lg">
              <div>
                <AiFillPlayCircle className="w-7 h-7" />
              </div>
              <p>Introduction</p>
              <p className="text-sm px-3 bg-slate-200 rounded-xl">লাইভ ক্লাস</p>
              <p>লাইভ ক্লাস</p>
            </div>
            <div></div>
          </div>
          <div className="border-t-2 flex justify-between  py-3 ">
            <div className="flex items-center gap-3 text-lg">
              <div>
                <AiFillPlayCircle className="w-7 h-7" />
              </div>
              <p>Introduction</p>
              <p className="text-sm px-3 bg-slate-200 rounded-xl">লাইভ ক্লাস</p>
              <p>লাইভ ক্লাস</p>
            </div>
            <div></div>
          </div>
          <div className="border-t-2 flex justify-between  py-3 ">
            <div className="flex items-center gap-3 text-lg">
              <div>
                <AiFillPlayCircle className="w-7 h-7" />
              </div>
              <p>Introduction</p>
              <p className="text-sm px-3 bg-slate-200 rounded-xl">লাইভ ক্লাস</p>
            </div>
            <div></div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-4"
        className="border-2 text-lg p-2 !px-4 rounded-xl mb-5"
      >
        <AccordionTrigger>
          <div className="flex">
            <p className="text-lg font-semibold pb-2">ফটোশপের সাথে পরিচয় </p>
            <div className="flex items-center !text-sm">
              <div className="flex items-center">
                <GoDotFill className="text-slate-200" />
                <p>১৬ টি মডিউল</p>
              </div>
              <div className="flex items-center">
                <GoDotFill className="text-slate-200" />
                <p>১৬ টি মডিউল</p>
              </div>
              <div className="flex items-center">
                <GoDotFill className="text-slate-200" />
                <p>১৬ টি মডিউল</p>
              </div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="border-t-2 flex justify-between  py-3 ">
            <div className="flex items-center gap-3 text-lg">
              <div>
                <AiFillPlayCircle className="w-7 h-7" />
              </div>
              <p>Introduction</p>
              <p className="text-sm px-3 bg-slate-200 rounded-xl">লাইভ ক্লাস</p>
              <p>লাইভ ক্লাস</p>
            </div>
            <div></div>
          </div>
          <div className="border-t-2 flex justify-between  py-3 ">
            <div className="flex items-center gap-3 text-lg">
              <div>
                <AiFillPlayCircle className="w-7 h-7" />
              </div>
              <p>Introduction</p>
              <p className="text-sm px-3 bg-slate-200 rounded-xl">লাইভ ক্লাস</p>
              <p>লাইভ ক্লাস</p>
            </div>
            <div></div>
          </div>
          <div className="border-t-2 flex justify-between  py-3 ">
            <div className="flex items-center gap-3 text-lg">
              <div>
                <AiFillPlayCircle className="w-7 h-7" />
              </div>
              <p>Introduction</p>
              <p className="text-sm px-3 bg-slate-200 rounded-xl">লাইভ ক্লাস</p>
            </div>
            <div></div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className="border-2 text-lg p-2 !px-4 rounded-xl mb-5"
      >
        <AccordionTrigger>
          <div className="flex">
            <p className="text-lg font-semibold pb-2">ফটোশপের সাথে পরিচয় </p>
            <div className="flex items-center !text-sm">
              <div className="flex items-center">
                <GoDotFill className="text-slate-200" />
                <p>১৬ টি মডিউল</p>
              </div>
              <div className="flex items-center">
                <GoDotFill className="text-slate-200" />
                <p>১৬ টি মডিউল</p>
              </div>
              <div className="flex items-center">
                <GoDotFill className="text-slate-200" />
                <p>১৬ টি মডিউল</p>
              </div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="border-t-2 flex justify-between  py-3 ">
            <div className="flex items-center gap-3 text-lg">
              <div>
                <AiFillPlayCircle className="w-7 h-7" />
              </div>
              <p>Introduction</p>
              <p className="text-sm px-3 bg-slate-200 rounded-xl">লাইভ ক্লাস</p>
              <p>লাইভ ক্লাস</p>
            </div>
            <div></div>
          </div>
          <div className="border-t-2 flex justify-between  py-3 ">
            <div className="flex items-center gap-3 text-lg">
              <div>
                <AiFillPlayCircle className="w-7 h-7" />
              </div>
              <p>Introduction</p>
              <p className="text-sm px-3 bg-slate-200 rounded-xl">লাইভ ক্লাস</p>
              <p>লাইভ ক্লাস</p>
            </div>
            <div></div>
          </div>
          <div className="border-t-2 flex justify-between  py-3 ">
            <div className="flex items-center gap-3 text-lg">
              <div>
                <AiFillPlayCircle className="w-7 h-7" />
              </div>
              <p>Introduction</p>
              <p className="text-sm px-3 bg-slate-200 rounded-xl">লাইভ ক্লাস</p>
            </div>
            <div></div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
