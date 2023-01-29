import React, { useEffect } from "react";
import { Marker } from "react-leaflet-marker";
import { type ExperienceMarker } from "../pages/map";
import { useMapState } from "../state/useMapState";
import { api } from "../utils/api";

const convertTagToEmoji = (tag: string) => {
  switch (tag.toLowerCase()) {
    case "hiking":
      return "⛰";
    case "outdoors":
      return "🏕";
    case "canoing":
      return "🚣‍♀️";
    case "fishing":
      return "🐟";
  }
};

export const Markers = () => {
  const bounds = useMapState((state) => state.bounds);
  const setExperiences = useMapState((state) => state.setExperiences);
  const experiences = useMapState((state) => state.experiences);
  const { data, isSuccess } = api.experiences.getWithinArea.useQuery(bounds);

  useEffect(() => {
    // Update the experience state in the store to be used by the left screen.
    if (isSuccess && data) {
      setExperiences(data);
    }
  }, [data, isSuccess, setExperiences]);

  if (experiences.length == 0) return <div></div>;

  const markers: ExperienceMarker[] = experiences.map((experience) => {
    return {
      latitude: experience.latitude,
      longitude: experience.longitude,
      price: experience.cost,
      tags: experience.tags,
    };
  });

  return (
    <>
      {markers.map((marker, idx) => (
        <Marker key={idx} position={[marker.latitude, marker.longitude]}>
          <div className="w-max rounded-lg bg-orange-200 p-1 text-center text-xl">
            {marker.tags.map(convertTagToEmoji).join(" ")}
          </div>
        </Marker>
      ))}
    </>
  );
};