import UserProfile from "./RightSideBar/UserProfile";
import MainStatistics from "./RightSideBar/MainStatistics";
import Calendar from "./RightSideBar/Calendar";

export default function AllHabitsRightSideBar() {
  return (
    <div className="w-[30%] bg-white flex flex-col items-center-center bg-white m-5 rounded-lg p-2">
      <UserProfile />
      <MainStatistics />
      <Calendar />
    </div>
  );
}
