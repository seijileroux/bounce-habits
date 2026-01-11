import React from "react";
import { defaultColor } from "@/colors";
import AppIcon from "@/app/svg/AppIcon";
import Link from "next/link";

export default function LogoAndName() {
  return (
    <div className="flex gap-2 items-center sm:justify-start justify-center">
      <Link href="/">
        <span className="text-2xl font-light flex items-center gap-2">
          {/* Icon */}
          <div className="p-2 rounded-md">
            <AppIcon />
          </div>
          {/* Name of the App */}
          <span
            style={{ color: defaultColor.default }}
            className="font-bold text-mainColor"
          >
            Bounce
          </span>
          <span className="font-light">Habits</span>
        </span>
      </Link>
    </div>
  );
}
