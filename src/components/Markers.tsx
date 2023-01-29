import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
import { Marker } from "react-leaflet-marker";
import { type ExperienceMarker } from "../pages/map";
import { DetailedExperience, useMapState } from "../state/useMapState";
import { api } from "../utils/api";

const convertTagToEmoji = (tag: string) => {
  switch (tag) {
    case "Camping":
      return "⛺";
    case "Hiking":
      return "⛰️";
    case "Rocking Climbing":
      return "🪨";
    case "Canoeing":
      return "🛶";
    case "Kayaking":
      return "⛵";
    case "Sailing":
      return "🚢";
    case "Skiing":
      return "🎿";
    case "Snowboarding":
      return "🏂";
    case "Swimming":
      return "🏊‍♂️";
    case "Scuba Diving":
      return "🤽";
    case "Other":
      return "❓";
  }
};

export const Markers = () => {
  const bounds = useMapState((state) => state.bounds);
  const setExperiences = useMapState((state) => state.setExperiences);
  const experiences = useMapState((state) => state.experiences);
  const tags = useMapState((state) => state.tags);
  const { data, isSuccess } = api.experiences.getWithinArea.useQuery({
    ...bounds,
    tags,
  });
  const setSelectedExperience = useMapState(
    (state) => state.setSelectedExperience
  );

  useEffect(() => {
    // Update the experience state in the store to be used by the left screen.
    if (isSuccess && data) {
      setExperiences(data as DetailedExperience[]);
    }
  }, [data, isSuccess, setExperiences]);

  if (experiences.length == 0) return <div></div>;

  const markers: ExperienceMarker[] = experiences.map((experience) => {
    return {
      latitude: experience.latitude,
      longitude: experience.longitude,
      price: experience.cost,
      tags: experience.tags,
      experience,
    };
  });

  return (
    <>
      {markers.map((marker, idx) => {
        console.log(marker.tags);
        return (
          <Marker
            key={idx}
            position={[marker.latitude, marker.longitude]}
            interactive={true}
            placement={"top"}
          >
            <div
              className="w-max rounded-lg bg-orange-200 p-1 text-center text-xl"
              onClick={() => setSelectedExperience(marker.experience)}
            >
              {marker.tags.map(convertTagToEmoji).join(" ")}
            </div>
          </Marker>
        );
      })}
    </>
  );
};
