import React from "react";
import AllHabitsRightSideBar from "./components/AllHabitsRightSideBar";
import AllHabitsTopBar from "./components/AllHabitsTopBar";
import HabitsContainer from "@/app/Pages/AllHabits/components/HabitsContainer";

export default function AllHabits() {
  return (
    <div className="w-full flex">
      <div className="w-[80%] m-5">
        <AllHabitsTopBar />
        <HabitsContainer />
      </div>

      <AllHabitsRightSideBar />
    </div>
  );
}
