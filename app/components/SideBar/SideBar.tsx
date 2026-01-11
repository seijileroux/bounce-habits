import LogoAndName from "@/app/components/LogoAndName";
import MenuSelection from "@/app/components/SideBar/MenuSelection";
import LogoutSection from "@/app/components/SideBar/LogoutSection";

export default function SideBar() {
  return (
    <div className="flex-grow p-10 flex flex-col bg-white min-h-screen ">
      <LogoAndName />
      <MenuSelection />
      <LogoutSection />
    </div>
  );
}
