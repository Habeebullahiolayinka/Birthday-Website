import { useState } from "react"
import type { HeartFeltProps } from "../props/heatFelt"


type HeartFeltProp = {
    heartFelt: HeartFeltProps
};


function HeartFelt({ heartFelt }: HeartFeltProp) {
    const [showNote, setShowNote] = useState(false)

    const handleClick = () => {
        setShowNote(!showNote)
    }


    return (
        <div className="flex flex-col justify-center items-center animate-fade-up">
            <button onClick={handleClick}
                className="max-h-18 rounded-3xl bg-rose-deep p-6 text-center shadow-lg ring-1 ring-petal backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 cursor-pointer text-white animate-glow"
            >

                {showNote ? "Close Note" : "Open My Note 💌💌"}
            </button>

            {
                showNote && (
                    <div className="animate-fade-up text-center mt-3 animate-fade-up text-sm text-ink/80">
                        <div className="max-w-100 max-h-80 rounded-2xl py-2 px-3 overflow-y-auto overscroll-contain pr-2 text-left flex flex-col gap-1">
                            <h3 className="font-bold text-2xl ">{heartFelt.title}</h3>

                            <p leading-loose>{heartFelt.note}</p>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default HeartFelt