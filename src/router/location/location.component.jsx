import { useState, useEffect} from "react";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import {locationFetch} from '../home/../../api/fresh_start_recipe_api'
import Map from "../../component/map/map.component";

const libraries = ['places']; 
const initial_store = [
  {
    "locationId": "62000115",
    "storeNumber": "00115",
    "address": {
      "addressLine1": "1950 Chestnut Pl",
      "city": "Denver",
      "state": "CO",
      "zipCode": "80202",
      "county": "DENVER COUNTY"
    },
    "geolocation": {
      "latitude": 39.757185,
      "longitude": -104.998818,
      "latLng": "39.757185,-104.998818"
    },
    "chain": "KINGSOOPERS",
    "name": "King Soopers - Union Station"
  }
]

function Location() {
  const [userLocation, setUserLocation] = useState(null);
  const [locations, setLocations] = useState(initial_store);
  const [autocomplete, setAutocomplete] = useState(null);
  console.log("locations", locations)
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  useEffect(() => {
    if (userLocation) {
      const fetchLocations = async () => {
        try {
          const data = await locationFetch(userLocation.latitude, userLocation.longitude);
          setLocations(data.data); 
        } catch (error) {
          console.error("Failed to fetch locations:", error);
        }
      };
      fetchLocations();
    }
  }, [userLocation]);

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const { lat, lng } = place.geometry.location;
        setUserLocation({ latitude: lat(), longitude: lng() });
      } else {
        alert("No details available for the input address.");
      }
    }
  };

  const onLoad = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  };

  const handleUseLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error fetching user location:", error);
          alert("Could not retrieve location. Please allow location access in your browser settings.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {isLoaded && (
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <input
            type="text"
            placeholder="Enter your address"
            style={{ marginBottom: '10px', padding: '5px', width: '300px' }}
          />
        </Autocomplete>
      )}
      <button onClick={handleUseLocation}>Use Your Location</button>
  
      <Map locations={locations} userLocation={userLocation} />
      {/* <Map /> */}
    </div>
  );
}

export default Location;
