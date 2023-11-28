import Image from "next/image";
import BasicsOfMotion from "@/components/BasicsOfMotion";
import Gestures from "@/components/Gestures";
import AnimationControls from "@/components/AnimationControls";
import ViewBaseAnimations from "@/components/ViewBaseAnimations";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <div className="bg-slate-900">
        <BasicsOfMotion />
        <Gestures />
        <AnimationControls />
        <ViewBaseAnimations />
        <ScrollAnimations />
      </div>
    </>
  );
}
