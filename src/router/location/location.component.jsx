import { useState, useEffect, Fragment} from "react";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import {locationFetch} from '../../../api/fresh_start_recipe_api'
import Map from "../../component/map/map.component";
import StoreCard from "../../component/storeCard/storeCard.component";
import ClipLoader from "react-spinners/ClipLoader";
import './location.css'

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
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          setIsLoading(false)
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

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    document.getElementById(location.locationId)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="location-container">
      <button onClick={handleUseLocation} className="location-button">Use Your Location</button>
      {isLoaded && (
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged} className="autocomplete-wrapper">
          <input
            type="text"
            placeholder="Enter your address"
            className="input-field"
            maxLength="50"
          />
        </Autocomplete>
      )}
    {isLoading ? (
      <div className="loader-container">
        <ClipLoader color="#36d7b7" size={50} loading={isLoading} />
      </div>
    ) : (
      <Fragment>
        <Map locations={locations} userLocation={userLocation} onLocationClick={handleLocationClick}/>
        <div className="store-cards-container">
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
              <p className="no-locations-message">No King Soopers nearby your location</p>
            )}
        </div>
      </Fragment>
    )}
    </div>
  );
}

export default Location;

