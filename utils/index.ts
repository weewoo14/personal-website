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

export function getVectorPos(data: string) {

  if (typeof data !== 'string') return null;

  const match = data.match(
    /X\s*=\s*([-\d.+E]+)\s+Y\s*=\s*([-\d.+E]+)\s+Z\s*=\s*([-\d.+E]+)/
  );

  if (!match) return null;

  return {
    x: parseFloat(match[1]),
    y: parseFloat(match[2]),
    z: parseFloat(match[3])
  };
}

export async function getPlanetData(planetID: string) {
  for (let attempt = 0; attempt < 5; attempt++) {
    const response = await fetch(`/api/horizons?planetID=${planetID}`);
    if (response.status !== 429) {
      const data = await response.json();
      return data;
    }

    const baseDelay = Math.pow(2, attempt) * 1000;
    const jitter = Math.random() * 1000;
    const delay = baseDelay + jitter;

    console.log('Horizons API is ratelimited.');
    await new Promise(resolve => setTimeout(resolve, delay));
  }
}