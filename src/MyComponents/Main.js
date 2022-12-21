import React from 'react'
import Image1 from "./../Media/1.png"
import Image2 from "./../Media/2.png"

export const Main = () => {
    return (
        <>

            <img src={Image1} alt="my profile1" className="bg-scroll" />

            <div className='center'></div>
            <div className='flex'>
                {/* dots */}
                <div className="w-[20%]">

                </div>

                <div>
                    {/* Hero */}
                    <div className='md:flex'>
                        <img src={Image2} alt="my profile1" className="object-scale-down m-10 w-[80%] center" />
                        <div className='center'>
                            <h1>Electronics/Embedded Systems</h1>
                            <h1>Telecommunication Core Networks</h1>
                        </div>

                    </div>

                    {/* content */}
                    <div className='m-10'>
                        <p className="">Top-sellers in tsfsdhe past week! My test</p>
                        <p className="">Top-sellers in tsfsdhe past week!</p>
                        <p className="">Top-sellers in tsfsdhe past week!</p>
                        <p className="">Top-sellers in tsfsdhe past week!</p>
                        <p className="">Top-sellers in tsfsdhe past week!</p>
                    </div>
                </div>
            </div>
        </>
    )
}



