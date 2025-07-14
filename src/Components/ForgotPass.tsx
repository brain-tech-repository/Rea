import React from 'react'
import Link from 'next/link'
const ForgotPass = () => {
  return (
   <>
  <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-[376px] bg-white/90 border border-[#E2E4E9] rounded-[24px] backdrop-blur-[24px] shadow-lg p-6 sm:p-8">
        {/* Top Section */}
        <div className="space-y-4">
          <p className="text-[28px] sm:text-[32px] sm leading-[40px] text-center font-['Inter_Display'] font-medium">
            Forgot Password
          </p>
          <p className="text-[14px] leading-[20px] text-[#525866] text-center font-['Inter']">
            Thank you for signing up. To start enjoying the benefits, let's set up your account.
          </p>
        </div>

        {/* Input Section */}
        <div className="mt-8 space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-[14px] font-medium text-[#333] block font-['Inter']">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full h-[40px] px-4 rounded-[10px] border border-[#E2E4E9] shadow-[0px_1px_2px_0px_#E4E5E73D] outline-none text-[14px] font-['Inter']"
            />
          </div>

          {/* Buttons Section */}
          <div className="space-y-4">
            {/* Proceed Button */}
            <Link href="#">
              <button className="w-full h-[40px] bg-black text-white text-[14px] font-medium rounded-[10px] flex items-center justify-center gap-2 font-['Inter']">
                Proceed
              </button>
            </Link>

            {/* Google Sign Up */}
            <div className="w-full h-[40px] border border-[#E2E4E9] rounded-[10px] flex items-center justify-center gap-2 px-4">
             
              <p className="text-[14px] leading-[20px] tracking-[-0.006em] font-medium font-['Inter']">
              <Link href="/login">Back to log in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default ForgotPass