import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

const mapboxApiKey = process.env.REACT_APP_MAPBOX_API_KEY;
mapboxgl.accessToken = mapboxApiKey;

function Map({ locations, userLocation,  onLocationClick }) {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);
  const prevUserLocation = useRef(null);

  // Initialize the map once
  useEffect(() => {
    const initialCenter = userLocation
      ? [userLocation.longitude, userLocation.latitude]
      : [-104.998818, 39.757185];

    const mapInstance = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: initialCenter,
      zoom: 13,
    });

    setMap(mapInstance);

    const handleResize = () => mapInstance.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mapInstance.remove();
    };
  }, []);

  // Add markers whenever locations change
  useEffect(() => {
    if (map) {
      locations.forEach((location) => {
        const { latitude, longitude } = location.geolocation;

        const marker = new mapboxgl.Marker()
          .setLngLat([longitude, latitude])
          .addTo(map);

        const popup = new mapboxgl.Popup({ offset: 20 })
          .setHTML(`
            <h3>${location.name}</h3>
          `);

        marker.setPopup(popup);
        marker.getElement().addEventListener("click", () => onLocationClick(location))
      });
    }
  }, [map, locations,onLocationClick]);


  useEffect(() => {
    if (map && userLocation) {
      const { latitude, longitude } = userLocation;
      if (
        !prevUserLocation.current ||
        prevUserLocation.current.latitude !== latitude ||
        prevUserLocation.current.longitude !== longitude
      ) {
        map.flyTo({ center: [longitude, latitude], zoom: 13 });
        prevUserLocation.current = userLocation; //
      }
    }
  }, [map, userLocation]);

  return <div className="map-container" ref={mapContainerRef} />;
}

export default Map;

