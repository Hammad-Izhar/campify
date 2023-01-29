import create from "zustand";
import { type Experience } from "@prisma/client";

export interface Bounds {
  minLatitude: number;
  minLongitude: number;
  maxLatitude: number;
  maxLongitude: number;
}

interface MapState {
  experiences: Experience[];
  bounds: Bounds;
  selectedExperience?: Experience;
}

interface MapActions {
  setBounds: (bounds: Bounds) => void;
  setExperiences: (experiences: Experience[]) => void;
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
}));
