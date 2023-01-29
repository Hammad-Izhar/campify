import create from "zustand";
import { Host, type Experience, Image } from "@prisma/client";

export interface Bounds {
  minLatitude: number;
  minLongitude: number;
  maxLatitude: number;
  maxLongitude: number;
}

export type DetailedExperience = Experience & {
  host: Host;
  images: Image[];
};

interface MapState {
  experiences: DetailedExperience[];
  bounds: Bounds;
  selectedExperience?: DetailedExperience;
}

interface MapActions {
  setBounds: (bounds: Bounds) => void;
  setExperiences: (experiences: DetailedExperience[]) => void;
  setSelectedExperience: (experience: DetailedExperience) => void;
}
export const useMapState = create<MapState & MapActions>((set, get) => ({
  experiences: [],
  bounds: {
    maxLatitude: 43.768585,
    maxLongitude: -72.865057,
    minLatitude: 43.26229,
    minLongitude: -74.319066,
  },
  setBounds: (bounds) => set({ bounds }),
  setExperiences: (experiences) => set({ experiences }),
  setSelectedExperience: (experience) =>
    set({ selectedExperience: experience }),
}));
