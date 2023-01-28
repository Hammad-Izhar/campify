import React, { useEffect } from "react";
import { MarkerLayer, Marker } from "react-leaflet-marker";
import { type ExperienceMarker } from "../pages/map";
import { useMapState } from "../state/useMapState";
import { api } from "../utils/api";
import { useMap, useMapEvents } from "react-leaflet";
import _ from "lodash";

export const Markers = () => {
  const bounds = useMapState((state) => state.bounds);
  const setExperiences = useMapState((state) => state.setExperiences);
  const experiences = api.experiences.getWithinArea.useQuery(bounds);

  useEffect(() => {
    // Update the experience state in the store to be used by the left screen.
    if (experiences.isSuccess && experiences.data) {
      setExperiences(experiences.data);
    }
  }, [experiences.data]);

  if (experiences.isLoading || !experiences.data) return <div></div>;

  const markers: ExperienceMarker[] = experiences.data.map((experience) => {
    return {
      latitude: experience.latitude,
      longitude: experience.longitude,
      price: experience.cost,
    };
  });

  return (
    <>
      {markers.map((marker, idx) => (
        <Marker key={idx} position={[marker.latitude, marker.longitude]}>
          <div className="bg-red-400">Test</div>
        </Marker>
      ))}
    </>
  );
};
