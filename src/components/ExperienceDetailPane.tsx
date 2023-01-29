import React from "react";
import { useMapState } from "../state/useMapState";
import clsx from "clsx";
import HostCard from "./HostCard";
import { Badge, Carousel } from "flowbite-react";
import Image from "next/image";

export const ExperienceDetailPane = () => {
  const selectedExperience = useMapState((state) => state.selectedExperience);
  const setSelectedExperience = useMapState(
    (state) => state.setSelectedExperience
  );
  console.log(selectedExperience?.images);
  return (
    <div
      className={clsx(
        "absolute left-[-50vw] h-screen w-[50vw] bg-white p-2 pt-12 transition-[left]",
        selectedExperience && "!left-0"
      )}
    >
      <div
        className="absolute top-4 right-4 flex cursor-pointer text-lg"
        onClick={() => setSelectedExperience(undefined)}
      >
        X
      </div>
      {selectedExperience && (
        <>
          {selectedExperience.images.length != 0 && (
            <Carousel>
              {selectedExperience.images.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt="Experience Image"
                  className="object-contain"
                  fill={true}
                />
              ))}
            </Carousel>
          )}
          <h2>{selectedExperience.name}</h2>
          <h6>{selectedExperience.location}</h6>
          <div className="m-2 flex flex-wrap gap-2">
            {selectedExperience.tags.map((tag) => (
              <Badge color={"info"}>{tag}</Badge>
            ))}
          </div>
          <div className="m-2">{selectedExperience.description}</div>
          <HostCard host={selectedExperience.host} />
        </>
      )}
    </div>
  );
};
