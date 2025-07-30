"use client"
import React,{ useState } from 'react';

const Charpage1 = () => {
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

     <div className="w-full border-0 h-screen bg-white border rounded-[12px] p-4 mt-2 mr-2 sm:p-8 flex flex-col lg:flex-row gap-8 overflow-hidden">
      
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
        <button className="mt-6 border border-gray-300 rounded-[10px] px-4 py-2 text-[14px] text-gray-800 font-medium hover:bg-gray-100 transition">
          Suggest Characters
        </button>
      </div>

      {/* Right Grid Area */}
      <div className="flex-1 h-full overflow-y-scroll px-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 justify-items-center pb-8 pt-2">
          {characters.map((item, index) => (
            <div key={index} className="w-full max-w-[160px] space-y-2">
       <div className="aspect-square rounded-xl border border-[#E2E8F0] overflow-hidden">
  <img
    src={item.img}
    alt={item.name}
    className="w-full h-full object-cover"
    onClick={() => {
      if (item.name === "Paul") {
        setShowModal(true);
      }
    }}
  />
</div>
              <button className="text-[14px] leading-[20px] text-[#020617] font-medium font-['Inter']  ">
                {item.name}
                
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* Open Button */}
      {/* <div className="flex justify-center mt-10">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setShowModal(true)}
        >
          Open Form
        </button>
      </div> */}

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0  bg-black/50 flex items-center justify-center z-50">
          {/* Modal Content */}
          <div className="bg-white px-6 pt-3 rounded-lg w-full max-w-md shadow-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            {/* Form */}
            <h6 className="text-xl font-semibold mb-4">Paul</h6>
            <form className="space-y-4">
    <div className="w-full h-[200px] gap-[9px] rotate-0 opacity-100 ">
<img src="/Field (17).png" alt="v;b,v,." />
</div>

<div className="w-full h-[12px] rotate-0 opacity-100 bg-[#F6F8FA] font-['Inter'] font-medium text-[11px] leading-[12px] tracking-[2%] uppercase">
A LITTLE BIT ABOUT ME
</div>
<div className="w-full text-[#0A0D14] h-[160px] rotate-0 opacity-100 font-['Inter'] font-['Inter'] font-medium text-[14px] leading-[20px] tracking-[-0.6%] font-normal text-[14px] leading-[20px] tracking-[-0.6%]">
Hello, I am Paul, originally known as Saul of Tarsus. I was a devout Pharisee and a zealous persecutor of early Christians. 
However, on my journey to Damascus, I experienced a profound vision of Jesus Christ, leading to my conversion. 
Following this, I dedicated my life to spreading the teachings of Jesus. I authored several epistles, including Romans, Corinthians and Philippians, which form a significant portion of the New Testament.
</div>
<div className="w-full h-[60px] gap-[8px] rotate-0 opacity-100 ">

<div className="w-full  h-[12px] rotate-0 opacity-100">
  <p className="font-['Inter'] font-medium text-[11px] leading-[12px] tracking-[2%] uppercase text-[#868C98]">
    ASK ME ABOUT...
</p>
</div>
{/* 
<div className="w-[440px] h-[40px] gap-[8px] rotate-0 opacity-100 bg-sky-400">
  <div className="w-full h-[40px] gap-[8px] rotate-0 opacity-100 bg-purple-400 ">
  <div className="w-[260px] h-[40px] rotate-0 opacity-100">
  <p className="font-['Inter'] font-normal text-[14px] leading-[20px] text-[#0A0D14] tracking-[-0.6%]">
 Transformation, Mission, Endurance, Purpose, Change
</p>
</div>

</div>
</div> */}
<div className="w-full h-[40px] gap-[8px] rotate-0 opacity-100 flex">
<div className="w-[284px] h-[40px] rotate-0 opacity-100 text-[#0A0D14] ">
  Transformation, Mission, Endurance, Purpose, Change
</div>
<div className="w-[148px] h-[40px]  rotate-0 opacity-100 rounded-[10px] border flex ">
  <div className="w-full h-[20px] gap-[8px] rotate-0 opacity-100 pr-[4px] pl-[4px]">


  <button className="flex items-center justify-between h-[40px] text-[14px] leading-[20px] tracking-[-0.6%] font-normal font-['Inter'] text-[#0A0D14]">
  Chat with Paul
  <i className="ri-arrow-right-s-line text-[18px]"></i>
</button>

</div>
<div className="w-[20px] h-[20px] rotate-0 opacity-100 items-center  pt-[11px]">
 <img src="/arrow-right-s-line.png" alt="" />
</div>
 

</div>


</div>




</div>

<div className="w-full h-[60px] flex justify-between pt-[14px] pr-[20px] pb-[14px] pl-[20px] border-t border-t-solid  rotate-0 opacity-100  border-t border-t-[#E2E4E9]">
<img src="/Buttons [1.0] (1).png" alt="" />
<img src="Buttons [1.0] (2).png" alt="" />
</div>

         
              
            </form>
          </div>
        </div>
      )}
   </>
  );
};

export default Charpage1;
