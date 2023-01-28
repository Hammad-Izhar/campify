import React from "react"
import { useMapState } from "../state/useMapState";
import { ExperienceCard } from "./ExperienceCard";


export const ExperienceListing = () => {
    const experiences = useMapState(state => state.experiences);
    const selectedExperience = useMapState(state => state.selectedExperience);
    return <div className="h-full p-2">
        <div className="border-2 border-gray-600 h-full flex flex-row flex-wrap">
            {experiences.map(experience => <ExperienceCard experience={experience} key={experience.id} />)}
        </div>
    </div>;
}
