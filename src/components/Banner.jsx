
import bannerImage from "../data/bannerImage"


import { useState, useEffect } from "react";

function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImage.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? bannerImage.length - 1 : prevIndex - 1
        );
    };
    useEffect(() => {
        const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
        return () => clearInterval(interval); // Clear the interval when component unmounts
    }, [currentIndex]);

    return (
        <div
            className=" h-screen w-full flex items-center justify-center relative bg-slate-400 "
            style={{
                transition: "1s ease-in",
                backgroundImage: `url(${bannerImage[currentIndex].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
           
            <button
                className="absolute left-5 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full hover:bg-opacity-75 hidden md:flex"
                onClick={prevImage}
            >
                Prev
            </button>
            <button
                className="absolute right-5 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full hover:bg-opacity-75 hidden md:flex"
                onClick={nextImage}>
                Next
            </button>

            {/* Optional content in the center */}
            <div className="absolute">
                <h1 className="transition-all">{bannerImage[currentIndex].banner}</h1>
                <p className="mt-2">{bannerImage[currentIndex].button}</p>
            </div>
            <div className="absolute w-3/5 transition duration-1000 ease-in bottom-0 right-0 bg-black grid grid-rows-1 h-1/2 grid-cols-3 text-white">
               <h1>djhandfhaf</h1>
               <p className="transition duration-1000 transform translate-x-96 ease-in">{bannerImage[currentIndex].heading}</p>
               <div className="aspect-video">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi debitis id iure nihil doloremque quam eveniet voluptate corporis
                 perferendis quidem deleniti quod, exercitationem eligendi error veniam. Sed qui magni nisi.
               </div>
            </div>
        </div> 
    )
}

export default Banner