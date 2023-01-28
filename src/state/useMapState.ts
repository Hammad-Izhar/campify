import create from "zustand";
import { api } from "../utils/api";

interface Bounds {
  minLatitute: number;
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
}

const experienceFunction = api.experiences.getWithinArea.useQuery;
type Experience = ReturnType<typeof experienceFunction>["data"];

export const useMapState = create<MapState & MapActions>((set, get) => ({
  experiences: [],
  bounds: {
    maxLatitude: 0,
    minLatitute: 0,
    maxLongitude: 0,
    minLongitude: 0,
  },
  setBounds: (bounds) => {
    set({ bounds });
  },
}));
