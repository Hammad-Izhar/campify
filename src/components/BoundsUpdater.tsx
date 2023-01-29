import { useMap, useMapEvents } from "react-leaflet";
import React, { useEffect } from "react";
import _ from "lodash";
import { useMapState } from "../state/useMapState";

export const BoundsUpdater = () => {
  const setBounds = useMapState((state) => state.setBounds);
  const bounds = useMapState((state) => state.bounds);

  const map = useMap();
  useEffect(() => {
    const currentBounds = map.getBounds();
    if (Math.abs(currentBounds.getNorth() - bounds.maxLatitude) > 1) {
      map.flyToBounds([
        [bounds.minLatitude, bounds.minLongitude],
        [bounds.maxLatitude, bounds.maxLongitude],
      ]);
    }
  }, [bounds]);

  useMapEvents({
    move: _.debounce((e) => {
      console.log(e);
      const bounds = map.getBounds();
      setBounds({
        maxLatitude: bounds.getNorth(),
        minLatitude: bounds.getSouth(),
        maxLongitude: bounds.getEast(),
        minLongitude: bounds.getWest(),
      });
    }, 50),
  });
  return <></>;
};
