import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import img1 from '../../assets/images/gallary (1).jpg'
import img2 from '../../assets/images/gallary (2).jpg'
import img3 from '../../assets/images/gallary (3).jpg'
import img4 from '../../assets/images/gallary (4).jpg'

const Rewords = () => {
    const [focus, setFocus] = useState(false);
    return (
        <div className='my-10'>
            <h1 className='text-2xl md:text-4xl font-bold text-center my-5'>Our Gallery and Rewords</h1>
            <div className="my-5 grid grid-cols-1 sm:grid-cols-2">
                <div className="mb-3 grid grid-cols-2 gap-3 sm:mb-0">
                    <div className="relative transition-all duration-300 img-gallery w-full h-full" data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="200">
                        <img src={img1} className='rounded-lg' alt="" />
                        <div className="absolute duration-200 flex rounded-lg transition-all border-4 border-secondary items-center justify-center w-full h-full scale-0 top-0 left-0 gallery">
                            <button className='text-white btn btn-ghost'>See gallery</button>
                        </div>
                    </div>
                    <div className="relative transition-all duration-300 img-gallery w-full h-full" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="400">
                        <img src={img3} className='rounded-lg' alt="" />
                        <div className="absolute flex rounded-lg transition-all border-4 border-secondary items-center justify-center w-full h-full scale-0 top-0 left-0 gallery">
                            <button className='text-white btn btn-ghost'>See gallery</button>
                        </div>
                    </div>
                    <div className="relative transition-all duration-300 img-gallery w-full h-full" data-aos="zoom-in-right" data-aos-delay="300" data-aos-duration="600">
                        <img src={img2} className='rounded-lg' alt="" />
                        <div className="absolute flex rounded-lg transition-all border-4 border-secondary items-center justify-center w-full h-full scale-0 top-0 left-0 gallery">
                            <button className='text-white btn btn-ghost'>See gallery</button>
                        </div>
                    </div>
                    <div className="relative transition-all duration-300 img-gallery w-full h-full" data-aos="zoom-in-left" data-aos-delay="400" data-aos-duration="600">
                        <img src={img4} className='rounded-lg' alt="" />
                        <div className="absolute flex rounded-lg transition-all border-4 border-secondary items-center justify-center w-full h-full scale-0 top-0 left-0 gallery">
                            <button className='text-white btn btn-ghost'>See gallery</button>
                        </div>
                    </div>
                </div>
                <div className="sm:ml-3">
                    <div className="" data-aos="zoom-in-left" data-aos-delay="100" data-aos-duration="800">
                        <div className="stats w-full border-l-4 border border-secondary shadow mb-5">
                            <div className="stat">
                                <div className="stat-figure hidden md:block text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                                </div>
                                <div className="stat-title text-cyan-900 font-bold">A+ students</div>
                                <div className="stat-value text-2xl sm:text-4xl">
                                <CountUp start={focus ? 0 : null} end={150} duration={4} redraw={true}>
                                    <VisibilitySensor onChange={(isVisible) => {
                                            if (isVisible) { setFocus(true); }
                                        }}>
                                    </VisibilitySensor>
                                </CountUp>   
                                +</div>
                                <div className="stat-desc">↗︎ 400 (22%)</div>
                            </div>
                            
                            <div className="stat">
                                <div className="stat-figure hidden md:block text-secondary">
                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                                </div>
                                <div className="stat-title font-bold text-cyan-900">Teachers</div>
                                <div className="stat-value text-2xl sm:text-4xl"><CountUp duration={3} end={25} />+</div>
                                <div className="stat-desc">↘︎ 90 (14%)</div>
                            </div>
                        </div>
                        <div className="stats w-full border-l-4 border border-secondary shadow">
                            <div className="stat w-full">
                                <div className="stat-figure hidden md:block text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                                </div>
                                <div className="stat-title font-bold text-cyan-900">Gardgents</div>
                                <div className="stat-value text-2xl sm:text-4xl"><CountUp duration={3} end={120} />+</div>
                                <div className="stat-desc">↗︎ 400 (22%)</div>
                            </div>
                            
                            <div className="stat w-full">
                                <div className="stat-figure hidden md:block text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                                </div>
                                <div className="stat-title font-bold text-cyan-900">Students</div>
                                <div className="stat-value text-2xl sm:text-4xl"><CountUp duration={5} end={380} />+</div>
                                <div className="stat-desc">↘︎ 90 (14%)</div>
                            </div>
                        </div>
                        <button className='btn btn-secondary hidden btn-sm mt-4 md:block text-white font-bold'>Register now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rewords;