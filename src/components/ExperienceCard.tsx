import { Experience } from "@prisma/client";
import { Card } from "flowbite-react";
import React from "react";

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <div className="w-1/2 p-3">
      <Card imgSrc="">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </div>
  );
};
