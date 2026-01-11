import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AllHabitsSearchBar() {
  return (
    <div className="w-[75%]">
      <div className="flex gap-3 items-center p-3 bg-slate-50 rounded-3xl">
        <FontAwesomeIcon
          icon={faSearch}
          width={20}
          height={20}
          className="text-gray-300"
        />
        <input
          type="text"
          placeholder="Search..."
          className={`outline-none text-[14px] font-light bg-slate-50 w-full`}
        />
      </div>
    </div>
  );
}
