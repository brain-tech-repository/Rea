import React from 'react'

const Chats = () => {
  return (
   <>

      <div className="min-h-screen flex flex-col lg:flex-row bg-white p-4 lg:p-10 gap-4">
      
      {/* Sidebar */}
      <div className="w-full max-w-[228px] flex flex-col items-start gap-4 ml-15 mt-15">
        <div className="flex flex-col gap-3 w-[180px]">
          {/* Icon */}
          <div className="w-16 h-16">
            <img src="/Frame 482111 (1).png" alt="bell" className="w-full h-full object-contain" />
          </div>

          {/* Heading */}
          <div className="w-full">
            <p className="font-interDisplay font-medium text-[28px] leading-10 tracking-normal">
             Chats History
               
            </p>
          </div>

          {/* Subtext */}
          <div className="w-full">
            <p className="font-inter font-normal text-base leading-6 tracking-[-0.011em] text-[#555]">
              See the full history of all your chats with Rea and biblical characters.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex justify-center items-center">
        <div className="w-1/2 max-w-[781px] bg-[#F6F8FA] p-20 h-3/4 rounded-[20px] flex flex-col items-center gap-4 text-center">
          {/* Large Bell Icon */}
          <div className="w-[100px] h-[100px] mix-blend-luminosity">
            <img src="/Frame 482111 (1).png" alt="bell" className="w-full h-full object-contain" />
          </div>

          {/* Notification Text */}
          <div className="w-full max-w-[276px]">
            <p className="font-inter font-normal text-base leading-6 tracking-[-0.011em]">
              Your chats history will show here as soon as you have them
            </p>
          </div>
        </div>
      </div>
    </div>

   </>
  )
}

export default Chats