import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-[#fef7ec] to-[#fef3eb]">
      {/* Outer circular border (pink) */}
    <div className="flex justify-center items-center w-[240px] h-[240px] rounded-full border-[1px] border-orange-300  border-r-transparent">
  {/* Inner circular border */}
  <div className="flex justify-center items-center w-[220px] h-[220px] rounded-full border-[1px] border-orange-300  border-l-transparent">
    {/* Image container */}
    <div className="flex justify-center items-center w-[200px] h-[200px] rounded-full bg-white/70 border border-white backdrop-blur-[16px] overflow-hidden">
      <img
        src="/F1.png"
        alt="Welcome"
        className="w-[178px] h-[210px] pt-3"
      />
    </div>
  </div>
</div>

      {/* Heading */}
      <div className="w-[320px] mt-6">
        <h3 className="text-2xl font-medium leading-[40px] text-center">Welcome to Rea</h3>
      </div>

      {/* Subtext */}
      <div className="w-[320px] ">
        <p className="text-base leading-5 text-center">Proceed to create an account</p>
      </div>

      {/* Create Account button - more rounded */}
   <div className="mt-8">
  <button className="w-[12.5rem] h-10 bg-[#20232d] text-white flex justify-center items-center rounded">
    Create account
  </button>
</div>


      {/* Login button */}
      <div className="mt-2">
        <button className="w-[12.5rem] h-10  text-black bg-gradient-to-b from-[#fef7ec] to-[#fef3eb] hover:bg-white font-light rounded over:bg-white">
          Existing User? Log in
        </button>
      </div>
    </div>
  );
}
