import { useAppState } from "./AppStateProvider";
import type { vectorPosProperties } from "@/types";

type PlanetName = "mercury" | "venus" | "earth" | "mars";

type PlanetExtraData = {
  size: string;
  tilt: string;
  dayLength: string;
};

const planetExtraData: Record<PlanetName, PlanetExtraData> = {
  mercury: {
    size: 'w-[1.3vw]',
    tilt: 'rotate-0',
    dayLength: '58.6',
  },
  venus: {
    size: 'w-[3.3vw]',
    tilt: 'rotate-177',
    dayLength: '243',
  },
  earth: {
    size: 'w-[3.5vw]',
    tilt: 'rotate-23',
    dayLength: '1',
  },
  mars: {
    size: 'w-[1.9vw]',
    tilt: 'rotate-25',
    dayLength: '1.03',
  },
};

export default function PlanetField() {
  const {allPlanetData} = useAppState();
  const planetEntries = Object.entries(allPlanetData) as [PlanetName, vectorPosProperties | undefined][];

  return (
    <div id="planetField">
      <img
        src = '/sun.png'
        className='absolute -translate-x-1/2 -translate-y-1/2 aspect-square w-[5vw] top-[50%] left-[50%]'
      />
      {planetEntries.map(([planetName, planetVectorPos]) => {
        if (!planetVectorPos) return null;

        const planetTopPos = `${50 + ((-planetVectorPos.y / 4) * 100)}%`;
        const planetLeftPos = `${50 + ((planetVectorPos.x / 4) * 100)}%`;
        const planetSrc = `/${planetName}.png`;
        const planetData = planetExtraData[planetName];

        return (
          <div key={planetName}>
            <img
              src={planetSrc}
              className={`absolute -translate-x-1/2 -translate-y-1/2 aspect-square z-0 ${planetData.size} ${planetData.tilt}`}
              style={{
                top: planetTopPos,
                left: planetLeftPos,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}