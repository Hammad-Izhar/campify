import React from "react";
import { useMapState } from "../state/useMapState";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceDetailPane } from "./ExperienceDetailPane";

export const ExperienceListing = () => {
  const experiences = useMapState((state) => state.experiences);

  return (
    <div className="flex h-[90%] flex-col">
      <ExperienceDetailPane />
      <div className="hide-scroll grid grid-cols-2 overflow-auto">
        {experiences.map((experience) => (
          <ExperienceCard experience={experience} key={experience.id} />
        ))}
      </div>
    </div>
  );
};
