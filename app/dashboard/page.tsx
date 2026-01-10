"use client";

import { SignOutButton, useUser } from "@clerk/nextjs";
import SideBar from "@/app/components/SideBar/SideBar";

export default function Dashboard() {
  const { user } = useUser();
  return (
    <div className="flex">
      <SideBar />
      <div>this is a page</div>
    </div>
  );
}
