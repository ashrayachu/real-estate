import React from 'react'
import bannerImage from "../data/bannerImage"


function Form() {
    return (
        <div className='min-h-screen bg-black relative py-20 px-4 sm:px-10 flex justify-end' 
        style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImage[0].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}
    >
        <div className="w-full md:w-2/5 bg-black flex flex-col justify-evenly items-center md:py-10 px-5 text-white"> {/* Adjusted width for responsiveness */}
            <h1 className="text-5xl  font-semibold mb-4">Schedule a visit</h1> {/* Responsive font size */}
            <p className="text-xs md:text-sm text-gray-400 mb-6"> {/* Responsive text size */}
                Duis aute irure dolor in reprehenderit in vate velit cillum culpa qui officia deserunt mollit anim id est.
            </p>
            <form className="w-full  flex flex-col space-y-4 md:space-y-10"> {/* Added spacing between inputs */}
                <div>
                    <input
                        type="email"
                        placeholder="E-mail*"
                        className="w-full bg-transparent border-b border-gray-700 focus:border-white outline-none transition-colors duration-300 placeholder-gray-500"
                    />
                </div>
                <div>
                    <input
                        type="tel"
                        placeholder="Phone*"
                        className="w-full bg-transparent border-b border-gray-700 outline-none focus:border-white  transition-colors duration-300 placeholder-gray-500"
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Message*"
                        className="w-full bg-transparent border-b border-gray-700 focus:border-white outline-none transition-colors duration-300 placeholder-gray-500 resize-none"
                    />
                </div>
                <button className="px-10 py-4 text-white border hover:bg-white transition duration-400 hover:text-black"> {/* Added padding for smaller screens */}
                    Send message
                </button>
            </form>
        </div>
    </div>
    )
}

export default Form