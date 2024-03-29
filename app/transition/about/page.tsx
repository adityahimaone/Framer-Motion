"use client";

import Curve from "@/components/Layouts/curve";
import Inner from "@/components/Layouts/inner";
import Stairs from "@/components/Layouts/Stairs";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <Curve>
      <h1>About</h1>
      <div className="body">
        <p>
          {" "}
          Nullam mattis mattis dictum. Praesent sit amet condimentum mi, quis
          venenatis lectus. Phasellus ac ante id purus viverra hendrerit quis at
          ex. Donec vitae augue pulvinar augue dictum fermentum dapibus nec
          tellus.
        </p>
        <p>
          Phasellus cursus, ante in eleifend vehicula, leo metus mattis est, sit
          amet dignissim dui nibh in dui. Nullam dictum tortor vitae quam
          condimentum, eget tincidunt nisi tincidunt. Praesent ut erat at purus
          gravida aliquam non a purus. Pellentesque sagittis in justo vel
          venenatis.
        </p>
      </div>
    </Curve>
  );
};

export default Page;
