import { useMap, useMapEvents } from "react-leaflet";
import React from "react";
import _ from "lodash";
import { useMapState } from "../state/useMapState";

export const BoundsUpdater = () => {
    const setBounds = useMapState(state => state.setBounds);
    const map = useMap();
    useMapEvents({
        move: _.debounce((e) => {
            console.log(e);
            const bounds = map.getBounds();
            setBounds({
                maxLatitude: bounds.getNorth(),
                minLatitude: bounds.getSouth(),
                maxLongitude: bounds.getEast(),
                minLongitude: bounds.getWest()
            })
        }, 50)
    });
    return <></>;
}