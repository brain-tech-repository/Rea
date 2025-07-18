export default function Page13() {
    return (
        <>

            <div
                className="flex flex-col justify-start items-center 
          gap-[40px] md:gap-[30px] lg:gap-[32px]
          pt-[100px] md:pt-[40px] lg:pt-[100px]
          pr-[16px] md:pr-[48px] lg:pr-[329px]
          pb-[20px]
          pl-[16px] md:pl-[48px] lg:pl-[329px]
          h-min-screen  w-full rounded-[12px] border border-[#E2E4E9] bg-white overflow-hidden"
            >
                {/* upper content */}
                <div className="flex flex-row justify-between items-center w-full px-4 md:px-6">
                    {/* items1 */}
                    <div className="flex flex-col items-start gap-1">
                        <h3 className="text-[#0A0D14] font-[Inter Display] text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[32px] md:leading-[36px] lg:leading-[40px]">
                            Hello! 👋
                            <br />
                            Michael Angelo
                        </h3>
                        <p className="text-[#868C98] text-center font-inter text-[14px] md:text-[16px] font-normal leading-[22px] md:leading-[24px] tracking-[-0.176px]">
                            What can i help you with today?
                        </p>
                    </div>

                    {/* items2 */}
                    <div
                        className="flex justify-center items-center 
            w-[64px] md:w-[80px] lg:w-[108px] 
            h-[64px] md:h-[80px] lg:h-[108px] 
            pt-[8px] md:pt-[12px] lg:pt-[13.978px] 
            pr-[4px] md:pr-[6px] lg:pr-[5.789px] 
            pb-0 
            pl-[4px] md:pl-[6px] lg:pl-[5.789px] 
            rounded-full border-[0.864px] border-white bg-[#E2E4E9] backdrop-blur-[4.32px] overflow-hidden"
                    >
                        <div className="w-[56px] md:w-[72px] lg:w-[96.423px] h-[66px] md:h-[80px] lg:h-[113.568px] flex-shrink-0">
                            <img src="/rea.png" alt="description" className="w-full h-full object-cover" />
                        </div>

                    </div>
                </div>

                {/* middle content */}
                <div className="flex flex-col items-start gap-[6px] h-[216px] p-[4px] self-stretch rounded-[28px] bg-[#FEF3EB]">
                    {/* items 1 */}
                    <div className="flex items-center p-[16px] gap-[4px] self-stretch rounded-[24px] border border-[#E2E4E9] bg-[#FFF]">
                        <div className="flex flex-col justify-center items-start gap-1 flex-[1_0_0]">
                            <div className="flex h-[80px] items-start gap-[12px] self-stretch">
                                <p className="text-[#868C98] font-inter text-[14px] font-normal leading-[20px] tracking-[-0.084px]">
                                    Start asking Rea those tough questions
                                </p>
                            </div>
                            <div className="flex justify-between items-center self-stretch ">
                                <div className="flex items-center justify-center gap-[10px] p-2 rounded-full bg-[#F6F8FA]">
                                    <img
                                        className="w-4 h-4 p-[2.667px] aspect-square"
                                        src="/plus-sign.png"
                                        alt="..."
                                    />
                                </div>

                                <div className="flex items-center justify-center gap-[10px] p-2 rounded-full bg-[var(--bg-weak-100,#F6F8FA)]">
                                    R
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* items2 */}
                    <div className="flex justify-between items-center self-stretch px-1 ">

                        <div className="flex p-[10px] justify-center items-center  rounded-[24px] bg-[#FFDAC2] ">

                            <div className="flex w-[16px] h-[16px] px-[3.167px] py-[1.5px] justify-center items-center aspect-[1/1]">
                                <img src="/elements.svg" alt="..." />
                            </div>

                            <p className="text-[13px] leading-[12px] font-normal tracking-[-0.084px] text-[color:var(--orange-darker,#6E330C)] font-['Inter']">
                                You have 1,999 free tokens left
                            </p>

                        </div>
                        <div className="flex p-[10px] justify-center items-center gap-1 rounded-[10px]">
                            <p className="text-[14px] leading-[20px] font-medium tracking-[-0.084px] text-center text-[color:var(--orange-base,#F17B2C)] font-['Inter'] [font-feature-settings:'ss11'_on,'cv09'_on,'liga'_off,'calt'_off]">
                                Upgrade
                            </p>
                        </div>
                    </div>
                </div>

                {/* lower content */}
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 w-full">

                    {/* Names */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 w-full md:w-auto">
                        <div className="flex flex-col items-start gap-3 p-2 px-4 rounded-[99px] bg-[#FEF3EB]">
                            <p className="text-[#C2540A] text-sm font-medium leading-[20px] tracking-[-0.084px] font-inter">Paul</p>
                        </div>
                        <div className="flex flex-col items-start gap-3 px-4 py-2 rounded-[99px] bg-[#F6F8FA]">
                            <p className="text-[#525866] text-sm font-normal leading-[20px] tracking-[-0.084px] font-inter">Elijah</p>
                        </div>
                        <div className="flex flex-col items-start gap-3 px-4 py-2 rounded-[99px] bg-[#F6F8FA]">
                            <p className="text-[#525866] text-sm font-normal leading-[20px] tracking-[-0.084px] font-inter">King David</p>
                        </div>
                        <div className="flex flex-col items-start gap-3 px-4 py-2 rounded-[99px] bg-[#F6F8FA]">
                            <p className="text-[#525866] text-sm font-normal leading-[20px] tracking-[-0.084px] font-inter">Moses</p>
                        </div>
                        <div className="flex flex-col items-start gap-3 px-4 py-2 rounded-[99px] bg-[#F6F8FA]">
                            <p className="text-[#525866] text-sm font-normal leading-[20px] tracking-[-0.084px] font-inter">Deborah</p>
                        </div>
                        <div className="flex flex-col items-start gap-3 px-4 py-2 rounded-[99px] bg-[#F6F8FA]">
                            <p className="text-[#525866] text-sm font-normal leading-[20px] tracking-[-0.084px] font-inter">Peter</p>
                        </div>
                        <div className="flex flex-col items-start gap-3 px-4 py-2 rounded-[99px] bg-[#F6F8FA]">
                            <p className="text-[#525866] text-sm font-normal leading-[20px] tracking-[-0.084px] font-inter">Esther</p>
                        </div>
                    </div>

                    {/* Dropdown Icon */}
                    <div className="flex justify-center md:justify-start w-full md:w-auto">
                        <div className="flex px-3 py-1 rounded-[99px] bg-[#F6F8FA]">
                            <div className="flex w-[20px] h-[31px] py-[5.5px] flex-col justify-center items-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.41078 16.0062C9.73622 16.3316 10.2639 16.3316 10.5893 16.0062L15.5893 11.0062C15.9148 10.6808 15.9148 10.1531 15.5893 9.8277C15.2639 9.50226 14.7363 9.50226 14.4108 9.82769L10 14.2384L5.58934 9.82766C5.2639 9.50222 4.73627 9.50222 4.41083 9.82765C4.08539 10.1531 4.08539 10.6807 4.41082 11.0062L9.41078 16.0062Z" fill="#868C98" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.41078 10.1727C9.73622 10.4981 10.2639 10.4981 10.5893 10.1727L15.5893 5.17271C15.9148 4.84728 15.9148 4.31964 15.5893 3.9942C15.2639 3.66876 14.7363 3.66876 14.4108 3.99419L10 8.40491L5.58934 3.99416C5.2639 3.66872 4.73627 3.66872 4.41083 3.99416C4.08539 4.31959 4.08539 4.84723 4.41082 5.17267L9.41078 10.1727Z" fill="#868C98" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="flex items-center self-stretch">
                    <div className="w-[200px] h-px bg-gradient-to-r from-transparent to-[#E2E4E9]"></div>
                    <p className="text-[#0A0D14] font-inter text-[18px] font-medium leading-[24px] tracking-[-0.27px]">
                        Sample questions for Paul
                    </p>
                    <div className="w-[200px] h-px bg-gradient-to-r from-transparent to-[#E2E4E9]">     </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 ">
                    <div className="flex h-[180px] px-[20px] py-[12px] flex-col items-start gap-3 rounded-[12px] bg-[#F6F8FA] responsive-card ">
                        <div className="w-[13.333px] h-[13.333px] shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path opacity="0.4" d="M8.00407 14.0891C11.6855 14.0891 14.6707 11.2334 14.6707 7.7113C14.6707 6.4511 14.2885 5.2762 13.6291 4.2869L11.9296 5.98638C11.5806 6.33537 11.0909 6.41916 10.6099 6.50142C10.4837 6.52302 10.3581 6.5445 10.2359 6.57064C9.77594 6.66896 9.54594 6.71816 9.416 6.58824C9.28607 6.4583 9.33527 6.22832 9.4336 5.76835C9.45974 5.64608 9.4812 5.52049 9.5028 5.3943C9.58507 4.91339 9.66887 4.42363 10.0179 4.07464L11.6937 2.39872C10.6372 1.72572 9.36847 1.3335 8.00407 1.3335C4.32259 1.3335 1.3374 4.18921 1.3374 7.7113C1.3374 9.40356 2.02629 10.9412 3.15 12.0822C3.3974 12.3335 3.56259 12.6767 3.49592 13.03C3.3859 13.6076 3.13656 14.1464 2.77148 14.5955C3.73204 14.7742 4.73083 14.6133 5.5874 14.1578C5.89019 13.9968 6.04158 13.9162 6.14842 13.8999C6.25526 13.8836 6.40829 13.9123 6.71434 13.9698C7.13954 14.0496 7.5712 14.0897 8.00407 14.0891Z" fill="#868C98" />
                                <path d="M14.6707 7.7113C14.6707 11.2334 11.6855 14.0891 8.00407 14.0891C7.5712 14.0897 7.13954 14.0496 6.71434 13.9698C6.40829 13.9123 6.25526 13.8836 6.14842 13.8999C6.04158 13.9162 5.89019 13.9968 5.5874 14.1578C4.73083 14.6133 3.73204 14.7742 2.77148 14.5955C3.13656 14.1464 3.3859 13.6076 3.49592 13.03C3.56259 12.6767 3.3974 12.3335 3.15 12.0822C2.02629 10.9412 1.3374 9.40356 1.3374 7.7113C1.3374 4.18921 4.32259 1.3335 8.00407 1.3335C8.46067 1.3335 8.9066 1.37743 9.3374 1.46111" stroke="#868C98" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.9157 1.62639L14.3772 2.08797C14.7677 2.47849 14.7677 3.11166 14.3772 3.50218L11.9589 5.96596C11.7687 6.15619 11.5254 6.28443 11.2609 6.33382L9.76219 6.65916C9.52552 6.71056 9.31479 6.50044 9.36552 6.26366L9.68452 4.77344C9.73392 4.50899 9.86212 4.26566 10.0524 4.07542L12.5015 1.62639C12.8919 1.23586 13.5251 1.23586 13.9157 1.62639Z" stroke="#868C98" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.00107 8H8.00707M5.3374 8H5.34338" stroke="#868C98" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p className="text-[#525866] font-inter text-[14px] font-normal leading-[20px] tracking-[-0.084px] responsive-text">
                            What advice would you give to believers today about resolving conflicts in the church?
                        </p>
                    </div>

                    <div className="flex h-[180px] px-[20px] py-[12px] flex-col items-start gap-3 rounded-[12px] bg-[#F6F8FA] responsive-card">
                        <div className="w-[13.333px] h-[13.333px] shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path opacity="0.4" d="M8.00407 14.0891C11.6855 14.0891 14.6707 11.2334 14.6707 7.7113C14.6707 6.4511 14.2885 5.2762 13.6291 4.2869L11.9296 5.98638C11.5806 6.33537 11.0909 6.41916 10.6099 6.50142C10.4837 6.52302 10.3581 6.5445 10.2359 6.57064C9.77594 6.66896 9.54594 6.71816 9.416 6.58824C9.28607 6.4583 9.33527 6.22832 9.4336 5.76835C9.45974 5.64608 9.4812 5.52049 9.5028 5.3943C9.58507 4.91339 9.66887 4.42363 10.0179 4.07464L11.6937 2.39872C10.6372 1.72572 9.36847 1.3335 8.00407 1.3335C4.32259 1.3335 1.3374 4.18921 1.3374 7.7113C1.3374 9.40356 2.02629 10.9412 3.15 12.0822C3.3974 12.3335 3.56259 12.6767 3.49592 13.03C3.3859 13.6076 3.13656 14.1464 2.77148 14.5955C3.73204 14.7742 4.73083 14.6133 5.5874 14.1578C5.89019 13.9968 6.04158 13.9162 6.14842 13.8999C6.25526 13.8836 6.40829 13.9123 6.71434 13.9698C7.13954 14.0496 7.5712 14.0897 8.00407 14.0891Z" fill="#868C98" />
                                <path d="M14.6707 7.7113C14.6707 11.2334 11.6855 14.0891 8.00407 14.0891C7.5712 14.0897 7.13954 14.0496 6.71434 13.9698C6.40829 13.9123 6.25526 13.8836 6.14842 13.8999C6.04158 13.9162 5.89019 13.9968 5.5874 14.1578C4.73083 14.6133 3.73204 14.7742 2.77148 14.5955C3.13656 14.1464 3.3859 13.6076 3.49592 13.03C3.56259 12.6767 3.3974 12.3335 3.15 12.0822C2.02629 10.9412 1.3374 9.40356 1.3374 7.7113C1.3374 4.18921 4.32259 1.3335 8.00407 1.3335C8.46067 1.3335 8.9066 1.37743 9.3374 1.46111" stroke="#868C98" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.9157 1.62639L14.3772 2.08797C14.7677 2.47849 14.7677 3.11166 14.3772 3.50218L11.9589 5.96596C11.7687 6.15619 11.5254 6.28443 11.2609 6.33382L9.76219 6.65916C9.52552 6.71056 9.31479 6.50044 9.36552 6.26366L9.68452 4.77344C9.73392 4.50899 9.86212 4.26566 10.0524 4.07542L12.5015 1.62639C12.8919 1.23586 13.5251 1.23586 13.9157 1.62639Z" stroke="#868C98" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.00107 8H8.00707M5.3374 8H5.34338" stroke="#868C98" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p className="text-[#525866] font-inter text-[14px] font-normal leading-[20px] tracking-[-0.084px] responsive-text">
                            What advice would you give to believers today about resolving conflicts in the church?
                        </p>
                    </div>

                    <div className="flex h-[180px] px-[20px] py-[12px] flex-col items-start gap-3 rounded-[12px] bg-[#F6F8FA] responsive-card">
                        <div className="w-[13.333px] h-[13.333px] shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path opacity="0.4" d="M8.00407 14.0891C11.6855 14.0891 14.6707 11.2334 14.6707 7.7113C14.6707 6.4511 14.2885 5.2762 13.6291 4.2869L11.9296 5.98638C11.5806 6.33537 11.0909 6.41916 10.6099 6.50142C10.4837 6.52302 10.3581 6.5445 10.2359 6.57064C9.77594 6.66896 9.54594 6.71816 9.416 6.58824C9.28607 6.4583 9.33527 6.22832 9.4336 5.76835C9.45974 5.64608 9.4812 5.52049 9.5028 5.3943C9.58507 4.91339 9.66887 4.42363 10.0179 4.07464L11.6937 2.39872C10.6372 1.72572 9.36847 1.3335 8.00407 1.3335C4.32259 1.3335 1.3374 4.18921 1.3374 7.7113C1.3374 9.40356 2.02629 10.9412 3.15 12.0822C3.3974 12.3335 3.56259 12.6767 3.49592 13.03C3.3859 13.6076 3.13656 14.1464 2.77148 14.5955C3.73204 14.7742 4.73083 14.6133 5.5874 14.1578C5.89019 13.9968 6.04158 13.9162 6.14842 13.8999C6.25526 13.8836 6.40829 13.9123 6.71434 13.9698C7.13954 14.0496 7.5712 14.0897 8.00407 14.0891Z" fill="#868C98" />
                                <path d="M14.6707 7.7113C14.6707 11.2334 11.6855 14.0891 8.00407 14.0891C7.5712 14.0897 7.13954 14.0496 6.71434 13.9698C6.40829 13.9123 6.25526 13.8836 6.14842 13.8999C6.04158 13.9162 5.89019 13.9968 5.5874 14.1578C4.73083 14.6133 3.73204 14.7742 2.77148 14.5955C3.13656 14.1464 3.3859 13.6076 3.49592 13.03C3.56259 12.6767 3.3974 12.3335 3.15 12.0822C2.02629 10.9412 1.3374 9.40356 1.3374 7.7113C1.3374 4.18921 4.32259 1.3335 8.00407 1.3335C8.46067 1.3335 8.9066 1.37743 9.3374 1.46111" stroke="#868C98" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.9157 1.62639L14.3772 2.08797C14.7677 2.47849 14.7677 3.11166 14.3772 3.50218L11.9589 5.96596C11.7687 6.15619 11.5254 6.28443 11.2609 6.33382L9.76219 6.65916C9.52552 6.71056 9.31479 6.50044 9.36552 6.26366L9.68452 4.77344C9.73392 4.50899 9.86212 4.26566 10.0524 4.07542L12.5015 1.62639C12.8919 1.23586 13.5251 1.23586 13.9157 1.62639Z" stroke="#868C98" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.00107 8H8.00707M5.3374 8H5.34338" stroke="#868C98" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p className="text-[#525866] font-inter text-[14px] font-normal leading-[20px] tracking-[-0.084px] responsive-text">
                            What advice would you give to believers today about resolving conflicts in the church?
                        </p>
                    </div>

                    <div className="flex h-[180px] px-[20px] py-[12px] flex-col items-start gap-3 rounded-[12px] bg-[#F6F8FA] responsive-card">
                        <div className="w-[13.333px] h-[13.333px] shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path opacity="0.4" d="M8.00407 14.0891C11.6855 14.0891 14.6707 11.2334 14.6707 7.7113C14.6707 6.4511 14.2885 5.2762 13.6291 4.2869L11.9296 5.98638C11.5806 6.33537 11.0909 6.41916 10.6099 6.50142C10.4837 6.52302 10.3581 6.5445 10.2359 6.57064C9.77594 6.66896 9.54594 6.71816 9.416 6.58824C9.28607 6.4583 9.33527 6.22832 9.4336 5.76835C9.45974 5.64608 9.4812 5.52049 9.5028 5.3943C9.58507 4.91339 9.66887 4.42363 10.0179 4.07464L11.6937 2.39872C10.6372 1.72572 9.36847 1.3335 8.00407 1.3335C4.32259 1.3335 1.3374 4.18921 1.3374 7.7113C1.3374 9.40356 2.02629 10.9412 3.15 12.0822C3.3974 12.3335 3.56259 12.6767 3.49592 13.03C3.3859 13.6076 3.13656 14.1464 2.77148 14.5955C3.73204 14.7742 4.73083 14.6133 5.5874 14.1578C5.89019 13.9968 6.04158 13.9162 6.14842 13.8999C6.25526 13.8836 6.40829 13.9123 6.71434 13.9698C7.13954 14.0496 7.5712 14.0897 8.00407 14.0891Z" fill="#868C98" />
                                <path d="M14.6707 7.7113C14.6707 11.2334 11.6855 14.0891 8.00407 14.0891C7.5712 14.0897 7.13954 14.0496 6.71434 13.9698C6.40829 13.9123 6.25526 13.8836 6.14842 13.8999C6.04158 13.9162 5.89019 13.9968 5.5874 14.1578C4.73083 14.6133 3.73204 14.7742 2.77148 14.5955C3.13656 14.1464 3.3859 13.6076 3.49592 13.03C3.56259 12.6767 3.3974 12.3335 3.15 12.0822C2.02629 10.9412 1.3374 9.40356 1.3374 7.7113C1.3374 4.18921 4.32259 1.3335 8.00407 1.3335C8.46067 1.3335 8.9066 1.37743 9.3374 1.46111" stroke="#868C98" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.9157 1.62639L14.3772 2.08797C14.7677 2.47849 14.7677 3.11166 14.3772 3.50218L11.9589 5.96596C11.7687 6.15619 11.5254 6.28443 11.2609 6.33382L9.76219 6.65916C9.52552 6.71056 9.31479 6.50044 9.36552 6.26366L9.68452 4.77344C9.73392 4.50899 9.86212 4.26566 10.0524 4.07542L12.5015 1.62639C12.8919 1.23586 13.5251 1.23586 13.9157 1.62639Z" stroke="#868C98" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.00107 8H8.00707M5.3374 8H5.34338" stroke="#868C98" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p className="text-[#525866] font-inter text-[14px] font-normal leading-[20px] tracking-[-0.084px] responsive-text">
                            What advice would you give to believers today about resolving conflicts in the church?
                        </p>
                    </div>

                    <div className="flex h-[180px] px-[20px] py-[12px] flex-col items-start gap-3 rounded-[12px] bg-[#F6F8FA] responsive-card">
                        <div className="w-[13.333px] h-[13.333px] shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path opacity="0.4" d="M8.00407 14.0891C11.6855 14.0891 14.6707 11.2334 14.6707 7.7113C14.6707 6.4511 14.2885 5.2762 13.6291 4.2869L11.9296 5.98638C11.5806 6.33537 11.0909 6.41916 10.6099 6.50142C10.4837 6.52302 10.3581 6.5445 10.2359 6.57064C9.77594 6.66896 9.54594 6.71816 9.416 6.58824C9.28607 6.4583 9.33527 6.22832 9.4336 5.76835C9.45974 5.64608 9.4812 5.52049 9.5028 5.3943C9.58507 4.91339 9.66887 4.42363 10.0179 4.07464L11.6937 2.39872C10.6372 1.72572 9.36847 1.3335 8.00407 1.3335C4.32259 1.3335 1.3374 4.18921 1.3374 7.7113C1.3374 9.40356 2.02629 10.9412 3.15 12.0822C3.3974 12.3335 3.56259 12.6767 3.49592 13.03C3.3859 13.6076 3.13656 14.1464 2.77148 14.5955C3.73204 14.7742 4.73083 14.6133 5.5874 14.1578C5.89019 13.9968 6.04158 13.9162 6.14842 13.8999C6.25526 13.8836 6.40829 13.9123 6.71434 13.9698C7.13954 14.0496 7.5712 14.0897 8.00407 14.0891Z" fill="#868C98" />
                                <path d="M14.6707 7.7113C14.6707 11.2334 11.6855 14.0891 8.00407 14.0891C7.5712 14.0897 7.13954 14.0496 6.71434 13.9698C6.40829 13.9123 6.25526 13.8836 6.14842 13.8999C6.04158 13.9162 5.89019 13.9968 5.5874 14.1578C4.73083 14.6133 3.73204 14.7742 2.77148 14.5955C3.13656 14.1464 3.3859 13.6076 3.49592 13.03C3.56259 12.6767 3.3974 12.3335 3.15 12.0822C2.02629 10.9412 1.3374 9.40356 1.3374 7.7113C1.3374 4.18921 4.32259 1.3335 8.00407 1.3335C8.46067 1.3335 8.9066 1.37743 9.3374 1.46111" stroke="#868C98" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.9157 1.62639L14.3772 2.08797C14.7677 2.47849 14.7677 3.11166 14.3772 3.50218L11.9589 5.96596C11.7687 6.15619 11.5254 6.28443 11.2609 6.33382L9.76219 6.65916C9.52552 6.71056 9.31479 6.50044 9.36552 6.26366L9.68452 4.77344C9.73392 4.50899 9.86212 4.26566 10.0524 4.07542L12.5015 1.62639C12.8919 1.23586 13.5251 1.23586 13.9157 1.62639Z" stroke="#868C98" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.00107 8H8.00707M5.3374 8H5.34338" stroke="#868C98" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p className="text-[#525866] font-inter text-[14px] font-normal leading-[20px] tracking-[-0.084px] responsive-text">
                            What advice would you give to believers today about resolving conflicts in the church?
                        </p>
                    </div>

                    <div className="flex h-[180px] px-[20px] py-[12px] flex-col items-start gap-3 rounded-[12px] bg-[#F6F8FA] responsive-card">
                        <div className="w-[13.333px] h-[13.333px] shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path opacity="0.4" d="M8.00407 14.0891C11.6855 14.0891 14.6707 11.2334 14.6707 7.7113C14.6707 6.4511 14.2885 5.2762 13.6291 4.2869L11.9296 5.98638C11.5806 6.33537 11.0909 6.41916 10.6099 6.50142C10.4837 6.52302 10.3581 6.5445 10.2359 6.57064C9.77594 6.66896 9.54594 6.71816 9.416 6.58824C9.28607 6.4583 9.33527 6.22832 9.4336 5.76835C9.45974 5.64608 9.4812 5.52049 9.5028 5.3943C9.58507 4.91339 9.66887 4.42363 10.0179 4.07464L11.6937 2.39872C10.6372 1.72572 9.36847 1.3335 8.00407 1.3335C4.32259 1.3335 1.3374 4.18921 1.3374 7.7113C1.3374 9.40356 2.02629 10.9412 3.15 12.0822C3.3974 12.3335 3.56259 12.6767 3.49592 13.03C3.3859 13.6076 3.13656 14.1464 2.77148 14.5955C3.73204 14.7742 4.73083 14.6133 5.5874 14.1578C5.89019 13.9968 6.04158 13.9162 6.14842 13.8999C6.25526 13.8836 6.40829 13.9123 6.71434 13.9698C7.13954 14.0496 7.5712 14.0897 8.00407 14.0891Z" fill="#868C98" />
                                <path d="M14.6707 7.7113C14.6707 11.2334 11.6855 14.0891 8.00407 14.0891C7.5712 14.0897 7.13954 14.0496 6.71434 13.9698C6.40829 13.9123 6.25526 13.8836 6.14842 13.8999C6.04158 13.9162 5.89019 13.9968 5.5874 14.1578C4.73083 14.6133 3.73204 14.7742 2.77148 14.5955C3.13656 14.1464 3.3859 13.6076 3.49592 13.03C3.56259 12.6767 3.3974 12.3335 3.15 12.0822C2.02629 10.9412 1.3374 9.40356 1.3374 7.7113C1.3374 4.18921 4.32259 1.3335 8.00407 1.3335C8.46067 1.3335 8.9066 1.37743 9.3374 1.46111" stroke="#868C98" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.9157 1.62639L14.3772 2.08797C14.7677 2.47849 14.7677 3.11166 14.3772 3.50218L11.9589 5.96596C11.7687 6.15619 11.5254 6.28443 11.2609 6.33382L9.76219 6.65916C9.52552 6.71056 9.31479 6.50044 9.36552 6.26366L9.68452 4.77344C9.73392 4.50899 9.86212 4.26566 10.0524 4.07542L12.5015 1.62639C12.8919 1.23586 13.5251 1.23586 13.9157 1.62639Z" stroke="#868C98" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.00107 8H8.00707M5.3374 8H5.34338" stroke="#868C98" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p className="text-[#525866] font-inter text-[14px] font-normal leading-[20px] tracking-[-0.084px] responsive-text">
                            What advice would you give to believers today about resolving conflicts in the church?
                        </p>
                    </div>

                    <div className="flex h-[180px] px-[20px] py-[12px] flex-col items-start gap-3 rounded-[12px] bg-[#F6F8FA] responsive-card">
                        <div className="w-[13.333px] h-[13.333px] shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path opacity="0.4" d="M8.00407 14.0891C11.6855 14.0891 14.6707 11.2334 14.6707 7.7113C14.6707 6.4511 14.2885 5.2762 13.6291 4.2869L11.9296 5.98638C11.5806 6.33537 11.0909 6.41916 10.6099 6.50142C10.4837 6.52302 10.3581 6.5445 10.2359 6.57064C9.77594 6.66896 9.54594 6.71816 9.416 6.58824C9.28607 6.4583 9.33527 6.22832 9.4336 5.76835C9.45974 5.64608 9.4812 5.52049 9.5028 5.3943C9.58507 4.91339 9.66887 4.42363 10.0179 4.07464L11.6937 2.39872C10.6372 1.72572 9.36847 1.3335 8.00407 1.3335C4.32259 1.3335 1.3374 4.18921 1.3374 7.7113C1.3374 9.40356 2.02629 10.9412 3.15 12.0822C3.3974 12.3335 3.56259 12.6767 3.49592 13.03C3.3859 13.6076 3.13656 14.1464 2.77148 14.5955C3.73204 14.7742 4.73083 14.6133 5.5874 14.1578C5.89019 13.9968 6.04158 13.9162 6.14842 13.8999C6.25526 13.8836 6.40829 13.9123 6.71434 13.9698C7.13954 14.0496 7.5712 14.0897 8.00407 14.0891Z" fill="#868C98" />
                                <path d="M14.6707 7.7113C14.6707 11.2334 11.6855 14.0891 8.00407 14.0891C7.5712 14.0897 7.13954 14.0496 6.71434 13.9698C6.40829 13.9123 6.25526 13.8836 6.14842 13.8999C6.04158 13.9162 5.89019 13.9968 5.5874 14.1578C4.73083 14.6133 3.73204 14.7742 2.77148 14.5955C3.13656 14.1464 3.3859 13.6076 3.49592 13.03C3.56259 12.6767 3.3974 12.3335 3.15 12.0822C2.02629 10.9412 1.3374 9.40356 1.3374 7.7113C1.3374 4.18921 4.32259 1.3335 8.00407 1.3335C8.46067 1.3335 8.9066 1.37743 9.3374 1.46111" stroke="#868C98" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.9157 1.62639L14.3772 2.08797C14.7677 2.47849 14.7677 3.11166 14.3772 3.50218L11.9589 5.96596C11.7687 6.15619 11.5254 6.28443 11.2609 6.33382L9.76219 6.65916C9.52552 6.71056 9.31479 6.50044 9.36552 6.26366L9.68452 4.77344C9.73392 4.50899 9.86212 4.26566 10.0524 4.07542L12.5015 1.62639C12.8919 1.23586 13.5251 1.23586 13.9157 1.62639Z" stroke="#868C98" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.00107 8H8.00707M5.3374 8H5.34338" stroke="#868C98" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p className="text-[#525866] font-inter text-[14px] font-normal leading-[20px] tracking-[-0.084px] responsive-text">
                            What advice would you give to believers today about resolving conflicts in the church?
                        </p>
                    </div>

                      <div className="flex h-[180px] px-[20px] py-[12px] flex-col items-start gap-3 rounded-[12px] bg-[#F6F8FA] responsive-card">
                        <div className="w-[13.333px] h-[13.333px] shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path opacity="0.4" d="M8.00407 14.0891C11.6855 14.0891 14.6707 11.2334 14.6707 7.7113C14.6707 6.4511 14.2885 5.2762 13.6291 4.2869L11.9296 5.98638C11.5806 6.33537 11.0909 6.41916 10.6099 6.50142C10.4837 6.52302 10.3581 6.5445 10.2359 6.57064C9.77594 6.66896 9.54594 6.71816 9.416 6.58824C9.28607 6.4583 9.33527 6.22832 9.4336 5.76835C9.45974 5.64608 9.4812 5.52049 9.5028 5.3943C9.58507 4.91339 9.66887 4.42363 10.0179 4.07464L11.6937 2.39872C10.6372 1.72572 9.36847 1.3335 8.00407 1.3335C4.32259 1.3335 1.3374 4.18921 1.3374 7.7113C1.3374 9.40356 2.02629 10.9412 3.15 12.0822C3.3974 12.3335 3.56259 12.6767 3.49592 13.03C3.3859 13.6076 3.13656 14.1464 2.77148 14.5955C3.73204 14.7742 4.73083 14.6133 5.5874 14.1578C5.89019 13.9968 6.04158 13.9162 6.14842 13.8999C6.25526 13.8836 6.40829 13.9123 6.71434 13.9698C7.13954 14.0496 7.5712 14.0897 8.00407 14.0891Z" fill="#868C98" />
                                <path d="M14.6707 7.7113C14.6707 11.2334 11.6855 14.0891 8.00407 14.0891C7.5712 14.0897 7.13954 14.0496 6.71434 13.9698C6.40829 13.9123 6.25526 13.8836 6.14842 13.8999C6.04158 13.9162 5.89019 13.9968 5.5874 14.1578C4.73083 14.6133 3.73204 14.7742 2.77148 14.5955C3.13656 14.1464 3.3859 13.6076 3.49592 13.03C3.56259 12.6767 3.3974 12.3335 3.15 12.0822C2.02629 10.9412 1.3374 9.40356 1.3374 7.7113C1.3374 4.18921 4.32259 1.3335 8.00407 1.3335C8.46067 1.3335 8.9066 1.37743 9.3374 1.46111" stroke="#868C98" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.9157 1.62639L14.3772 2.08797C14.7677 2.47849 14.7677 3.11166 14.3772 3.50218L11.9589 5.96596C11.7687 6.15619 11.5254 6.28443 11.2609 6.33382L9.76219 6.65916C9.52552 6.71056 9.31479 6.50044 9.36552 6.26366L9.68452 4.77344C9.73392 4.50899 9.86212 4.26566 10.0524 4.07542L12.5015 1.62639C12.8919 1.23586 13.5251 1.23586 13.9157 1.62639Z" stroke="#868C98" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.00107 8H8.00707M5.3374 8H5.34338" stroke="#868C98" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <p className="text-[#525866] font-inter text-[14px] font-normal leading-[20px] tracking-[-0.084px] responsive-text">
                            What advice would you give to believers today about resolving conflicts in the church?
                        </p>
                    </div>
                </div>
                

              





            </div>
        </>
    );
}
