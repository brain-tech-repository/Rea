'use client';

import { useState, useEffect, useRef } from 'react';
import {
    SendHorizonal,
    Mic,
    ArrowLeft,
    ArrowUpToLine,
    ArrowDown,
    Plus,
    ArrowUp,
    User,
    FileUp,
    X,
    ArrowRight,
} from 'lucide-react';

export default function ChatBox() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [hideGreeting, setHideGreeting] = useState(false);
    const [showVoiceIcon, setShowVoiceIcon] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const messagesEndRef = useRef(null);
    const [selectedCharacter, setSelectedCharacter] = useState({
        name: 'Rea',
        img: '/rea.png',
    });

    useEffect(() => {
        if (messages.length > 0) {
            setHideGreeting(true);
        }
    }, [messages]);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isLoading]);

    const sendMessage = () => {
        if (!input.trim()) return;

        // Capture the character at the moment the message is sent
        const currentCharacter = selectedCharacter;

        // Add the user's outgoing message
        setMessages((prev) => [...prev, { text: input, type: 'outgoing' }]);
        setInput('');
        setShowVoiceIcon(true);
        setIsLoading(true);

        // Simulate a bot response
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    text: `This is a simulated response from ${currentCharacter.name}.`,
                    type: 'incoming',
                    // Associate the character with the incoming message
                    character: currentCharacter,
                },
            ]);
            setIsLoading(false);
        }, 1500);
    };
    return (
        <div className="relative flex flex-col w-full h-full px-4 py-6 bg-white">
            {/* Header */}
            <div className='mb-4'>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="text-[#0A0D14] text-sm md:text-base font-semilight">
                        Summarized question as header here
                    </div>
                </div>

                <div className="absolute top-4 right-4 flex items-center gap-1 text-[#868C98] cursor-pointer hover:opacity-80 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M6.4005 1.00134C3.96791 1.00572 2.69407 1.06544 1.87999 1.8795C1.00146 2.758 1.00146 4.17193 1.00146 6.99976C1.00146 9.82764 1.00146 11.2416 1.87999 12.12C2.75851 12.9986 4.17249 12.9986 7.00044 12.9986C9.82834 12.9986 11.2423 12.9986 12.1209 12.12C12.9349 11.306 12.9946 10.0322 12.999 7.59969" stroke="#868C98" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.6536 1.34505L8.9541 5.03438M12.6536 1.34505C12.3243 1.01538 10.1059 1.0461 9.63689 1.05278M12.6536 1.34505C12.9829 1.67472 12.9522 3.89557 12.9455 4.36507" stroke="#868C98" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm font-medium">Share</span>
                </div>
            </div>

            {/* Main Area */}
            <div className={`flex flex-col w-full max-w-3xl mx-auto transition-all duration-300 ${isInputFocused || hideGreeting ? 'justify-between h-full' : 'justify-center flex-1 '}`}>
                {!hideGreeting && (
                    <div className={`transition-all duration-300 ${isInputFocused ? 'mb-4' : ''}`}>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-[#0A0D14] text-[28px] md:text-[32px] font-semibold leading-[40px]">
                                    Hello! 👋<br />Michael Angelo
                                </h3>
                                <p className="text-[#868C98] text-[16px] leading-[24px] font-normal tracking-[-0.176px]">
                                    What can I help you with today?
                                </p>
                            </div>
                            <div className="w-[80px] h-[80px] rounded-full bg-[#E2E4E9] overflow-hidden border border-white">
                                <img src="/rea.png" alt="Rea avatar" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                )}

                <div className={`flex-1 overflow-y-auto mt-6 mb-4 px-2 space-y-4 ${isInputFocused || hideGreeting ? 'block' : 'hidden'}`}>
                    {messages.map((msg, i) => (
                        <div key={i} className={`max-w-[75%] w-fit flex gap-2 items-start ${msg.type === 'incoming' ? '' : 'self-end ml-auto'}`}>
                            {msg.type === 'incoming' && (
                                <div className="w-6 h-6 mt-1 rounded-full overflow-hidden flex-shrink-0">
                                    {/* UPDATED: Use the image from the message object itself */}
                                    <img
                                        src={msg.character?.img || 'https://placehold.co/24x24/E2E4E9/0A0D14?text=?'}
                                        alt={msg.character?.name || 'Bot avatar'}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}

                            <div className={`px-4 py-3 rounded-2xl text-sm ${msg.type === 'incoming' ? 'bg-[#F6F8FA] text-[#0A0D14]' : 'bg-orange-500 text-white'}`}>{msg.text}</div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="max-w-[75%] flex gap-2 self-start">
                            <div className="w-6 h-6 mt-1 rounded-full overflow-hidden">
                                <img
                                    src={selectedCharacter?.img || '/rea.png'}
                                    alt="Bot thinking"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="px-4 py-3 rounded-2xl text-sm italic bg-orange-100 text-[#0A0D14]">
                                {selectedCharacter?.name || 'Rea'} is thinking...
                            </div>
                        </div>
                    )}


                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="relative w-full mt-4 flex items-end gap-2 border border-gray-300 rounded-2xl px-4 py-4 bg-white">
                    <div className="relative flex-1">
                        {showTooltip ? (
                            <X className="absolute left-1 bottom-3 text-gray-500 cursor-pointer" size={20} onClick={() => { setShowTooltip(false); setShowModal(false); }} />
                        ) : (
                            <Plus className="absolute left-1 bottom-3 text-gray-500 cursor-pointer" size={20} onClick={() => { setShowTooltip(true); setHideGreeting(true); }}
                            />
                        )}

                        {showTooltip && (
                            <div className="absolute bottom-16 left-0 z-10 bg-white border border-gray-200 rounded-xl p-2 shadow-md flex flex-col items-start gap-2 w-[225px]">
                                <div className="flex items-center gap-2 w-full px-2 py-1 hover:bg-gray-100 rounded cursor-pointer" onClick={() => setShowModal(true)}>
                                    <User size={16} />
                                    <span className="text-sm">Ask a Biblical character</span>
                                    <ArrowRight size={16} />
                                </div>
                                <div className="flex items-center gap-2 w-full px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">
                                    <Plus size={16} />
                                    <span className="text-sm">Upload file</span>
                                </div>
                            </div>
                        )}

                        <textarea
                            placeholder="Type your message..."
                            className="w-full h-[70px] pl-2 pt-1 outline-none text-sm rounded-2xl resize-none placeholder:text-gray-400"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onFocus={() => {
                                setIsInputFocused(true);
                                setShowVoiceIcon(false);
                                setShowModal(false)

                            }}
                            onBlur={() => setIsInputFocused(false)}
                            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                        />
                    </div>

                    <button onClick={sendMessage} className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full">
                        {showVoiceIcon ? <Mic size={20} /> : <ArrowUp size={20} />}
                    </button>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed top-0 right-0 h-full w-[440px] bg-white z-50 shadow-lg overflow-auto py-3">
                    {/* Modal Header */}
                    <div className="flex items-center justify-between px-4 py-2 border-b">
                        {/* Left side Close Button */}


                        <span className="text-xl font-semibold text-[#0A0D14]">
                            Choose a Biblical Character
                        </span>

                        {/* Right side Close Button (Optional – mirrors left button) */}
                        <X
                            className="text-gray-500 hover:text-gray-700 cursor-pointer"
                            onClick={() => setShowModal(false)}
                        />
                    </div>

                    {/* Modal Content */}
                    <div className="p-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { name: 'Paul', img: '/Paul (1).png' },
                                { name: 'Paul', img: '/Paul (2).png' },
                                { name: 'Paul', img: '/Paul (3).png' },
                                { name: 'Paul', img: '/Paul (4).png' },
                                { name: 'Paul', img: '/Paul (5).png' },
                                { name: 'Paul', img: '/Paul (6).png' },
                                { name: 'Paul', img: '/Paul (7).png' },
                                { name: 'Paul', img: '/Paul (8).png' },
                                { name: 'Paul', img: '/Paul (10).png' },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => {
                                        setSelectedCharacter(item);
                                        setShowModal(false);
                                    }}
                                    className="rounded-lg p-4 shadow hover:shadow-md cursor-pointer flex flex-col items-center gap-2"
                                >
                                    <div className="w-full aspect-square">
                                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <span className="text-sm font-medium text-center">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            )}

        </div>
    );
}
