import React from "react";
import { useMapState } from "../state/useMapState";
import clsx from "clsx";
import HostCard from "./HostCard";
import { Carousel } from "flowbite-react";
import Image from "next/image";

export const ExperienceDetailPane = () => {
  const selectedExperience = useMapState((state) => state.selectedExperience);
  const setSelectedExperience = useMapState(
    (state) => state.setSelectedExperience
  );

  if (selectedExperience) console.log("Has selected experience!");

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
                  width={375}
                  height={256}
                  key={idx}
                  src={img.content.toString()}
                  alt="Experience Image"
                  className="object-contain"
                  fill={true}
                />
              ))}
            </Carousel>
          )}
          <HostCard host={selectedExperience.host} />
        </>
      )}
    </div>
  );
};
