import React from 'react'
import Image1 from "./../Media/1.png"
// import Image2 from "./../Media/2.png"
import Resume from "./../Media/Resume.pdf"

export const Main = () => {
    return (
        <>
            <h1 className="text-red-400 text-center tracking-wide text-sm md:text-xl">This website is under development by Muhammad Ali, he is currently extremely busy with telecom core network projects! &emsp;  Until the full website is coded, please scroll down to see the resume!</h1>
            <div className='md:flex'>
                {/* <div className='center'>
                    <h1>Electronics/Embedded Systems</h1>
                    <h1>Telecommunication Core Networks</h1>
                </div> */}
                <img src={Image1} alt="my profile1" className="bg-scroll" />

            </div>

            <h1 className="mt-20 mb-5 tracking-widest text-red-100 text-center text-4xl">↓ Resume ↓</h1>
            <iframe src={Resume} title="Resume" width="100%" className="h-screen" />

        </>
    )
}



