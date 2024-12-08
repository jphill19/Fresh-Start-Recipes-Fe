import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

function Map({ locations, userLocation, onLocationClick }) {
  const mapContainerRef = useRef(null);
  const map = useRef(null);
  const prevUserLocation = useRef(null);
  const markers = useRef([]);

  // Initialize the map once
  useEffect(() => {
    if (map.current) return; // Initialize map only once

    const initialCenter = userLocation
      ? [userLocation.longitude, userLocation.latitude]
      : [-104.998818, 39.757185];

    try {
      map.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: initialCenter,
        zoom: 13,
      });
    } catch (error) {
      console.error('Error initializing map:', error);
    }

    const handleResize = () => map.current.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (map.current) {
        map.current.remove();
      }
    };
  }, []); // <-- Empty dependency array

  // Add markers whenever locations change
  useEffect(() => {
    if (!map.current) return;

    // Remove existing markers
    markers.current.forEach((marker) => marker.remove());
    markers.current = [];

    locations.forEach((location) => {
      const { latitude, longitude } = location.geolocation;

      if (typeof latitude === 'number' && typeof longitude === 'number') {
        const marker = new mapboxgl.Marker()
          .setLngLat([longitude, latitude])
          .addTo(map.current);

        const popup = new mapboxgl.Popup({ offset: 20 }).setHTML(`
            <h3>${location.name}</h3>
          `);

        marker.setPopup(popup);
        marker
          .getElement()
          .addEventListener('click', () => onLocationClick(location));

        markers.current.push(marker);
      } else {
        console.warn('Invalid latitude or longitude:', location);
      }
    });
  }, [locations, onLocationClick]);

  // Update map center when userLocation changes
  useEffect(() => {
    if (map.current && userLocation) {
      const { latitude, longitude } = userLocation;
      if (
        !prevUserLocation.current ||
        prevUserLocation.current.latitude !== latitude ||
        prevUserLocation.current.longitude !== longitude
      ) {
        map.current.flyTo({ center: [longitude, latitude], zoom: 12 });
        prevUserLocation.current = userLocation;
      }
    }
  }, [userLocation]);

  return <div className="w-full h-[400px]" ref={mapContainerRef} />;
}

export default Map;
