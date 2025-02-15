import { CardCarousel } from "@/components/sections/cardCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-12 gap-12 flex flex-col w-app desktop:w-appLg mx-auto">
      <CardCarousel />
    </div>
  );
}
