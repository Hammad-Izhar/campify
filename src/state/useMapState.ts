import create from "zustand";
import { api } from "../utils/api";

export interface Bounds {
  minLatitude: number;
  minLongitude: number;
  maxLatitude: number;
  maxLongitude: number;
}

interface MapState {
  experiences: Experience[];
  bounds: Bounds;
}

interface MapActions {
  setBounds: (bounds: Bounds) => void;
  setExperiences: (experiences: Experience[]) => void;
}

const experienceFunction = api.experiences.getWithinArea.useQuery;
type Experience = ReturnType<typeof experienceFunction>["data"];

export const useMapState = create<MapState & MapActions>((set, get) => ({
  experiences: [],
  bounds: {
    maxLatitude: 0,
    minLatitude: 0,
    maxLongitude: 0,
    minLongitude: 0,
  },
  setBounds: (bounds) => set({ bounds }),
  setExperiences: (experiences) => set({ experiences }),
}));
