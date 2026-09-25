import robiat1 from "../assets/robiat1.jpg"
import robiat2 from "../assets/robiat2.jpg"
import robiat3 from "../assets/robait3.jpg"
import robiat4 from "../assets/robait4.jpg"
import robiat5 from "../assets/robiat5.jpg"
import robiat6 from "../assets/robait6.jpg"
import robiat7 from "../assets/robait7.jpg"





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
        image : robiat1,
        poem:
            "May every effort you have given\nBloom into something bright and true.\nMay doors swing open, paths grow clear,\nAnd dreams keep moving close to you.",
    },
    {
        id: 2,
        icon: "🌿",
        title: "Good Health & Strength",
        image : robiat2,
        poem:
            "May your mornings wake you strong and light,\nMay peace sit softly in your days.\nMay energy carry you through each season,\nAnd a long, full life be yours always.",
    },
    {
        id: 3,
        icon: "✨",
        title: "Blessings & Favor",
        image : robiat3,
        poem:
            "May blessings find you when you least expect,\nMay grace walk gently by your side.\nMay favor open beautiful doors,\nAnd peace be where your heart resides.",
    },
    {
        id: 4,
        icon: "🌱",
        title: "Growing Into You",
        image : robiat4,
        poem:
            "A new chapter opens, fresh and wide,\nMay wisdom grow with every year.\nBe brave, keep learning, keep on dreaming,\nAnd become the one you hold most dear.",
    },
    {
        id: 5,
        icon: "💖",
        title: "Happiness & Memories",
        image: robiat5,
        poem:
            "May laughter find you every day,\nMay memories shine like golden light.\nMay love surround you, peace stay near,\nAnd smiles come easy, morning to night.",
    },


     {
    id: 6,
    icon: "💖",
    title: "Fulfillment of your dreams",
    image: robiat6,
    poem:
        "May every dream within your heart\n Find its way into the light.\n May every hope you've held so close\n Become your joy and proud delight.\n May every step you take lead you\n To the life you've dreamed to see,\n And may your heart be filled with peace\n As you become all you wish to be.",
    
}, 
{
    id: 5,
    icon: "💖",
    title: "Good health",
    image: robiat7,
    poem:
        "May strength be with you every day,\n And wellness fill your heart.\n May your body, mind, and spirit\n Stay healthy from the start.\n May every morning bring you peace,\n And every night bring rest,\n May you be blessed with lasting health,\n And always feel your best.",
    closing: "Happy Birthday! May good health and strength follow you always. ❤️",
},
];