import React from "react";
import AllHabitsRightSideBar from "./components/AllHabitsRightSideBar";
import AllHabitsTopBar from "./components/AllHabitsTopBar";

export default function AllHabits() {
  return (
    <div className="w-full flex">
      <div className="w-[80%] m-5">
        <AllHabitsTopBar />
      </div>

      <AllHabitsRightSideBar />
    </div>
  );
}
