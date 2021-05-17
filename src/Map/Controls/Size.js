import React, { useContext, useEffect, useState } from "react";
import { Zoom } from "ol/control";
import MapContext from "../Map/MapContext";

const SizeControl = () => {
    const { map } = useContext(MapContext);

    useEffect(() => {
        if (!map) return;

        let fullScreenControl = new Zoom({});

        map.controls.push(fullScreenControl);

        return () => map.controls.remove(fullScreenControl);
    }, [map]);

    return null;
};

export default SizeControl;
