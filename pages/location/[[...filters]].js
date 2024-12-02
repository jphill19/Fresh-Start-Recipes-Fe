// pages/location.js
import { useState, useEffect, Fragment } from 'react';
import { locationFetch } from '../../api/fresh_start_recipe_api';
import StoreCard from '../../components/storeCard/storeCard.component';
import ClipLoader from 'react-spinners/ClipLoader';
import dynamic from 'next/dynamic';

// Dynamically import Map and AutocompleteInput to disable SSR
const Map = dynamic(() => import('../../components/map/map.component'), {
  ssr: false,
});
const AutocompleteInput = dynamic(
  () => import('../../components/locationBar/locationBar.component'),
  {
    ssr: false,
  }
);

function Location({ initialLocations }) {
  const [userLocation, setUserLocation] = useState(null);
  const [locations, setLocations] = useState(initialLocations);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch locations when userLocation changes
  useEffect(() => {
    if (userLocation) {
      const fetchLocations = async () => {
        try {
          const data = await locationFetch(
            userLocation.latitude,
            userLocation.longitude
          );
          setLocations(data.data);
        } catch (error) {
          console.error('Failed to fetch locations:', error);
        }
      };
      fetchLocations();
    }
  }, [userLocation]);

  const handleUseLocation = () => {
    if (navigator.geolocation) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          setIsLoading(false);
        },
        (error) => {
          console.error('Error fetching user location:', error);
          alert(
            'Could not retrieve location. Please allow location access in your browser settings.'
          );
          setIsLoading(false);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    document.getElementById(location.locationId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <div className="flex flex-col items-center p-4">
      <button
        onClick={handleUseLocation}
        className="w-full max-w-[600px] mb-[10px] p-[14px] bg-[#ff6b6b] text-white border-none rounded-lg text-base font-normal cursor-pointer"
      >
        Use Your Location
      </button>
      <AutocompleteInput setUserLocation={setUserLocation} />
      {isLoading ? (
        <div className="loader-container">
          <ClipLoader color="#36d7b7" size={50} loading={isLoading} />
        </div>
      ) : (
        <Fragment>
          <Map
            locations={locations}
            userLocation={userLocation}
            onLocationClick={handleLocationClick}
          />
          <div
            className="max-h-[400px] overflow-y-auto w-full max-w-[600px] border border-[#e2e2e2] bg-[#f9f9f9] rounded-lg p-4 mt-[10px]"
            style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
          >
            {locations.length > 0 ? (
              locations.map((location) => (
                <StoreCard
                  key={location.locationId}
                  location={location}
                  isSelected={location === selectedLocation}
                  id={location.locationId}
                />
              ))
            ) : (
              <p className="no-locations-message">
                No King Soopers nearby your location
              </p>
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
}

export async function getStaticProps() {
  // Fetch initial data at build time if possible
  const initial_store = [
    {
      locationId: '62000115',
      storeNumber: '00115',
      address: {
        addressLine1: '1950 Chestnut Pl',
        city: 'Denver',
        state: 'CO',
        zipCode: '80202',
        county: 'DENVER COUNTY',
      },
      geolocation: {
        latitude: 39.757185,
        longitude: -104.998818,
        latLng: '39.757185,-104.998818',
      },
      chain: 'KINGSOOPERS',
      name: 'King Soopers - Union Station',
    },
  ];

  // Optionally, fetch more initial locations if available
  // const data = await fetchInitialLocations();

  return {
    props: {
      initialLocations: initial_store, // Replace with data if fetched
    },
    revalidate: 10000, // Revalidate every 60 seconds
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking', // Generate pages on-demand
  };
}


export default Location;
