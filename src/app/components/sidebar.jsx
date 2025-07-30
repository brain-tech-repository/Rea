"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuMessageCircleMore } from "react-icons/lu";
import { RiAccountBoxLine } from "react-icons/ri";
import { PiBellSimpleDuotone } from "react-icons/pi";
import { TbCopy } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { useState } from 'react';
import General from '@/Components/General';
import Notifications from '@/Components/Notifications';
import Security from '@/Components/Security';

import DataControl from '@/Components/DataControl';

// import { IoChatbubbleEllipsesOutline, IoLayersOutline, IoSettingsOutline } from "react-icons/io5";
// import { LuSquareUser } from "react-icons/lu";
// import { FiBell } from "react-icons/fi";
// import { FaRegUserCircle } from "react-icons/fa";
import { LuCircleUserRound } from "react-icons/lu";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import Account from '@/Components/Account';

export default function Navbar() { // Changed function name to Navbar for consistency
    const pathname = usePathname();
    

    // Helper function to determine if a link is active
    const isActive = (href) => pathname === href;
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState("account");

const renderContent = () => {
    switch (activeTab) {
      case "account":
        return <Account />;
      case "general":
        return <General />;
      case "notifications":
        return <Notifications />;
       case "DataControl":
        return <DataControl />;
      case "Security":
        return <Security />;
      default:
        return <Account />;
    }
  };


    return (
        <>
            <div className="container-fluid">
                <aside className="flex flex-col items-center w-16 h-screen py-3 overflow-y-auto">
                    <nav className="flex flex-col flex-1 space-y-6">
                        {/* Logo Link */}
                       <Link href="">
                         <div className={`flex h-[44px] p-3 justify-center items-center gap-[10px] rounded-[14px] border border-[var(--stroke-soft-200,#E2E4E9)] bg-white`}>
                            <div className={`text-center font-[Gelica] text-[24.788px] font-medium leading-[41.313px] ${isActive('') ? 'text-orange-600' : 'text-[#1B1B08]'}`}>
                                R
                            </div>
                         </div>
                       </Link>

                        {/* Message Icon Link */}
                       <Link href="/pages/page14">
                         <div className={`flex p-3 justify-center items-center gap-[10px] rounded-[16px]`}>
                             <LuMessageCircleMore className={`h-6 w-6 ${isActive('/pages/page14') ? 'text-orange-500' : 'text-gray-600'}`} />
                         </div>
                       </Link>

                        {/* Account Icon Link */}
                       <Link href="/char1"> {/* Assuming this links to the same page as the logo for demonstration */}
                         <div className={`flex p-3 justify-center items-center gap-2.5 rounded-lg`}>
                             <RiAccountBoxLine className={`h-6 w-6 ${isActive('/char1') ? 'text-orange-500' : 'text-gray-600'}`} />
                         </div>
                       </Link>

                        {/* Bell Icon Link */}
                        <Link href="/message">
                          <div className={`flex p-3 justify-center items-center gap-[10px] rounded-[16px]`}>
                              <PiBellSimpleDuotone className={`h-6 w-6 ${isActive('/message') ? 'text-orange-500' : 'text-gray-600'}`} />
                          </div>
                        </Link>

                        {/* Copy Icon Link */}
                       <Link href="/chat">
                         <div className={`flex p-3 justify-center items-center gap-[10px] rounded-[16px]`}>
                             <TbCopy className={`h-6 w-6 ${isActive('/chat') ? 'text-orange-500' : 'text-gray-600'}`} />
                         </div>
                       </Link>
                    </nav>

                    <div className="flex flex-col space-y-6">
                        {/* Settings Icon Link */}
                       <Link href="/setting">
                         <div className={`flex flex-col items-start gap-[10px] px-[12px] self-stretch`}>
                             <IoSettingsOutline className={`h-6 w-6 ${isActive('/setting') ? 'text-orange-500' : 'text-gray-600'}`}    onClick={() => setShowModal(true)}/>
                         </div>
                       </Link>

                        {/* User Profile Icon Link */}
                        <Link href="">
                          <div className={`flex w-[44px] h-[44px] p-[6px] justify-center items-center gap-[10px] rounded-[14px] border border-[var(--stroke-soft-200,#E2E4E9)] bg-white`}>
                              <div className={`flex w-[24px] h-[24px] justify-center items-center shrink-0 rounded-full bg-[var(--bg-soft-200,#E2E4E9)]`}>
                                <FaRegCircleUser className={`h-5 w-6 ${isActive('') ? 'text-orange-600' : 'text-gray-600'}`} />
                              </div>
                          </div>
                        </Link>
                    </div>
                </aside>
            </div>
            {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-5xl bg-white rounded-xl border border-gray-200 shadow-md max-h-[90vh] flex flex-col overflow-hidden">
            <button
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl z-10"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            <div className="w-full h-[60px] flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-white">
              <h2 className="font-inter font-medium text-[20px] leading-[28px] text-[#0A0D14]">Settings</h2>
            </div>

            <div className="flex flex-col md:flex-row w-full flex-1 overflow-auto">
              <div className="w-full md:w-[200px] border-r border-gray-200 bg-white px-2 py-5 space-y-3">
                <div
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer ${activeTab === "account" ? "bg-[#F6F8FA]" : "hover:bg-gray-100"
                    }`}
                  onClick={() => setActiveTab("account")}
                >
                  <LuCircleUserRound className="h-5 w-5" />
                  <span className="text-sm hover:bg-blue-400 hover:text-white">Account</span>
                </div>
                <div
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer ${activeTab === "general" ? "bg-[#F6F8FA]" : "hover:bg-gray-100"
                    }`}
                  onClick={() => setActiveTab("general")}
                >
                  <IoSettingsOutline className="h-5 w-5" />
                  <span className="text-sm font-medium text-[#868C98]">General</span>
                </div>
                <div
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer ${activeTab === "notifications" ? "bg-[#F6F8FA]" : "hover:bg-gray-100"
                    }`}
                  onClick={() => setActiveTab("notifications")}
                >
                  <IoNotificationsOutline className="h-5 w-5" />
                  <span className="text-sm font-medium text-[#868C98]">Notifications</span>
                </div>



 <div
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer ${activeTab === "DataControl" ? "bg-[#F6F8FA]" : "hover:bg-gray-100"
                    }`}
                  onClick={() => setActiveTab("DataControl")}
                >
                     <GoDatabase className="h-5 w-5" />
                 <span className="text-sm font-medium text-[#868C98]">Data controls</span>
                </div>


              
        

   <div
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl cursor-pointer ${activeTab === "Security" ? "bg-[#F6F8FA]" : "hover:bg-gray-100"
                    }`}
                  onClick={() => setActiveTab("Security")}
                >
                 
                    <AiOutlineSecurityScan className="h-5 w-5" />
                  <span className="text-sm font-medium text-[#868C98]">Security</span>
                </div>



              </div>
              <div className="w-full flex-1 p-5 overflow-y-auto">{renderContent()}</div>
            </div>
          </div>
        </div>
      )}
        </>
    );
}
