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
  tags: string[];
}

export const TAGS = [
  "Camping",
  "Hiking",
  "Rocking Climbing",
  "Canoeing",
  "Kayaking",
  "Sailing",
  "Skiing",
  "Snowboarding",
  "Swimming",
  "Scuba Diving",
  "Other",
];

const LOCATION_BOUNDS: Record<string, Bounds> = {
  "Lake George, NY": {
    maxLatitude: 43.768585,
    maxLongitude: -72.865057,
    minLatitude: 43.26229,
    minLongitude: -74.319066,
  },
  "Providence, RI": {
    minLatitude: 41.732756,
    minLongitude: -71.663884,
    maxLatitude: 41.926923,
    maxLongitude: -71.135853,
  },
  "Yosemite National Park": {
    minLatitude: 37.461585,
    minLongitude: -120.413571,
    maxLatitude: 38.286511,
    maxLongitude: -118.750516,
  },
  "Grand Canyon National Park": {
    minLatitude: 35.039645,
    minLongitude: -114.079119,
    maxLatitude: 37.185042,
    maxLongitude: -110.081622,
  },
};

export const LOCATIONS = Object.keys(LOCATION_BOUNDS);

interface MapActions {
  setBounds: (bounds: Bounds) => void;
  setExperiences: (experiences: DetailedExperience[]) => void;
  setSelectedExperience: (experience?: DetailedExperience) => void;
  searchMap: (
    location?: string,
    startDate?: Date,
    endDate?: Date,
    tags?: string[]
  ) => void;
}
export const useMapState = create<MapState & MapActions>(
  //persist(
  (set, get) => ({
    experiences: [],
    tags: TAGS.map((t) => t.toLowerCase()),
    bounds: {
      maxLatitude: 43.88585,
      maxLongitude: -72.05057,
      minLatitude: 43.0229,
      minLongitude: -75.319066,
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
    searchMap: (location, startDate, endDate, tags) => {
      set({ tags });
      console.log("set location", location);
      if (LOCATION_BOUNDS[location ?? ""]) {
        // Update the bounds
        set({ bounds: LOCATION_BOUNDS[location ?? ""] });
      }
    },
  })
  //  {
  //    name: "mapStore",
  //  }
  //)
);
