// Importing required icons from the lucide-react library
import { Building, TreePine, Bed, Waves } from "lucide-react"


// Main component function
export default function Component() {
  return (
    // Main container with a black background, white text, and minimum height set to screen height
    <div className="bg-black text-white min-h-screen py-28 px-10 ">

      {/* Wrapper div for grid layout, centered horizontally with max-width, responsive grid columns */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left section: Text content with title, description, and property features */}
        <div className="space-y-10">
          
          {/* Title heading for the property with line breaks */}
          <h1 className="text-5xl font-semibold ">
            Private residential    
            <br className=" hidden md:flex "/>
              <span className="">  3rd floor</span> 
          </h1>
          
          {/* Description paragraph with gray text */}
          <p className="text-gray-400">
            Located on the 3rd floor of a well-known neighborhood surrounded by
            nature, and parks. Equipped with a pool and already furnished with
            modern furniture. Your new home awaits!
          </p>

          {/* Grid layout for displaying property feature icons and descriptions */}
          <div className="grid grid-cols-2 gap-12">
            
            {/* Feature 1: Property type */}
            <div className="flex items-center space-x-4">
              <Building className="w-10 h-10" /> {/* Icon representing a building */}
              <div>
                <p className="text-sm text-gray-400">Property type:</p> {/* Label */}
                <p>Townhome</p> {/* Property type value */}
              </div>
            </div>

            {/* Feature 2: Green spaces */}
            <div className="flex items-center space-x-4">
              <TreePine className="w-10 h-10" /> {/* Icon representing green spaces */}
              <div>
                <p className="text-sm text-gray-400">Green spaces:</p> {/* Label */}
                <p>Parks</p> {/* Green spaces value */}
              </div>
            </div>

            {/* Feature 3: Accommodation */}
            <div className="flex items-center space-x-4">
              <Bed className="w-10 h-10" /> {/* Icon representing accommodation */}
              <div>
                <p className="text-sm text-gray-400">Accommodation:</p> {/* Label */}
                <p>Furnished</p> {/* Accommodation value */}
              </div>
            </div>

            {/* Feature 4: Activity */}
            <div className="flex items-center space-x-4">
              <Waves className="w-10 h-10" /> {/* Icon representing an activity */}
              <div>
                <p className="text-sm text-gray-400">Activity:</p> {/* Label */}
                <p>Swimming pool</p> {/* Activity value */}
              </div>
            </div>
          </div>

          {/* Button to view more details with white outline and hover effect */}
          <button  className="px-10 py-4 text-white border hover:bg-white transition duration-400 hover:text-black">
            View more
          </button>
        </div>

        {/* Right section: A placeholder for an SVG graphic representing a wireframe of a building */}
        <div className= "mt-5">
          {/* SVG used to create a wireframe of a building */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={{ stroke: "currentColor", fill: "none", strokeWidth: "0.5" }}
          >
            {/* SVG paths that draw the lines of the building wireframe */}
            <path d="M10,90 L90,90 L90,10 L50,10 L10,50 Z" /> {/* Outer path */}
            <path d="M30,90 L30,70 L70,70 L70,30 L90,30" /> {/* Inner path */}
            <path d="M10,50 L30,50 L30,70" /> {/* Vertical lines */}
            <path d="M30,50 L70,50" /> {/* Horizontal lines */}
            <path d="M50,10 L50,50" /> {/* Vertical path downwards */}
            <path d="M70,30 L50,30" /> {/* Horizontal path in the middle */}
          </svg>
        </div>

      </div>
    </div>
  )
}
