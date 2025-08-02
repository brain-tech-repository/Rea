'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';



export default function Page6() {

   const router = useRouter();
  return (
    <div className="min-h-screen w-full bg-[#E2E4E9] px-4 py-6 flex items-center justify-center  font-['Inter']">
      <div className="bg-white w-full max-w-[1000px] rounded-[20px] overflow-hidden flex flex-col md:flex-row">
        {/* Left image */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 sm:p-6 md:p-10">
          <img
            src="/man.png"
            alt="Subscription"
            className="w-full max-w-[400px] h-auto object-contain"
          />
        </div>

        {/* Vertical line */}
        <div className="hidden md:block w-[2px] bg-gray-300" />

        {/* Right content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center px-4 sm:px-6 py-6 gap-5">
          <p className="text-[10px] sm:text-[11px] leading-[12px] tracking-[2%] uppercase font-medium">
            one last thing
          </p>
          <h2 className="text-[22px] sm:text-[26px] md:text-[32px] leading-[30px] md:leading-[40px] font-medium mt-1">
            Go unlimited with a subscription
          </h2>

          <ul className="flex flex-col gap-3 w-full max-w-[20.5rem] mt-4 text-start text-sm font-light leading-[20px] tracking-[-0.084px]">
            {[
              "Unlimited conversations with Rea - anytime, anywhere.",
              "Get personal insights straight from Bible characters.",
              "Be the first to meet new Bible characters every week.",
              "Be part of the inner circle - explore new stories before they’re public.",
            ].map((text, index) => (
              <li key={index} className="text-[13px] sm:text-[14px] leading-[20px] flex">
                <img
                  src="/checkmark.png"
                  alt="check"
                  className="w-[14px] h-[14px] mt-1 me-2"
                />
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <h2 className="text-[22px] sm:text-[26px] md:text-[32px] leading-[30px] md:leading-[40px] font-medium">
              for $25 only
            </h2>
            <p className="text-[10px] sm:text-[11px] leading-[12px] tracking-[2%] uppercase font-medium mt-1">
              Billed Monthly
            </p>
          </div>

          <div className="flex flex-col w-full max-w-[20.5rem] mt-4 space-y-2">
            <button className="h-10 rounded-[10px] bg-[#20232D] text-white flex justify-center items-center">
              Go Unlimited now
            </button>

            <button
              className="h-10 rounded-[10px] bg-white hover:bg-[#E2E4E9]"
              onClick={() => router.push('/char1')}
            >
              Continue with a free trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
