import React, { useState } from "react";
import SampleQuestions from "../components/SampleQuestions"

export default function QuizStarter() {
  
  const [isSamplesVisible, setIsSamplesVisible] = useState(false);
  const showSamples = () => setIsSamplesVisible(true);
  const hideSamples = () => setIsSamplesVisible(false);

  return (
    <div className="w-[63%] max-w-4xl px-6 rounded-2xl">
      
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