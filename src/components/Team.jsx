import React from 'react'

import employeeImage1 from '../assets/employee-1.jpg';
import employeeImage2 from '../assets/employee-2.jpg';
import employeeImage3 from '../assets/employee-3.jpg';

import { Instagram, Linkedin, Twitter } from 'lucide-react';

function Team() {

    return (
            <div className='py-28 px-10 min-h-screen bg-black flex flex-col gap-20  md:px-20'>
                <h1 className='text-5xl text-white font-semibold'>
                    Meet our <br /> amazing team
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-20 text-white overflow-hidden  '>
                    <div className=' space-y-4'>
                        <img src={employeeImage1} alt="employeeImage1" className='h-[450px] w-[450px] object-cover' />
                        <div className=' text-white'>
                            <h2 className='text-2xl font-semibold'>Johan Johnson</h2>
                            <h3 className=' font-light  '>Architect</h3>
                            <div className=' flex space-x-4 mt-2'>
                                <Instagram className='w-4 h-4 hover:cursor-pointer' />
                                <Linkedin className='w-4 h-4 hover:cursor-pointer' />
                                <Twitter className='w-4 h-4 hover:cursor-pointer' />
                            </div>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <img src={employeeImage2} alt="employeeImage1" className='h-[450px] w-[450px] object-cover' />
                        <div className=' text-white'>
                            <h2 className='text-2xl font-semibold'>Maria Peterson</h2>
                            <h3 className=' font-light  '>Patner</h3>
                            <div className=' flex space-x-4 mt-2'>
                                <Instagram className='w-4 h-4 hover:cursor-pointer' />
                                <Linkedin className='w-4 h-4 hover:cursor-pointer' />
                                <Twitter className='w-4 h-4 hover:cursor-pointer' />
                            </div>
                        </div>
                    </div>
                    <div className='space-y-4'>
                        <img src={employeeImage3} alt="employeeImage1" className='h-[450px] w-[450px] object-cover' />
                        <div className='text-white'>
                            <h2 className='text-2xl font-semibold'>Amy jackson</h2>
                            <h3 className=' font-light  '>Patner</h3>
                            <div className=' flex space-x-4 mt-2'>
                                <Instagram className='w-4 h-4 hover:cursor-pointer' />
                                <Linkedin className='w-4 h-4 hover:cursor-pointer' />
                                <Twitter className='w-4 h-4 hover:cursor-pointer' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
    )
}

export default Team