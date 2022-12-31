import React from 'react'
import Image1 from "./../Media/1.png"
// import Image2 from "./../Media/2.png"
import Resume from "./../Media/Resume.pdf"

export const Main = () => {
    return (
        <>
            <h1 className="text-red-400 text-center tracking-wide text-sm md:text-xl ml-3 lg:ml-10 mr-3 lg:mr-9">This website is under development by Muhammad Ali, he is currently extremely busy with telecom core network projects! &emsp;  Until the full website is coded, please scroll down to see the resume!</h1>
            {/* hidden md:flex */}
            <div className='relative '>
                {/* <div className="absolute my-auto"> */}
                    <div className="absolute top-24 lg:top-48 left-12 lg:left-24"> 
                    <h1 className="mb-4 text-xl font-extrabold lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">○ Electronics</h1>
                    <h1 className="mb-4 ml-24 text-xl font-extrabold lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Embedded Systems</h1>
                    <h1 className="mb-4 mt-10 text-xl font-extrabold lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">○ Core Networks</h1>
                    <h1 className="mb-4 ml-24 text-xl font-extrabold lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Telecom Cloud</h1>
                </div>
                <img src={Image1} alt="my profile1" className="" />
            </div>

            <h1 className="mt-20 mb-5 tracking-widest text-red-100 text-center text-4xl">↓ Resume ↓</h1>
            <iframe src={Resume} title="Resume" width="100%" className="h-screen" />

        </>
    )
}



