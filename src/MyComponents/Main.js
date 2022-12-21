import React from 'react'
import Image1 from "./../Media/1.png"
import Image2 from "./../Media/2.png"
import Image3 from "./../Media/3.png"
import Image4 from "./../Media/4.png"
import Image5 from "./../Media/5.png"
import Image6 from "./../Media/6.png"

export const Main = () => {
    return (
        <>

            <img src={Image2} alt="my profile1" className="bg-scroll" />
            <img src={Image1} alt="my profile2" className="" />
            <img src={Image3} alt="my profile3" className="" />
            <img src={Image4} alt="my profile4" className="object-scale-down m-10 w-[80%] center" />
            <img src={Image5} alt="my profile5" className="object-scale-down m-10 w-[80%] center" />
            <img src={Image6} alt="my profile6" className="object-scale-down m-10 w-[80%] center" />
            <div className='center'></div>
            <div className='flex'>
                {/* dots */}
                <div className="w-[20%]">

                </div>

                <div>
                    {/* Hero */}
                    <div className='md:flex'>
                        <img src={Image1} alt="my profile1" className="object-scale-down m-10 w-[80%] center" />
                        <img src={Image2} alt="my profile2" className="object-scale-down m-10 w-[80%] center" />
                        <img src={Image3} alt="my profile3" className="object-scale-down m-10 w-[80%] center" />
                        <img src={Image4} alt="my profile4" className="object-scale-down m-10 w-[80%] center" />
                        <img src={Image5} alt="my profile5" className="object-scale-down m-10 w-[80%] center" />
                        <img src={Image6} alt="my profile6" className="object-scale-down m-10 w-[80%] center" />
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



