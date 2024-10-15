import React, { useState } from 'react';
import video from '../assets/video-1.mp4';
import image2 from '../assets/image2.jpg';
import Modal from '@mui/material/Modal';
import { Play, SquareX } from 'lucide-react';



function Video() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className='w-full h-96 md:min-h-[550px] bg-black'>
            {isPlaying ? (
                <Modal open={isPlaying} onClose={isPlaying} className='flex justify-center'>
                    <div className='relative flex flex-col items-center justify-center w-5/6  md:w-4/6 bg-transparent'>
                        <span onClick={() => setIsPlaying(false)} className='self-end p-2 text-white hover:cursor-pointer'>
                            <SquareX />
                        </span>
                        <video className='w-full' controls autoPlay>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.

                        </video>

                    </div>
                </Modal>
            ) : (
                <div className='relative flex justify-center items-center overflow-hidden w-full h-full'>
                    <img
                        src={image2}
                        className='w-full h-full opacity-70 cursor-pointer'
                        alt="Thumbnail"
                        onClick={() => setIsPlaying(true)}
                    />
                    <span onClick={() => setIsPlaying(true)} className='absolute flex justify-center items-center cursor-pointer   shadow-2xl transition-all duration-500 ease-in-out rounded-full h-24 w-24 bg-white hover:scale-110'>
                        <Play strokeWidth={2} className=' h-4 w-4 fill-black' />
                    </span>
                </div>
            )}
        </div>
    );
}

export default Video;
