import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { defaultColor } from "@/colors";
import { SignOutButton } from "@clerk/nextjs";

export default function LogoutSection() {
  const logOutObject = { name: "Log Out", icon: faRightFromBracket };
  return (
    <div
      className={`flex gap-2 items-center ml-8 p-2 mt-28 hover:text-${defaultColor} transition-all`}
    >
      <FontAwesomeIcon icon={logOutObject.icon} width={20} height={20} />
      <div>
        <SignOutButton />
      </div>
    </div>
  );
}
