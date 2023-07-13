import { ModeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <h2>Homepage</h2>
        <ModeToggle />
      </div>
    </>
  );
}
