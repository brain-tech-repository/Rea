"use client"
import React, { useState } from "react";

import Link from "next/link";

const Data = () => {
  const [showModal, setShowModal] = useState(false);
  const characters = [
    { name: 'Paul', img: '/Field (1).png' },
    { name: 'Elijah', img: '/Field (2).png' },
    { name: 'King David', img: '/Field (3).png' },
    { name: 'Moses', img: '/Field (4).png' },
    { name: 'Peter', img: '/Field (5).png' },
    { name: 'King Solomon', img: '/Field (6).png' },
    { name: 'Esther', img: '/Field (7).png' },
    { name: 'Mary', img: '/Field (8).png' },
    { name: 'Deborah', img: '/Field (9).png' },
    { name: 'Paul', img: '/Field (1).png' },
    { name: 'Elijah', img: '/Field (2).png' },
    { name: 'King David', img: '/Field (3).png' },
    { name: 'Moses', img: '/Field (4).png' },
    { name: 'Peter', img: '/Field (5).png' },
    { name: 'King Solomon', img: '/Field (6).png' },
    { name: 'Esther', img: '/Field (7).png' },
  ];

  return (
    <>
  
        <div className="w-full h-screen border-0 bg-white border rounded-[12px] p-4 mt-0 mr-0 sm:p-8 flex flex-col lg:flex-row gap-8 overflow-hidden">
          {/* Left Sidebar */}
          <div className="w-full lg:w-[314px] h-full flex flex-col justify-between pt-[48px] px-4">
            <div className="space-y-4">
              <div className="w-[64px] h-[64px]">
                <img src="/book.png" alt="Bible Icon" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-[28px] sm:text-[32px] font-medium leading-[40px] text-[#0A0D14] font-['Inter_Display']">
                Biblical Characters
              </h2>
              <p className="text-[16px] text-[#868C98] leading-[24px] font-normal font-['Inter']">
                View and explore the profiles of all the biblical characters, to better understand how they can help you.
              </p>
            </div>
            <button
              className="mt-6 border border-gray-300 rounded-[10px] px-4 py-2 text-[14px] text-gray-800 font-medium hover:bg-gray-100 transition"
              onClick={() => setShowModal(true)}
            >
              Suggest Characters
            </button>
          </div>

          {/* Right Grid Area */}
          <div className="flex-1 h-full overflow-y-scroll px-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 justify-items-center pb-8 pt-2">
              {characters.map((item, index) => (
                <div key={index} className="w-full max-w-[160px] space-y-2 group relative">
                  <div className="aspect-square rounded-xl border border-[#E2E8F0] overflow-hidden relative">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />

                    {/* Hover Actions (Only for Paul) */}
                    {item.name === 'Paul' && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex gap-2">
                          <Link href="pages/page14">
                          <button className="px-2 py-1 bg-white text-black rounded text-sm hover:bg-gray-200">
                            Chat
                          </button>
                          </Link>
                          <button className="px-2 py-1 bg-white text-black rounded text-sm hover:bg-gray-200">
                            Bio
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="text-[14px] leading-[20px] text-[#020617] font-medium font-['Inter'] text-center">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
 

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold mb-4 font-medium text-[20px] leading-[28px] tracking-[0%] font-['Inter_Display']">
              Suggest characters
            </h2>
            <form className="space-y-4">
              <div className="w-full h-[40px] rotate-0 opacity-100">
                <p className="font-normal text-[14px] text-[#0A0D14] leading-[20px] tracking-[-0.6%] font-['Inter'] p-1">
                  Please let us know the names of any biblical characters you would like to see 😁
                </p>
              </div>
              <div className="w-full h-[154.57178px] bg-[#FFFFFF] border border-[#E2E4E9] p-2 rounded-[10px] border border-solid p-[10px] pl-[12px] gap-[8px] opacity-100 rotate-0">
              </div>
              <button
                type="submit"
                className="w-full text-white px-4 py-2 rounded bg-[#20232D]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Data;
