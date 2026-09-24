import nolan from "../assets/nolan1.jpg"
import hero from "../assets/hero.png"
import vite from "../assets/vite.svg"
import grand from "../assets/Grand1.jpg"
import react from "../assets/react.svg"





export interface Slide {
    id: number
    icon: string
    title: string
    poem: string
    image? : string
    closing?: string
}

export const SLIDES: Slide[] = [

    {
        id: 1,
        icon: "🌟",
        title: "A Year of Success",
        image : hero,
        poem:
            "May every effort you have given\nBloom into something bright and true.\nMay doors swing open, paths grow clear,\nAnd dreams keep moving close to you.",
    },
    {
        id: 2,
        icon: "🌿",
        title: "Good Health & Strength",
        image : react,
        poem:
            "May your mornings wake you strong and light,\nMay peace sit softly in your days.\nMay energy carry you through each season,\nAnd a long, full life be yours always.",
    },
    {
        id: 3,
        icon: "✨",
        title: "Blessings & Favor",
        image : vite,
        poem:
            "May blessings find you when you least expect,\nMay grace walk gently by your side.\nMay favor open beautiful doors,\nAnd peace be where your heart resides.",
    },
    {
        id: 4,
        icon: "🌱",
        title: "Growing Into You",
        image : grand,
        poem:
            "A new chapter opens, fresh and wide,\nMay wisdom grow with every year.\nBe brave, keep learning, keep on dreaming,\nAnd become the one you hold most dear.",
    },
    {
        id: 5,
        icon: "💖",
        title: "Happiness & Memories",
        image: nolan,
        poem:
            "May laughter find you every day,\nMay memories shine like golden light.\nMay love surround you, peace stay near,\nAnd smiles come easy, morning to night.",
        closing: "Happy Birthday! You are so loved. ❤️",
    },
];