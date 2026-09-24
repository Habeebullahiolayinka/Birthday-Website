import { useState } from "react"
import Hero from "../components/BirthdayHero"
import Suprises from "../components/BirthdaySprises"
import Wishes from "../components/BirthdayWishes"
import Final from "../components/FinalMessage"
import Personal from "../components/PersonalMessage"



function HomePage() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <main className="">
            {!isOpen && <Hero onOpen={() => setIsOpen(true)} />}

            {isOpen && (
                <div className="animate-fade-up">
                    <Suprises />
                    <Wishes />
                    <Personal />
                    <Final  onReset={()=>setIsOpen(false)}/>
                </div>
            )}
        </main>
    
    )
}

export default HomePage