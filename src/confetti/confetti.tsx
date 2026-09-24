import { useState } from "react";



interface conffetiPiece {
    id: number;
    left: number
    color: string
    duration: number
    delay: number
}


const COLORS = ["#f43f5e", "#f59e0b", "#fb7185", "#fbbf24", "#fda4af"]

function MakeAWish() {
    const [piece, setPiece] = useState<conffetiPiece[]>([])
    const [hasWished, setHasWished] = useState(false)
    const [round, setRound] = useState(0)

    const handleWish = () => {
        const newPieces = Array.from({ length: 40 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 0.5
        }))
        setRound(round + 1)
        setPiece(newPieces)
        setHasWished(true)
    }



    return (
        <div className="flex flex-col items-center gap-4">
            <button onClick={handleWish}
            className="animate-glow  rounded-full bg-rose-deep px-8 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-110 active:scale-95 cursor-pointer">
                See Your Suprise 🌟
            </button>


            
                { hasWished &&
                   ( <p className="animate-fade-up text-lg text-rose-deep">
                        SUPRISE!!!!!
                    </p>)
                }

                <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
                    {
                        piece.map((piece)=>(
                           <span  key={`${round}-${piece.id}`}
                            className="absolute top-0 h-3 w-2 animate-confetti rounded-sm"
                           style={{
                            left: `${piece.left}%`,
                            backgroundColor: piece.color,
                            animationDuration : `${piece.duration}s`,
                            animationDelay : `${piece.delay}s`
                           }}
                           />
                        ))
                    }
                </div>
            

        </div>
    )
}



export default MakeAWish