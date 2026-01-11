import AllHabitsRightSideBar from "./components/AllHabitsRightSideBar";
import AllHabitsTopBar from "./components/AllHabitsTopBar";
import HabitsContainer from "@/app/Pages/AllHabits/components/HabitsContainer";
import HabitsCompleted from "./components/HabitsCompleted";

export default function AllHabits() {
  return (
    <div className="w-full flex">
      <div className="w-[70%] m-5">
        <AllHabitsTopBar />
        <HabitsContainer />
        <HabitsCompleted />
      </div>

      <AllHabitsRightSideBar />
    </div>
  );
}
