import { useState } from 'react'
import { MoveRight, MoveLeft } from 'lucide-react'


const slides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=600&fit=crop&crop=edges',
        title: "Modern House",
        description1: 'Serene mountain lake surrounded by lush forests',
        description2: 'Serene mountain lake surrounded by lush forests',
        video: 'John Doe'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=600&fit=crop&crop=edges',
        title: "Modern House",
        description1: 'Serene mountain lake surrounded by lush forests',
        description2: 'Serene mountain lake surrounded by lush forests',
        video: 'John Doe'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=600&fit=crop&crop=edges',
        title: "Modern House",
        description1: 'Serene mountain lake surrounded by lush forests',
        description2: 'Serene mountain lake surrounded by lush forests',
        video: 'John Doe'
    }
]

function propertySlider() {


    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        <section className='py-28 px-10 md:min-h-screen bg-black'>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className='flex flex-col gap-8'>
                    <h1 className='text-5xl text-white font-semibold '>Modern way of living in a cluster home</h1>
                    <div className='grid grid-cols-2 text-white'>
                        <div className='left-div space-y-10     '>
                            <p>Property size: <br /> 130m2</p>
                            <p>Structure: <br /> two bedrooms</p>
                            <p>Accomodation: <br /> Furnished</p>
                            <p>Rent between:<br /> €900-1500</p>
                        </div>
                        <div className="right-div space-y-10 ">
                            <p>Heating:<br /> Floor heating</p>
                            <p>Parking spaces:<br />Townhome</p>
                            <p>Rent between:<br />1 space</p>
                        </div>
                    </div>
                </div>

                <div className='text-white h-full  flex flex-col justify-center'>
                    <img className="w-full mt-10" src={slides[currentSlide].image} alt="slider image" />
                    <div className='flex justify-between py-3'>
                        <div className='flex gap-3'>
                            <MoveLeft onClick={nextSlide} />
                            <MoveRight onClick={prevSlide} />
                        </div>
                        <span>{currentSlide + 1}/{slides.length}</span>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default propertySlider