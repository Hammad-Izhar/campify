import React from "react";
import { useMapState } from "../state/useMapState";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceDetailPane } from "./ExperienceDetailPane";

export const ExperienceListing = () => {
  const experiences = useMapState((state) => state.experiences);

  return (
    <div className="h-full p-2">
      <ExperienceDetailPane />
      <div className="grid max-h-screen min-h-full grid-cols-2 overflow-auto border-2 border-gray-600">
        {experiences.map((experience) => (
          <ExperienceCard experience={experience} key={experience.id} />
        ))}
      </div>
    </div>
  );
};
