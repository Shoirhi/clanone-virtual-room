import Image from "next/image";
import Experience from "@/components/Experience";

export const runtime = 'edge';

export default function Home() {
  return (
    <div className="relative w-full h-dvh">
      <Experience />
   </div>
  );
}
