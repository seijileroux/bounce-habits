import UserProfile from "./RightSideBar/UserProfile";
import MainStatistics from "./RightSideBar/MainStatistics";
import Calendar from "./RightSideBar/Calendar";

export default function AllHabitsRightSideBar() {
  return (
    <div className="w-[30%] bg-white flex flex-col intems-center-center">
      <UserProfile />
      <MainStatistics />
      <Calendar />
    </div>
  );
}
