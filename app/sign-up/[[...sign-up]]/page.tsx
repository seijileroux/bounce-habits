import { SignUp } from "@clerk/nextjs";
import { defaultColor, defaultWhiteColor } from "@/colors";

export default function SignUnPage() {
  const gradientColor = `linear-gradient(to bottom, ${defaultColor.default}, ${defaultWhiteColor})`;
  return (
    <div
      style={{ background: gradientColor }}
      className="flex justify-center items-center flex-col gap-10 w-full h-screen"
    >
      <SignUp />
    </div>
  );
}
