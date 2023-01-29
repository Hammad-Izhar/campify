import { Badge } from "flowbite-react";
import React from "react";
import { DetailedExperience, useMapState } from "../state/useMapState";

const placeholderImage =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBWRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAAEsAAAAAQAAASwAAAAB/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAPHAFaAAMbJUccAQAAAgAEAP/hDIFodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nIHg6eG1wdGs9J0ltYWdlOjpFeGlmVG9vbCAxMS44OCc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp0aWZmPSdodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyc+CiAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICA8dGlmZjpYUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpYUmVzb2x1dGlvbj4KICA8dGlmZjpZUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpZUmVzb2x1dGlvbj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wTU09J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8nPgogIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnN0b2NrOmMxNWJkMGViLWJlYmMtNDZjMC1iM2Q5LTE0OWYxOGUxNTE4NjwveG1wTU06RG9jdW1lbnRJRD4KICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjI5NjIwODdiLThlNGUtNDlkOC04NTI2LTYwODZkOTIxZTdiNDwveG1wTU06SW5zdGFuY2VJRD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/8AACwgBaAFoAQERAP/EABwAAQEBAQEBAQEBAAAAAAAAAAAGBQQDAgEHCP/EAEIQAAEDAgIFCAcFBwUBAQAAAAABAgMEEQUGEiE1krETFjFBUVRyghQiU2FkceEyc4GjwRUjQlKRk9EzNGKh8ENj/9oACAEBAAA/AP8AZYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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";

export const ExperienceCard = ({
  experience,
}: {
  experience: DetailedExperience;
}) => {
  const setSelectedExperience = useMapState(
    (state) => state.setSelectedExperience
  );
  const image = experience.images[0] ?? placeholderImage;
  return (
    <div className="p-3">
      <div
        className="flex flex-col rounded-lg bg-slate-400 bg-opacity-20 shadow-md backdrop-blur-xl"
        data-testid="flowbite-card"
        onClick={() => setSelectedExperience(experience)}
      >
        <img alt="" className="h-64 rounded-t-lg" src={image} />
        <div className="flex h-full flex-col justify-center gap-4 p-6">
          <h5 className="text-2xl font-bold tracking-tight text-white">
            {experience.name}
          </h5>
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="mr-4 text-white">{experience.location}</span>
              {experience.tags.map((tag, idx) => (
                <Badge key={idx} color={"info"}>
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <p className="font-normal text-white ">{experience.description}</p>
        </div>
      </div>
    </div>
  );
};
