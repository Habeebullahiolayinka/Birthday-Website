import { SisterName } from "../props/birthdayprops"

const Wishes: string[] = [
    "A fruitful new year",
    "Happiness",
    "Success",
    "Good health",
    "Blessings",
    "Growth",
    "Fulfillment of your dreams",
]

type HeroProps = {
  onOpen: () => void;
};

function Hero({onOpen}: HeroProps) {
    return (
        <section
            id="hero"
            className="flex min-h-screen flex-col items-center justify-center 
            gap-6 bg-gradient-to-br from-petal via-blush to-amber-100
            p-6 text-center flex-wrap overflow-hidden ">
            <span aria-hidden="true" className="absolute top-16 left-8 text-3xl animate-float" style={{animationDelay: "0.8"}}>
                💖
            </span>
            <h1 className=" animate-fade-up font-display text-5xl sm:text-7xl font-bold text-rose-deep leading-tight">

                Happy Birthday, {SisterName}
            </h1>

            <span  className="absolute right-16 bottom text-3xl animate-float" style={{animationDelay: "1.5s"}}>
                ⭐
            </span>

            <p className="text-lg text-gray-700">

                Wishing you a new year filled with:
            </p>
                <span className="absolute bottom-16 left-0 text-9xl animate-float opacity-30" style={{animationDelay: "1s"}}>🎈</span>


            <ul className="flex max-w-xl flex-wrap justify-center gap-2 animate-fade-up" style={{animationDelay: "0.3s"}}>

                {
                    
                    Wishes.map((wish) => (
                        <li key={wish}
                            className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-rose-deep shadow-sm ring-1 ring-petal">
                            {wish}</li>
                    ))
                }
            </ul>



            <button onClick={onOpen}
            className="animate-glow rounded-full bg-rose-700 text-white px-10 py-4 transition duration-300 hover:scale-110  cursor-pointer active:scale-95">
                Open Your Birthday Suprise 🎁</button>
        </section>
    )
}

export default Hero