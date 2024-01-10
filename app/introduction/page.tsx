import React from "react";
import BasicsOfMotion from "@/components/BasicsOfMotion";
import Gestures from "@/components/Gestures";
import AnimationControls from "@/components/AnimationControls";
import ViewBaseAnimations from "@/components/ViewBaseAnimations";
import ScrollAnimations from "@/components/ScrollAnimations";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="bg-slate-900">
      <BasicsOfMotion />
      <Gestures />
      <AnimationControls />
      <ViewBaseAnimations />
      <ScrollAnimations />
    </div>
  );
};

export default Page;
