import { WISHES } from "../props/wishprops"
import WishCard from "../wishCard/wishCard"


function Wishes() {
    return (

        <section id="wishes" className="bg-blush px-6 py-16">
            <h2 className="mb-10 text-center font-display text-3xl text-rose-deep">
                Wishes for You
            </h2>

            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {
                    WISHES.map((wish)=>(
                        <WishCard key={wish.id} wish={wish}/>
                    ))
                }
            </div>
        </section>
    )
}

export default Wishes