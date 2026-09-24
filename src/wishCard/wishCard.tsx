import { useState } from "react";
import type { Wish } from "../props/wishprops";

type WishCardProps = {
  wish: Wish;
};

function WishCard({ wish }: WishCardProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <button aria-expanded={isRevealed}
      onClick={() => setIsRevealed(!isRevealed)}
      className="min-h-48 rounded-3xl bg-white/80 p-6 text-center shadow-lg ring-1 ring-petal backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 cursor-pointer"
    >
      <span className="block text-4xl">{wish.emoji}</span>
      <h3 className="mt-2 font-display text-xl text-rose-deep">{wish.title}</h3>

      {isRevealed && (
        <p className="mt-3 animate-fade-up text-sm text-ink/80">
          {wish.message}
        </p>
      )}
    </button>
  );
}

export default WishCard;