export interface Wish  {
  id: number;
  emoji: string;
  title: string;
  message: string;
};

export const WISHES: Wish[] = [
  {
    id: 1,
    emoji: "🌱",
    title: "Growth",
    message: "May you keep growing in wisdom, strength, and confidence.",
  },
  {
    id: 2,
    emoji: "💰",
    title: "Prosperity",
    message: "May your hard work be rewarded with abundance.",
  },

  {
    id: 3,
    emoji: "🩺",
    title: "Good Health",
    message: "May you always be blessed with good health, strength, and a long, beautiful life."

  },


  {
    id: 4,
    emoji: "😊",
    title: "Happiness",
    message: "May your heart always be filled with genuine happiness, laughter, and beautiful moments."

  },
  {
    id: 5,
    emoji: "🏆",
    title: "Success",
    message: "May you achieve your dreams and continue to grow, succeed, and make yourself proud."

  },
  {
    id: 6,
    emoji: "🙏",
    title: "Blessing",
    message: "May God continually bless you, guide you, and fill your life with endless blessings."

  }
];