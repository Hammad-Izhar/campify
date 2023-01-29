import React from "react";
import { useMapState } from "../state/useMapState";
import { ExperienceCard } from "./ExperienceCard";

export const ExperienceListing = () => {
  const experiences = useMapState((state) => state.experiences);
  const selectedExperience = useMapState((state) => state.selectedExperience);

  return (
    <div className="h-full p-2">
      <div className="flex h-full flex-row flex-wrap border-2 border-gray-600">
        {experiences.map((experience) => (
          <ExperienceCard experience={experience} key={experience.id} />
        ))}
      </div>
    </div>
  );
};
