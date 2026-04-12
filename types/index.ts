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