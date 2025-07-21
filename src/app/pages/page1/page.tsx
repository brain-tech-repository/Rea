// Home.tsx
import Link from "next/link";
export default function Home1() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-gradient-to-b from-[#fef7ec] to-[#fef3eb] rounded-xl">
      {/* Centered circular content */}
      <div className="flex justify-center items-center w-[240px] h-[240px] rounded-full border border-orange-300 border-r-transparent">
        <div className="flex justify-center items-center w-[220px] h-[220px] rounded-full border border-orange-300 border-l-transparent">
          <div className="flex justify-center items-center w-[200px] h-[200px] rounded-full bg-white/70 border border-white backdrop-blur-[16px] overflow-hidden">
            <img src="/F1.png" alt="Welcome" className="w-[178px] h-[210px] pt-3" />
          </div>
        </div>
      </div>

      {/* Text */}
      <h3 className="mt-6 text-2xl font-medium leading-[40px] text-center w-[320px]">
        Welcome to Rea
      </h3>
      <p className="w-[320px] text-base leading-5 text-center">Proceed to create an account</p>

      {/* Buttons */}
      <div className="mt-8">
        <Link href="/ac">
        <button className="w-48 h-10 bg-[#20232d] text-white rounded">
          Create account
        </button>
        </Link>
        
      </div>
      <div className="mt-2">
        <button className="w-48 h-10 bg-gradient-to-b from-[#fef7ec] to-[#fef3eb] text-black font-light rounded">
          Existing user
        </button>
      </div>
    </div>
  );
}
