import { starProperties } from "@/types";

export function generateStars() {
  const generatedStars: starProperties[] = [];
  for (let i = 0; i < 50; i++) {
        generatedStars.push({
          id: i,
          size: (Math.random() * 7 + 7),
          top: Math.random() * 100,
          left: Math.random() * 100,
          animationDuration: (Math.random() * 2 + 2) + "s"
        })
      }
      return generatedStars;
}