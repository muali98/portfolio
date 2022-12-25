import React from 'react'
import Image1 from "./../Media/1.png"
import Image2 from "./../Media/2.png"

export const Main = () => {
    return (
        <>
            <h1 className="text-red-500 text-center text-3xl">This website is under development by Muhammad Ali!</h1>
            <div className='md:flex'>
                {/* <div className='center'>
                    <h1>Electronics/Embedded Systems</h1>
                    <h1>Telecommunication Core Networks</h1>
                </div> */}
                <img src={Image1} alt="my profile1" className="bg-scroll" />

            </div>

        </>
    )
}



