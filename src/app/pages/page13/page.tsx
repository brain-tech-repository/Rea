"use client"
import React, { useState } from 'react';

// Main App Component - Provides a background and centers the content
export default function App() {
  return (
    <div className="  w-full flex items-center justify-center font-inter">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.4s ease-in-out;
          }
        `}
      </style>
      <QuizStarter />
    </div>
  );
}

// Reusable component for a single question card
function QuestionCard({ text }) {
    return (
        <div className="flex h-[180px] p-4 flex-col items-start gap-3 rounded-xl bg-[#F6F8FA] hover:shadow-md transition-shadow duration-300">
            <div className="w-4 h-4 shrink-0">
                {/* SVG Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path opacity="0.4" d="M8.00407 14.0891C11.6855 14.0891 14.6707 11.2334 14.6707 7.7113C14.6707 6.4511 14.2885 5.2762 13.6291 4.2869L11.9296 5.98638C11.5806 6.33537 11.0909 6.41916 10.6099 6.50142C10.4837 6.52302 10.3581 6.5445 10.2359 6.57064C9.77594 6.66896 9.54594 6.71816 9.416 6.58824C9.28607 6.4583 9.33527 6.22832 9.4336 5.76835C9.45974 5.64608 9.4812 5.52049 9.5028 5.3943C9.58507 4.91339 9.66887 4.42363 10.0179 4.07464L11.6937 2.39872C10.6372 1.72572 9.36847 1.3335 8.00407 1.3335C4.32259 1.3335 1.3374 4.18921 1.3374 7.7113C1.3374 9.40356 2.02629 10.9412 3.15 12.0822C3.3974 12.3335 3.56259 12.6767 3.49592 13.03C3.3859 13.6076 3.13656 14.1464 2.77148 14.5955C3.73204 14.7742 4.73083 14.6133 5.5874 14.1578C5.89019 13.9968 6.04158 13.9162 6.14842 13.8999C6.25526 13.8836 6.40829 13.9123 6.71434 13.9698C7.13954 14.0496 7.5712 14.0897 8.00407 14.0891Z" fill="#868C98" />
                    <path d="M14.6707 7.7113C14.6707 11.2334 11.6855 14.0891 8.00407 14.0891C7.5712 14.0897 7.13954 14.0496 6.71434 13.9698C6.40829 13.9123 6.25526 13.8836 6.14842 13.8999C6.04158 13.9162 5.89019 13.9968 5.5874 14.1578C4.73083 14.6133 3.73204 14.7742 2.77148 14.5955C3.13656 14.1464 3.3859 13.6076 3.49592 13.03C3.56259 12.6767 3.3974 12.3335 3.15 12.0822C2.02629 10.9412 1.3374 9.40356 1.3374 7.7113C1.3374 4.18921 4.32259 1.3335 8.00407 1.3335C8.46067 1.3335 8.9066 1.37743 9.3374 1.46111" stroke="#868C98" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.9157 1.62639L14.3772 2.08797C14.7677 2.47849 14.7677 3.11166 14.3772 3.50218L11.9589 5.96596C11.7687 6.15619 11.5254 6.28443 11.2609 6.33382L9.76219 6.65916C9.52552 6.71056 9.31479 6.50044 9.36552 6.26366L9.68452 4.77344C9.73392 4.50899 9.86212 4.26566 10.0524 4.07542L12.5015 1.62639C12.8919 1.23586 13.5251 1.23586 13.9157 1.62639Z" stroke="#868C98" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.00107 8H8.00707M5.3374 8H5.34338" stroke="#868C98" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <p className="text-[#525866] font-inter text-sm font-normal leading-5 tracking-[-0.084px]">
                {text}
            </p>
        </div>
    );
}

// Component for the sample questions section
function SampleQuestions() {
  const questions = Array(8).fill("What advice would you give to believers today about resolving conflicts in the church?");

  return (
    <div className="animate-fade-in mt-8 w-full">
      {/* Divider with Title */}
      <div className="flex items-center justify-center self-stretch my-5 gap-4">
        <div className="flex-grow h-px bg-gradient-to-r from-transparent via-gray-200 to-gray-200"></div>
        <p className="text-[#0A0D14] dark:text-white font-inter text-lg font-medium leading-6 tracking-tight whitespace-nowrap">
          Sample questions for Paul
        </p>
        <div className="flex-grow h-px bg-gradient-to-l from-transparent via-gray-200 to-gray-200"></div>
      </div>

      {/* Questions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {questions.map((q, i) => (
          <QuestionCard key={i} text={q} />
        ))}
      </div>
    </div>
  );
}

// The main component that handles the toggling logic
function QuizStarter() {
  const [isSamplesVisible, setIsSamplesVisible] = useState(false);
  const showSamples = () => setIsSamplesVisible(true);
  const hideSamples = () => setIsSamplesVisible(false);

  return (
    <div className="w-[63%] max-w-4xl px-6 rounded-2xl ">

      
      <div className="mt-8">
        {!isSamplesVisible ? (
          // Initial View: "Swipe up to see sample questions"
          <div 
            className="flex flex-row justify-center items-center gap-2 cursor-pointer" 
            onClick={showSamples}
            aria-label="Show sample questions"
            role="button"
          >
            <div className="w-[20px] h-[20px] flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M9.91072 4.49384C10.2362 4.1684 10.7638 4.1684 11.0892 4.49383L16.0893 9.49379C16.4147 9.81922 16.4147 10.3469 16.0893 10.6723C15.7638 10.9977 15.2362 10.9977 14.9108 10.6723L10.5 6.2616L6.08928 10.6723C5.76384 10.9978 5.23621 10.9978 4.91077 10.6723C4.58533 10.3469 4.58533 9.81927 4.91076 9.49384L9.91072 4.49384Z" fill="#868C98" />
                <path fillRule="evenodd" clipRule="evenodd" d="M9.91072 10.3273C10.2362 10.0019 10.7638 10.0019 11.0892 10.3273L16.0893 15.3273C16.4147 15.6527 16.4147 16.1804 16.0893 16.5058C15.7638 16.8312 15.2362 16.8312 14.9108 16.5058L10.5 12.0951L6.08928 16.5058C5.76384 16.8313 5.23621 16.8313 4.91077 16.5058C4.58533 16.1804 4.58533 15.6528 4.91076 15.3273L9.91072 10.3273Z" fill="#868C98" />
              </svg>
            </div>
            <p className="text-center text-[#868C98] font-inter text-sm leading-5 tracking-tight font-normal">
              Swipe up to see sample questions
            </p>
          </div>
        ) : (
          // Toggled View: Names and Sample Questions
          <React.Fragment>
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 w-full animate-fade-in">
              <div className="flex flex-wrap justify-center md:justify-start gap-2 w-full md:w-auto">
                {['Paul', 'Elijah', 'King David', 'Moses', 'Deborah', 'Peter', 'Esther'].map((name, index) => (
                  <div key={name} className={`flex items-center p-2 px-4 rounded-full transition-colors duration-300 ${index === 0 ? 'bg-[#FEF3EB]' : 'bg-[#F6F8FA] hover:bg-gray-200'}`}>
                    <p className={`text-sm leading-5 tracking-tight font-inter ${index === 0 ? 'text-[#C2540A] font-medium' : 'text-[#525866] font-normal'}`}>
                      {name}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center md:justify-start w-full md:w-auto mt-4 md:mt-0 cursor-pointer" onClick={hideSamples} aria-label="Hide sample questions" role="button">
                <div className="flex px-3 py-1 rounded-full bg-[#F6F8FA] hover:bg-gray-200 transition-colors duration-300">
                  <div className="flex w-5 h-8 py-1 flex-col justify-center items-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="transform rotate-180">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.41078 16.0062C9.73622 16.3316 10.2639 16.3316 10.5893 16.0062L15.5893 11.0062C15.9148 10.6808 15.9148 10.1531 15.5893 9.8277C15.2639 9.50226 14.7363 9.50226 14.4108 9.82769L10 14.2384L5.58934 9.82766C5.2639 9.50222 4.73627 9.50222 4.41083 9.82765C4.08539 10.1531 4.08539 10.6807 4.41082 11.0062L9.41078 16.0062Z" fill="#868C98" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.41078 10.1727C9.73622 10.4981 10.2639 10.4981 10.5893 10.1727L15.5893 5.17271C15.9148 4.84728 15.9148 4.31964 15.5893 3.9942C15.2639 3.66876 14.7363 3.66876 14.4108 3.99419L10 8.40491L5.58934 3.99416C5.2639 3.66872 4.73627 3.66872 4.41083 3.99416C4.08539 4.31959 4.08539 4.84723 4.41082 5.17267L9.41078 10.1727Z" fill="#868C98" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <SampleQuestions />
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
