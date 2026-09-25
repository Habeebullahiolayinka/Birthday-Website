import { useEffect, useState } from "react"
import { SLIDES } from "../props/slides"



function Carousel() {
    const [activeSlide, setActiveSlide] = useState(0)
    const [fade, setFade] = useState(true)
    const [isPlaying, setIsPlaying] = useState(true)

    const slide = SLIDES[activeSlide]

    const goToSlide = (index: number) => {
        setFade(false)

        setTimeout(() => {
            setActiveSlide(index)
            setFade(true)
        }, 300)
    }

    const handleNext = () => {
        goToSlide((activeSlide + 1) % SLIDES.length)
    }

    const handlePrev = () => {
        goToSlide((activeSlide - 1 + SLIDES.length) % SLIDES.length)
    }

    useEffect(() => {
        if (!isPlaying) return;
        const intervalId = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % SLIDES.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, [isPlaying]);





    return (
        <div className="flex gap-8 items-center justify-center w-screen py-6 px-6">

            <button
                onClick={handlePrev}
                aria-label="Previous slide"
                className="h-12 w-12 cursor-pointer rounded-full bg-rose-deep text-white shadow-lg transition duration-300 hover:scale-105 active:scale-95 md:block hidden"
            >
                ←
            </button>

            <div className={`flex flex-col items-center gap-8 transition-opacity duration-300 md:flex-row md:items-center md:gap-10 ${fade ? "opacity-100" : "opacity-0"
                }`}>

                <img
                    src={slide.image}
                    alt="My sister"
                    className="max-h-auto mx-auto mb-6 aspect-[4/5] w-full max-w-sm rounded-3xl object-cover shadow-lg animate-fade-up"
                />
                <div className="w-full text-center md:w-1/2 md:text-left flex flex-col justify-around">
                    <div className=" w-full text-center ">
                        <span className="block text-4xl" aria-hidden="true">{slide.icon}</span>
                        <h3 className="mt-2 font-display text-2xl text-rose-deep">{slide.title}</h3>
                        <p className="mt-4 whitespace-pre-line leading-relaxed text-ink/80 animate-fade-up">
                            {slide.poem}
                        </p>



                        {slide.closing && (
                            <p className="mt-4 font-medium text-rose-deep">{slide.closing}</p>
                        )}


                    </div>


                    <div className="mt-4 flex justify-center gap-2">
                        {SLIDES.map((s, index) => (
                            <button
                                key={s.id}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                aria-current={index === activeSlide}
                                className="cursor-pointer p-2">
                                <span className={`block h-3 rounded-full transition-all duration-300 cursor-pointer ${index === activeSlide ? "w-8 bg-rose-deep" : "w-3 bg-petal"
                                    }`}
                                />
                            </button>
                        ))}

                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="mt-4 text-sm text-rose-deep underline cursor-pointer"
                        >
                            {isPlaying ? "Pause autoplay" : "Play autoplay"}
                        </button>
                    </div>
                </div>




                <div className="flex gap-5 items-center justify-center ">

                    <button
                        onClick={handlePrev}
                        aria-label="Previous slide"
                        className="h-12 w-12 cursor-pointer rounded-full bg-rose-deep text-white shadow-lg transition duration-300 hover:scale-105 active:scale-95  md:hidden"
                    >
                        ←
                    </button>

                    <button
                        onClick={handleNext}
                        aria-label="Next slide"
                        className="h-12 w-12 cursor-pointer rounded-full bg-rose-deep text-white shadow-lg transition duration-300 hover:scale-105 active:scale-95  md:hidden"
                    >
                        →
                    </button>
                </div>
            </div>
            <button
                onClick={handleNext}
                aria-label="Next slide"
                className="h-12 w-12 cursor-pointer rounded-full bg-rose-deep text-white shadow-lg transition duration-300 hover:scale-105 active:scale-95 hidden md:block"
            >
                →
            </button>

        </div>

    )
}

export default Carousel