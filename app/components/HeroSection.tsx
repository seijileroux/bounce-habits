export default function HeroSection() {
  return (
    <div className="flex flex-col mx-16 items-center mt-[100px] gap-6">
      <span className="font-bold text-3xl text-center">
        Because you always{" "}
        <span className="text-[#dc8a78]">bounce back up!</span>
      </span>
      <p className="text-center text-sm sm:w-[430px] w-[370px]">
        Build habits that stick. Your future is built daily. Start your streak.
      </p>

      <button
        className={`block rounded-lg px-9 py-3 text-sm 
                      font-light bg-[#dc8a78] transition focus:outline-none hover:text-[#eff1f5] border-[#4c4f69] text-[#4c4f69]`}
        type="button"
      >
        Let's get started!
      </button>
    </div>
  );
}
