import Image from "next/image";
import BasicsOfMotion from "@/components/BasicsOfMotion";
import Gestures from "@/components/Gestures";

export default function Home() {
  return (
    <>
      <div className="bg-slate-900">
        {/* <BasicsOfMotion /> */}
        <Gestures />
      </div>
    </>
  );
}
