export type navLinkProperties = {
  name: string;
  route: string;
  styling: string;
}

export type starProperties = {
  id: number;
  size: number;
  top: number;
  left: number;
  animationDuration: string;
}

export type gitHubEventProperties = {
  id: string;
  type: string;
  created_at: string;
  repo: {
    name: string;
  }
}

export type vectorPosProperties = {
  x: number;
  y: number;
  z: number;
}

export type planetIDProperties = {
  name: string;
  horizonID: string;
}

export type planetProperties = {
  mercury?: vectorPosProperties;
  venus?: vectorPosProperties;
  mars?: vectorPosProperties;
  jupiter?: vectorPosProperties;
  saturn?: vectorPosProperties;
  uranus?: vectorPosProperties;
  neptune?: vectorPosProperties;
}

export type appStateContextProperties = {
  dataLoaded: boolean;
  stars: starProperties[];
  allPlanetData: planetProperties;
  gitHubActivity: gitHubEventProperties[];
}