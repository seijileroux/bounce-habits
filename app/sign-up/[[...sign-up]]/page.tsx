import { SignUp } from "@clerk/nextjs";

export default function SignUnPage() {
  const defaultColor = "#dc8a78";
  const gradientColor = `linear-gradient(to bottom, ${defaultColor}, #eff1f5)`;
  return (
    <div
      style={{ background: gradientColor }}
      className="flex justify-center items-center flex-col gap-10 w-full h-screen"
    >
      <SignUp />
    </div>
  );
}
