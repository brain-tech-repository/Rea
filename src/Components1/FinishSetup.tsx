import React from 'react';
import Link from 'next/link';
const FinishSetup = () => {
  return (
    <>
      {/* Background Frame Image */}
     <div className="absolute hidden sm:block top-25  left-1/2 transform -translate-x-1/2 w-[300px] sm:w[400px] md:w-[550px] h-auto z-0">
                <img src="/frame.png" alt="Decorative Frame" className="w-full h-auto ml-19 border-0" />
            </div>

      {/* Setup Card */}
      <div className="absolute top-[190px] left-1/2 transform -translate-x-1/2 w-full max-w-[376px] border border-solid border-[#E2E4E9] bg-[#FFFFFFE0] rounded-[24px] p-[40px] backdrop-blur-[24px]">
        {/* Main Form Content */}
        <div className="w-full max-w-[296px] mx-auto flex flex-col gap-[32px]">
          {/* Heading + Description */}
          <div className="flex flex-col gap-2 text-center">
            <p className="font-medium text-[32px] leading-[40px] tracking-[0em] text-[#0A0D14] font-inter">
              Finish setup
            </p>
            <p className="font-normal text-[14px] leading-[20px] tracking-[-0.006em] text-[#525866] font-inter px-6">
              Complete your account setup to start enjoying your benefits.
            </p>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-8">
            {/* Email Input */}
            <div className="flex flex-col gap-1">
              <input
                type="email"
                className="w-full pl-3 rounded-[10px] bg-white h-[40px] border border-[#E2E4E9] shadow-[0px_1px_2px_0px_#E4E5E73D] outline-none"
                placeholder="isaac@email.com"
              />
            </div>

            {/* First + Last Name Inputs */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* First Name */}
              <div className="flex flex-col gap-px w-full">
                <label className=" text-[14px] font-medium text-[#0A0D14] block text-sm tracking-[-0.006em] font-inter" >
                  First name
                </label>
                <input
                  type="text"
                  className="w-full h-[40px] rounded-[10px] border border-[#E2E4E9] shadow-[0px_1px_2px_0px_#E4E5E73D] outline-none pt-[10px] pr-[10px] pb-[10px] pl-[12px]"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-px w-full">
                <label className=" text-[14px] font-medium text-[#0A0D14] block text-sm tracking-[-0.006em] font-inter">
                  
                  Last name
                </label>
                <input
                  type="text"
                  className="w-full h-[40px] rounded-[10px] border border-[#E2E4E9] shadow-[0px_1px_2px_0px_#E4E5E73D] outline-none pt-[10px] pr-[10px] pb-[10px] pl-[12px]"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-px w-full">
              <label className=" text-[14px] font-medium text-[#0A0D14] block text-sm tracking-[-0.006em] font-inter">
                Password
              </label>
              <input
                type="password"
                className="w-full h-[40px]  border border-[#E2E4E9] shadow-[0px_1px_2px_0px_#E4E5E73D] outline-none rounded-[10px]  pt-[10px] pr-[10px] pb-[10px] pl-[12px]"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-2">
            <button className=" px-6 text-sm  hover:bg-gray-800 transition
                    w-full h-[40px]  text-[14px] font-medium rounded-[10px] flex items-center justify-center gap-2 
    bg-[#20232D] text-[#FFFFFF] tracking-[-0.006em]  font-inter
            ">
              Start getting answers
            </button>
          <Link href="www.google.com">
            <button className="bg-transparent text-gray-700 hover:bg-gray-100 border border-transparent w-full h-[40px] gap-1 rounded-[10px] pt-[10px] pr-[20px] pb-[10px] pl-[20px]">
              Back to sign up
            </button>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinishSetup;
