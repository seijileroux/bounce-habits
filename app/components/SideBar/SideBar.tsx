import LogoAndName from "@/app/components/LogoAndName";
import MenuSelection from "@/app/components/SideBar/MenuSelection";

export default function SideBar() {
  return (
    <div className="border-r-2 h-screen p-10">
      <LogoAndName />
      <MenuSelection />
    </div>
  );
}
