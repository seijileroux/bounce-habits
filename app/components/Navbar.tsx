"use client";

import AppIcon from "@/app/svg/AppIcon";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  const { userId } = useAuth();
  const defaultWhiteColor = "#eff1f5";
  const defaultTextColor = "#4c4f69";
  const defaultBgColor = "#dc8a78";
  const backgroundColorObject = {
    backgroundColor: defaultBgColor,
  };
  const colorObject = {
    color: defaultTextColor,
    backgroundColor: defaultBgColor,
  };
  return (
    <header>
      <div className="p-8 px-20">
        <div className="sm:flex sm:intems-center sm:justify-between">
          <div className="text-center sm:text-left mb-7 sm:mb-0">
            {/* Icon + Name of the App */}
            <div className="flex gap-2 items-center sm:justify-start justify-center">
              <span className="text-2xl font-light flex items-center gap-2">
                {/* Icon */}
                <div className="p-2 rounded-md">
                  <AppIcon />
                </div>
                {/* Name of the App */}
                <span
                  style={{ color: "#4c4f69" }}
                  className="font-bold text-mainColor"
                >
                  Bounce
                </span>
                <span style={{ color: "#4c4f69" }} className="font-light">
                  Habits
                </span>
              </span>
            </div>
          </div>
          {/*  */}
          {/* The buttons */}
          <div>
            {userId ? (
              <Link href={"/dashboard"}>
                <button
                  style={backgroundColorObject}
                  className={`block rounded-lg px-9 py-3 text-sm font-medium text-white transition`}
                  type="button"
                >
                  Dashboard
                </button>
              </Link>
            ) : (
              <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                <Link href={"/sign-in"}>
                  <button
                    style={backgroundColorObject}
                    className={`block sm:w-32 w-full rounded-lg px-9 py-3 text-sm 
                      font-medium transition focus:outline-none hover:bg-[#4c4f69] hover:text-[#eff1f5] border-[#4c4f69] text-[#4c4f69]`}
                    type="button"
                  >
                    Sign In
                  </button>
                </Link>
                <Link href={"/sign-up"}>
                  <button
                    className={`block sm:w-32 w-full border rounded-lg px-9 py-3 text-sm 
                      font-medium transition focus:outline-none hover:bg-[#4c4f69] hover:text-[#eff1f5] border-[#4c4f69] text-[#4c4f69]`}
                    type="button"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
