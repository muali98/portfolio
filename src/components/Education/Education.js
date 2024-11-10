import React from 'react';
import KULeuven from './KULeuven.png';
import JYU from './JYU.png';
import PIEAS from './PIEAS.png';
import RADMEP from './RADMEP.png';
import UJM from './UJM.png';
import UM from './UM.png';
import CERN from './CERN.png';
import FDC from './FDC.jpg';

const EducationCard = ({ imgSrc, altText, title, description, duration, additionalInfo, universities }) => (
    <div className="flex flex-col md:flex-row mb-6 items-start p-4 rounded-lg shadow-lg">
        <div className="md:w-1/4 flex items-center justify-start">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mr-4 md:mr-0">
                <img src={imgSrc} alt={altText} className="w-14 h-14 object-cover rounded-full" />
            </div>
        </div>
        <div className="md:w-3/4">
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <p className="text-gray-300">{description}</p>
            <p className="text-gray-400 mb-4">{duration}</p>
            {additionalInfo && <p className="text-gray-400">{additionalInfo}</p>}

            {/* Universities List for Erasmus Mundus */}
            {universities && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {universities.map((uni, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                <img src={uni.imgSrc} alt={uni.altText} className="w-8 h-8 object-cover rounded-full" />
                            </div>
                            <p className="text-gray-300">{uni.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
);

export const Education = () => {
    const universities = [
        { imgSrc: JYU, altText: "JYU", name: "University of Jyväskylä (JYU), Finland" },
        { imgSrc: KULeuven, altText: "KU Leuven", name: "Katholieke Universiteit Leuven (KU Leuven), Belgium" },
        { imgSrc: UM, altText: "University of Montpellier", name: "University of Montpellier (UM), France" },
        { imgSrc: UJM, altText: "University Jean Monnet", name: "University Jean Monnet (UJM), France" },
        { imgSrc: CERN, altText: "CERN", name: "CERN, Switzerland (Workshop: December 2024)" },
    ];

    return (
        <div className="flex justify-start py-10">
            <div className="m-10 w-[78%] bg-nav shadow-lg rounded-lg px-8 py-10 lg:px-16 ml-auto">
                <h2 className="text-4xl font-bold text-white mb-10 text-center">Education</h2>

                {/* Erasmus Mundus Program */}
                <EducationCard
                    imgSrc={RADMEP}
                    altText="RADMEP Program"
                    title="Erasmus Mundus Joint Master Degree (EMJMD RADMEP)"
                    description="Specialization: Microelectronics"
                    duration="Aug 2023 - Sep 2025"
                    universities={universities}
                />

                {/* PIEAS - Bachelor's Degree */}
                <EducationCard
                    imgSrc={PIEAS}
                    altText="PIEAS"
                    title="B.S. Electrical and Electronics Engineering"
                    description="Pakistan Institute of Engineering and Applied Sciences (PIEAS)"
                    duration="Sep 2018 - June 2022 | Distinction with 2nd position"
                    additionalInfo="CGPA: 3.74 / 4.00"
                />

                {/* FDC - Matriculation */}
                <EducationCard
                    imgSrc={FDC}
                    altText="Fazaia Degree College"
                    title="Matriculation"
                    description="Fazaia Degree College, MRF, Kamra"
                    duration="April 2013 – March 2015 | Distinction with 1st position"
                    additionalInfo="Percentage: 95%"
                />
            </div>
        </div>
    );
};

export default Education;
