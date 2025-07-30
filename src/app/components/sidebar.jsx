"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuMessageCircleMore } from "react-icons/lu";
import { RiAccountBoxLine } from "react-icons/ri";
import { PiBellSimpleDuotone } from "react-icons/pi";
import { TbCopy } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";


export default function Navbar() { // Changed function name to Navbar for consistency
    const pathname = usePathname();

    // Helper function to determine if a link is active
    const isActive = (href) => pathname === href;

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
                             <IoSettingsOutline className={`h-6 w-6 ${isActive('/setting') ? 'text-orange-500' : 'text-gray-600'}`} />
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
        </>
    );
}
