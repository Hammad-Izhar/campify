import create from "zustand";
import { Host, type Experience } from "@prisma/client";

export interface Bounds {
  minLatitude: number;
  minLongitude: number;
  maxLatitude: number;
  maxLongitude: number;
}

export type DetailedExperience = Experience & {
  host: Host;
};

interface MapState {
  experiences: DetailedExperience[];
  bounds: Bounds;
  selectedExperience?: DetailedExperience;
}

interface MapActions {
  setBounds: (bounds: Bounds) => void;
  setExperiences: (experiences: DetailedExperience[]) => void;
  setSelectedExperience: (experience?: DetailedExperience) => void;
}
export const useMapState = create<MapState & MapActions>(
  //persist(
  (set, get) => ({
    experiences: [],
    bounds: {
      maxLatitude: 43.768585,
      maxLongitude: -72.865057,
      minLatitude: 43.26229,
      minLongitude: -74.319066,
    },
    setBounds: (bounds) => set({ bounds }),
    setExperiences: (experiences) => set({ experiences }),
    setSelectedExperience: (experience) => {
      const exp = get().selectedExperience;
      if (exp && exp.id === experience?.id) {
        set({ selectedExperience: undefined });
      } else {
        set({ selectedExperience: experience });
      }
    },
  })
  //  {
  //    name: "mapStore",
  //  }
  //)
);
