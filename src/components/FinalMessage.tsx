import { SisterName } from "../props/birthdayprops"

type FinalProps = {
    onReset: () => void
}


function Final({ onReset }: FinalProps) {
    return (
        <footer>
            <section
                id="hero"
                className="flex min-h-screen flex-col items-center justify-center 
            gap-6 bg-gradient-to-br from-petal via-blush to-amber-100
            p-6 text-center flex-wrap overflow-hidden ">
                <span aria-hidden="true" className="absolute top-16 left-8 text-3xl animate-float" style={{ animationDelay: "0.8" }}>
                    💖
                </span>
                <h1 className=" animate-fade-up font-display text-5xl sm:text-7xl font-bold text-rose-deep leading-tight">
                    Whishing you Happy Birthday Again, {SisterName}
                </h1>


                <button onClick={onReset}
                    className="animate-glow rounded-full bg-rose-700 text-white px-10 py-4 transition duration-300 hover:scale-110  cursor-pointer active:scale-95"
                >Back to Start </button>
            </section>
        </footer>
    )
}

export default Final