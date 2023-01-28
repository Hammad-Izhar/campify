import React, { useEffect } from "react";
import { Marker } from "react-leaflet";
import { ExperienceMarker } from "../pages/map";
import { useMapState } from "../state/useMapState";
import { api } from "../utils/api";

export const Markers = () => {
    const bounds = useMapState(state => state.bounds);
    const setExperiences = useMapState(state => state.setExperiences);
    const experiences = api.experiences.getWithinArea.useQuery(bounds);
    
    useEffect(() => {
        // Update the experience state in the store to be used by the left screen.
      if(experiences.isSuccess && experiences.data){
        setExperiences(experiences.data);
      }
    }, [experiences.data]);
    if(experiences.isLoading || !experiences.data) return <></>;
  
    const markers: ExperienceMarker[] = experiences.data.map((experience) => {
      return {
        latitude: experience.latitude,
        longitude: experience.latitude,
        price: experience.cost,
      };
    });
    return <>
        {markers.map((marker, idx) => (
        <Marker key={idx} position={[marker.latitude, marker.longitude]} />
      ))}
    </>
};