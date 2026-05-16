"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { planetIDProperties, appStateContextProperties, starProperties, planetProperties, gitHubEventProperties } from "@/types";
import { generateStars, getPlanetData, getVectorPos } from "@/utils";

const planets: planetIDProperties[] = [
  {
    name: 'mercury',
    horizonID: '199',
  },
  {
    name: 'venus',
    horizonID: '299',
  },
  {
    name: 'earth',
    horizonID: '399',
  },
  {
    name: 'mars',
    horizonID: '499',
  },
  // {
  //   name: 'jupiter',
  //   horizonID: '599',
  // },
  // {
  //   name: 'saturn',
  //   horizonID: '699',
  // },
  // {
  //   name: 'uranus',
  //   horizonID: '799',
  // },
  // {
  //   name: 'neptune',
  //   horizonID: '899',
  // },
]

const AppStateContext = createContext<appStateContextProperties>({
  dataLoaded: false,
  stars: [],
  allPlanetData: {},
  gitHubActivity: [],
})

export function AppStateProvider( {children }: {children: React.ReactNode}) {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [stars, setStars] = useState<starProperties[]>([]);
  const [allPlanetData, setAllPlanetData] = useState<planetProperties>({});
  const [gitHubActivity, setGitHubActivity] = useState<gitHubEventProperties[]>([]);

  useEffect(() => {
    async function fillPlanetData() {
      for (const planet of planets) {
        const planetData = await getPlanetData(planet.horizonID);
        const planetVectorPos = await getVectorPos(planetData.result);
        setAllPlanetData(prev => ({
          ...prev,
          [planet.name]: planetVectorPos
        }))
      }
    }

    async function getGitHubActivity() {
      const response = await fetch('/api/github');
      const data = await response.json();
      setGitHubActivity(data);
    }

    fillPlanetData();
    getGitHubActivity();
    setStars(generateStars());

  }, []);

  useEffect(() => {
    if (Object.keys(allPlanetData).length === 4) {
      setDataLoaded(true);
    }
  }, [allPlanetData]);

  return (
    <AppStateContext.Provider value={{dataLoaded, stars, allPlanetData, gitHubActivity}}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  return useContext(AppStateContext);
}