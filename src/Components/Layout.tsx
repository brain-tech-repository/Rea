"use client";
import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex flex-wrap min-h-screen">
                {/* Sidebar */}
                <div className="w-full sm:w-[65px] border border-gray-300">
                    <div className="flex flex-col justify-between h-screen p-2 ">
                        {/* Top Gray Box */}
                        <div className="w-[44px] h-[270px] gap-[10px]  pt-3">

                            <div className="w-[44px]   h-[44px] border border-[#E2E4E9] gap-[10px]  border border-solid rounded-[14px] opacity-100 rotate-0">
                      
                                    <p className="text-[24.79px] font-medium leading-[41.31px] text-center no-underline text-[#1B1B08]">
                                        R
                                    </p>
                           
                            </div>
                            <div className="w-[44px]  mt-1  h-[44px] gap-[10px] p-[12px]  opacity-100 rotate-0">
                                <Link href="/char1">
                                    <img src="/bubble.png" alt="error" className=" hover:bg-blue-700" />
                                </Link>
                            </div>
                            <div className="w-[44px]  mt-1 h-[44px] gap-[10px] p-[12px]  opacity-100 rotate-0">
 <Link href="/char2">
                                    <img src="/user.png" alt="error" className=" hover:bg-blue-700"/>
                                </Link>
                            </div>
                            <div className="w-[44px]  h-[44px]  mt-1 gap-[10px] p-[12px]  opacity-100 rotate-0">
 <Link href="/message">
                                    <img src="/notification-03.png" alt="error" className=" hover:bg-blue-700" />
                                </Link>
                            </div>
                            <div className="w-[44px]    mt-1  h-[44px] gap-[10px] p-[12px] opacity-100 rotate-0">
 <Link href="/chat">
                                    <img src="/playlist-01 (1).png" alt="error" className=" hover:bg-blue-700"/>
                                </Link>
                            </div>

                        </div>

                        {/* Bottom Pink Box */}
                        <div className="w-[44px] h-[108px] gap-[10px] ">
                                  <div className="w-[44px]    mt-1  h-[44px] gap-[10px] p-[12px] opacity-100 rotate-0">
 <Link href="/profile">
                                    <img src="/settings-01.png" alt="error" />
                                </Link>
                            </div>
                          <div className="w-[44px] mt-1  h-[44px] border border-[#E2E4E9] p-[12px] gap-[10px]  border border-solid rounded-[14px] opacity-100 rotate-0">
                           
                                 <Link href="/profile">
                                    <img src="/nav-l-icon.png" alt="error" />
                                </Link>
                          
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full sm:flex-1 ">
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;
