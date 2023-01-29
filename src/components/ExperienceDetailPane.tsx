import React from "react";
import { useMapState } from "../state/useMapState";
import clsx from "clsx";
import HostCard from "./HostCard";
import { Badge, Carousel } from "flowbite-react";

export const ExperienceDetailPane = () => {
  const selectedExperience = useMapState((state) => state.selectedExperience);
  const setSelectedExperience = useMapState(
    (state) => state.setSelectedExperience
  );
  return (
    <div
      className={clsx(
        "absolute left-[-50vw] z-10 h-[calc(100vh-140px)] w-[50vw] bg-black p-2 pt-12 text-white transition-[left]",
        selectedExperience && "!left-0"
      )}
    >
      {selectedExperience && (
        <>
          {selectedExperience.images.length != 0 && (
            <Carousel className="-mt-10 mb-3 h-[44%] overflow-hidden">
              {selectedExperience.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="Experience Image"
                  className="object-fill"
                />
              ))}
            </Carousel>
          )}
          <h2 className="my-4 text-4xl font-bold">{selectedExperience.name}</h2>
          <div className="align-center relative flex">
            <span className="ml-2">{selectedExperience.location}</span>
            <span
              className="absolute right-5 flex cursor-pointer justify-center"
              onClick={() => setSelectedExperience(undefined)}
            >
              Explore More Options {">"}
            </span>
          </div>
          <div className="m-2 flex flex-wrap gap-2">
            {selectedExperience.tags.map((tag, idx) => (
              <Badge key={idx} color={"info"}>
                {tag}
              </Badge>
            ))}
          </div>

          <div className="m-2">{selectedExperience.description}</div>
          <HostCard host={selectedExperience.host} />
        </>
      )}
    </div>
  );
};
