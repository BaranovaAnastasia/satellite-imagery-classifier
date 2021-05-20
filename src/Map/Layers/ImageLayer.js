import { useContext, useEffect } from "react";
import MapContext from "../Map/MapContext";
import OLImageLayer from "ol/layer/Image";
import Static from "ol/source/ImageStatic";
import View from "ol/View";
import {getCenter} from "ol/extent";

const ImageLayer = ({ url, projection, extent, zIndex = 0, transition = 1, zoom = 0 }) => {
    const { map } = useContext(MapContext);

    console.log(url+ " " + transition)

    useEffect(() => {
        if (!map) return;

        let source =  new Static({
            url: url,
            projection: projection,
            imageExtent: extent,
        })

        let imageLayer = new OLImageLayer({
            source: source,
            zIndex,
        });
        imageLayer.setOpacity(transition);

        let view = new View({
            projection: projection,
            center: getCenter(extent),
            zoom: zoom,
            maxZoom: 8,
        })

        map.addLayer(imageLayer);
        imageLayer.setZIndex(zIndex);

        map.setView(view);

        return () => {
            if (map) {
                map.removeLayer(imageLayer);
            }
        };
    }, [map]);

    return null;
};

export default ImageLayer;
