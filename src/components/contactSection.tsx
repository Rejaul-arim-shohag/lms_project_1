import { Button } from "./ui/button";

export default function ContactSection() {
    return (
        <div className="ContactSection py-20 ">
            <div className="container mx-auto flex flex-row items-center justify-between">
                <div>
                    <h1 className="text-4xl text-white	">কোর্স সম্পর্কিত যেকোনো তথ্যের জন্য যোগাযোগ করুন</h1>
                    <h4 className="text-2xl text-white my-3">সকাল ৮ টা থেকে রাত ৮ টা পর্যন্ত</h4>
                </div>
                <Button className="secondary p-7 bg-white text-black text-xl ">যোগাযোগ করুন</Button>
            </div>
        </div>
    )
}