// pages/location.js
import { useState, useEffect } from 'react';
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
    <main className="bg-gray-50 min-h-screen p-4">
      <div className="max-w-md mx-auto">
        <div className="mb-4">
          <button
            onClick={handleUseLocation}
            className="w-full p-3 bg-orange-500 text-white font-semibold rounded-md transition-colors duration-200 hover:bg-orange-600 active:bg-orange-700"
          >
            Use Your Location
          </button>
        </div>

        <div className="mb-4">
          <AutocompleteInput setUserLocation={setUserLocation} />
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-[200px]">
            <ClipLoader color="#36d7b7" size={50} loading={isLoading} />
          </div>
        ) : (
          <>
            {/* Map Container */}
            <div className=" bg-white border border-gray-200 rounded-lg shadow-sm w-full mb-4">
              <Map
                locations={locations}
                userLocation={userLocation}
                onLocationClick={handleLocationClick}
              />
            </div>

            {/* Store List Container */}
            <div
              className="max-h-[400px] overflow-y-auto w-full border border-gray-200 bg-white rounded-lg p-4 shadow-sm"
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
                <p className="text-gray-700 text-sm font-medium">
                  No King Soopers nearby your location
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export async function getStaticProps() {
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

  return {
    props: {
      initialLocations: initial_store,
    },
    revalidate: 10000,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default Location;
