import React from 'react';
import KULeuven from './KULeuven.png';
import JYU from './JYU.png';
import PIEAS from './PIEAS.png';
import RADMEP from './RADMEP.png';
import UJM from './UJM.png';
import UM from './UM.png';
import FDC_risalpur from './FDC_risalpur.png';
import FDC_kamra from './FDC_kamra.png';

const educationDetails = [
  {
    title: "Erasmus Mundus Joint Master Degree in Microelectronics, Photonics and Radiation effects on them (EMJMD RADMEP)",
    duration: "Aug-2023 - Sep-2025",
    universities: [
      { name: "University of Jyväskylä (JYU), Finland", duration: "Aug 2023 – Jan 2024", logo: JYU },
      { name: "Katholieke Universiteit Leuven (KU Leuven), Belgium", duration: "Jan 2024 – July 2024", logo: KULeuven },
      { name: "University of Montpellier (UM), France", duration: "Aug 2024 – Jan 2025", logo: UM },
      { name: "University Jean Monnet (UJM), France", duration: "Aug 2023 – Aug 2025", logo: UJM },
    ],
    specialization: "Microelectronics",
    logo: RADMEP,
  },
  {
    title: "B.S. Electrical and Electronics Engineering",
    duration: "Sep 2018 - June 2022",
    universities: [
      { name: "Pakistan Institute of Engineering and Applied Sciences (PIEAS)", logo: PIEAS },
    ],
    specialization: "Electronics",
    distinction: "Graduation with 2nd distinction",
  },
  {
    title: "Colleges & Schools",
    universities: [
      { name: "Fazaia Degree College, Risalpur", duration: "Jul 2015 – May 2017", logo: FDC_risalpur },
      { name: "Fazaia Degree College, MRF, Kamra", duration: "Mar 2013 – Mar 2015", logo: FDC_kamra },
    ],
  },
];

export const Educationjunk = () => {
    return (
      <div className="relative bg-nav flex justify-center items-center py-11 top-10 text-gray-100">
        {/* Top Shadow */}
        <div className="absolute top-5 left-0 w-full h-10 bg-gradient-to-b from-black to-transparent drop-shadow-[0_0_2px_rgba(0,0,100,0.4)]"></div>

        
        <div className="w-full sm:px-2 lg:w-[82%] lg:ml-auto space-y-8 z-10">
          {educationDetails.map((education, index) => (
            <div key={index} className="p-4 sm:p-3 rounded-lg shadow-[0_8px_16px_rgba(0,0,0,0.95)] space-y-6">
              {/* Section Title */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-base lg:text-xl font-bold">
                    {index + 1} - {education.title}
                  </h2>
                  {education.duration && (
                    <p className="text-sm lg:text-base text-gray-400 mt-1">• {education.duration}</p>
                  )}
                  {education.specialization && (
                    <p className="text-sm lg:text-base text-gray-300 mt-2">
                      • <strong>Specialization:</strong> {education.specialization}
                    </p>
                  )}
                  {education.distinction && (
                    <p className="text-sm lg:text-base text-gray-300 mt-2">
                      •  <strong>Distinction:</strong> {education.distinction}
                    </p>
                  )}
                </div>
                {/* Optional Logo */}
                {education.logo && (
                  <div className="w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0">
                    <img src={education.logo} alt={`${education.title} Logo`} className="object-contain w-full h-full" />
                  </div>
                )}
              </div>
    
              {/* Universities List */}
              {education.universities && (
                <div>
                  <p className="text-sm lg:text-base text-gray-400 font-semibold">Universities:</p>
                  <ul className="mt-2 space-y-4">
                    {education.universities.map((university, idx) => (
                      <li key={idx} className="flex justify-between items-center text-sm lg:text-base">
                        <div>
                          <span className="font-medium">{idx + 1}. {university.name}</span>
                          {university.duration && (
                            <p className="text-gray-400 text-xs lg:text-sm">{university.duration}</p>
                          )}
                        </div>
                        <div className="w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0">
                          <img src={university.logo} alt={university.name} className="object-contain w-full h-full" />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Bottom Shadow */}
        <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-neutral-900 to-transparent"></div>
      </div>
    );
  };
  