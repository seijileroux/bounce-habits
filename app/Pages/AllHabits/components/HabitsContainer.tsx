import HabitsContainerTop from "./HabitsContainer/HabitsContainerTop";
import HabitsContainerMiddle from "./HabitsContainer/HabitsContainerMiddle";

export default function HabitsContainer() {
  return (
    <div className="mt-5 bg-white rounded-md p-5 h-[500px] flex flex-col gap-3">
      <HabitsContainerTop />
    </div>
  );
}
