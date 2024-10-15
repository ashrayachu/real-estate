

import { useState, useEffect } from 'react'


import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/iamge3.jpg';

import video1 from '../assets/video1image.jpg';
import video2 from '../assets/video2image.jpg';
import video3 from '../assets/video3image.jpg';


import video from '../assets/video-1.mp4';
import { Play, SquareX } from 'lucide-react';





import { MoveRight, MoveLeft, Facebook, Twitter, Instagram } from 'lucide-react'
import { Modal } from '@mui/material';


const slides = [
  {
    id: 1,
    image: image1,
    title: "Simple Design",
    description1: 'Simple cluster home',
    description2: 'Built with the finest materials such as pine and spruce, the Kjøvik house is a modern spin on the classic Norwegian design of a traditional log house.',
    videoImage: video1
  },  
  {
    id: 2,
    image: image2,
    title: "Modern Home",
    description1: 'Clean interior design',
    description2: 'We created both a modern exterior and interior for your future home. This house includes a neat interior design for those interested in minimalism.',
    videoImage: video2
  },
  {
    id: 3,
    image: image3,
    title: "Minimal Living",
    description1: 'Minimalistic architecture',
    description2: '  If you’re interested in modern cluster homes, then check this avant-garde house. Traditional design with modern elements of minimalism.',
    videoImage: video3
  }
]

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)


  const nextSlide = () => {
    // setSlideDirection('right')
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    // setSlideDirection('left')
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide()
    }, 5000)

    return () => clearTimeout(timer)
  }, [currentSlide])

  return (
    <div className="relative w-full min-h-[90vh]  bg-black overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition duration-1000 ease-in-out ${index === currentSlide
            ? 'translate-x-0'
            : index === (currentSlide - 1 + slides.length) % slides.length
              ? '-translate-x-full'
              : index === (currentSlide + 1) % slides.length
                ? 'translate-x-full'
                : 'translate-x-full'


            }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className='w-full h-full object-cover'
          />
          <div className="absolute inset-0 bg-black bg-opacity-70" />
          <div className="absolute top-2/4 md:top-1/4   left-4 md:left-28 md:p-8 text-white ">
            <span className='md:p-2 text-normal'>0{currentSlide + 1}/0{slides.length}</span>
            <h2 className={` text-5xl md:text-8xl font-semibold transition-transform delay-300 duration-1000 ease-in-out ${index === currentSlide ? 'translate-y-0' : 'translate-y-full'
              }`}>
              {slide.title}
            </h2>
            <button className="py-4 px-12 mt-10  border border-white font-semibold   
            hover:bg-white hover:text-black">
              Make an enquiry
            </button>
          </div>
          <div className="hidden z-10 bottom-0 right-0 md:grid grid-cols-3 w-2/3 absolute text-white bg-black">
            <div className=' w-full h-full flex justify-center items-center px-10 text-3xl font-semibold'>
              <h1 className={`transition-transform delay-500 duration-1000 ease-in-out 
                ${index === currentSlide ? 'translate-y-0' : 'translate-y-full'}`}>
                {slide.description1}
              </h1>
            </div>
            <div className='w-full h-full flex px-10 items-center '>
              <h1 className={`transition-transform delay-500 duration-1000 ease-in-out 
                ${index === currentSlide ? 'translate-y-0' : 'translate-y-full'}`}>{slide.description2}</h1>
            </div>
            <div className='h-72 bg-white '>
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
                    src={slide.videoImage}
                    className={ `w-full h-full object-cover transition-transform delay-500 duration-1000 ease-in-out 
                      ${index === currentSlide ? 'translate-y-0' : 'translate-y-full'}`}
                    alt="Thumbnail"
                    onClick={() => setIsPlaying(true)}
                />
                <span onClick={() => setIsPlaying(true)} className='absolute flex justify-center items-center cursor-pointer   shadow-2xl transition-all duration-500 ease-in-out rounded-full h-24 w-24 bg-white hover:scale-110'>
                    <Play strokeWidth={2} className=' h-4 w-4 fill-black' />
                </span>
            </div>
              )}

            </div>

          </div>
        </div>
      ))}

      <MoveLeft onClick={prevSlide} strokeWidth={1.5}
        className=" hidden md:flex absolute top-1/2 left-14 transform -translate-y-1/2 text-white opacity-75 bg-transparent 
        hover:cursor-pointer hover:opacity-100 h-10 w-10"/>

      <MoveRight className="hidden md:flex absolute top-1/2 right-14 transform -translate-y-1/2 text-white opacity-75 bg-transparent 
         hover:opacity-100 hover:cursor-pointer h-10 w-10" onClick={nextSlide} strokeWidth={1.5} />

      <div className="absolute bottom-10 px-4 md:left-14  flex md:flex-col space-x-10  md:space-x-0 md:space-y-10">
        <Facebook className="h-4 w-4 text-white opacity-100 hover:opacity-75 fill-white hover:cursor-pointer " strokeWidth={0.5} />
        <Twitter className=" h-4 w-4 bg-transparent  text-white opacity-100 hover:opacity-75 fill-white hover:cursor-pointer" strokeWidth={1} />
        <Instagram className="h-4 w-4 bg-transparent  text-white opacity-100 hover:opacity-75 hover:cursor-pointer" strokeWidth={3} />
      </div>


    </div>
  )
} 