export interface Dev {
  name: string;
  role: string;
  bio: string;
  github: string; // handle only, no @
  linkedin: string; // full URL
  avatar?: string; // optional image path
}

export interface PodInfo {
  podName: string;
  tagline: string;
  mission: string;
}