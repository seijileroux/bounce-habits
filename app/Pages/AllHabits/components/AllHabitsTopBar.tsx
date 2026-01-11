import React from "react";
import AllHabitsSearchBar from "./AllHabitsSearchBar";
import DarkMode from "./DarkMode";

export default function AllHabitsTopBar() {
  return (
    <div className="bg-white p-5 rounded-md flex justify-between">
      <div className="flex flex-col">
        <span className="text-xl">
          <span className="font-bold">Hi There</span>
          <span className="font-light">, Boop</span>
        </span>
        <span className="font-light text-[12px] text-gray-400">
          welcome back!
        </span>
      </div>
      <div className="w-[50%] flex gap-3 justify-between">
        <AllHabitsSearchBar />
        <DarkMode />
      </div>
    </div>
  );
}
