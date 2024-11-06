import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css";

const mapboxApiKey = process.env.REACT_APP_MAPBOX_API_KEY;
mapboxgl.accessToken = mapboxApiKey;

function Map({ locations, userLocation }) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return;

    const initialCenter = userLocation
      ? [userLocation.longitude, userLocation.latitude]
      : [-104.998818, 39.757185];

    if (!mapContainerRef.current) {
      console.error("Map container not found");
      return;
    }

    const mapInstance = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: initialCenter,
      zoom: 13,
    });

    mapRef.current = mapInstance;

    mapInstance.on("load", () => {
      locations.forEach((location) => {
        const { latitude, longitude } = location.geolocation;

        const marker = new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(mapInstance);

        const popup = new mapboxgl.Popup({ offset: 20 }).setHTML(`
          <h3>${location.name}</h3>
          <p>${location.address.addressLine1}<br/>
          ${location.address.city}, ${location.address.state} ${location.address.zipCode}</p>
          <p><strong>Store Number:</strong> ${location.storeNumber}</p>
        `);

        marker.setPopup(popup);
      });
    });

    const handleResize = () => mapInstance.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mapInstance.remove();
    };
  }, [locations]);

  useEffect(() => {
    if (mapRef.current && userLocation) {
      const { latitude, longitude } = userLocation;
      mapRef.current.flyTo({ center: [longitude, latitude], zoom: 13 });
    }
  }, [userLocation]);

  return <div className="map-container" ref={mapContainerRef} />;
}

export default Map;
