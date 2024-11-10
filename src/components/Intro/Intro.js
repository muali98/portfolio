import React from 'react';
import JYU from './CV.pdf';

export const Intro = () => {
    return (
        <div className="flex flex-col items-center my-40 lg:items-end lg:mx-20">
            <div className="w-full lg:w-3/4 text-center lg:text-left mb-6">
                <p className="text-lg font-semibold text-red-600">
                    The website is under development. Until the website is finalized, please see the CV below.
                </p>
            </div>
            <div className="w-full lg:w-3/4">
                <iframe
                    src={JYU}
                    title="CV"
                    className="w-full h-screen"
                />
            </div>
        </div>
    );
};
