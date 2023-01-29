import React from "react";
import { useMapState } from "../state/useMapState";
import clsx from "clsx";

export const ExperienceDetailPane = () => {
  const selectedExperience = useMapState((state) => state.selectedExperience);

  if (selectedExperience) console.log("Has selected experience!");

  return (
    <div
      className={clsx(
        "absolute ml-[-50vw] h-screen w-[50vh] bg-white p-2",
        selectedExperience && "ml-0"
      )}
    >
      <div>Something!</div>
    </div>
  );
};
