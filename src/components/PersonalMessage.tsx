import HeartFelt from "../heartFeltMessage/heartFelt"
import { HeartFeltMessage } from "../props/heatFelt"
import Carousel from "../carousel/carosel"


function Personal() {
    return (
        <section className="py-20 md:py-28 px-6 flex flex-col items-center justify-center gap-5">
            <h2 className="relative mb-12 text-center font-display text-3xl text-rose-deep md:mb-16">
                <span aria-hidden="true" className="absolute -top-6 right-1/4 text-2xl animate-float">
                    🌸
                </span>
                A Message For You
            </h2>
            
            <div>
                <Carousel/>
            </div>


            <div>
                <HeartFelt heartFelt={HeartFeltMessage} />
            </div>
        </section>
    )
}


export default Personal