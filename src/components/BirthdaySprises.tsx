import MakeAWish from "../confetti/confetti"


function Suprises() {
    return (
        <section className="p-8 flex flex-col gap-3">
            <h1 className="animate-fade-up font-display text-2xl sm:text-7xl font-bold text-rose-deep leading-tight justify-center flex items-center">
                A Little Surprise For You 🎁</h1>
                <MakeAWish /> 
        </section>
    )
}

export default Suprises