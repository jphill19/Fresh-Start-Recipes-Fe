import React, { useState, useCallback } from 'react'
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api'
import ClipLoader from 'react-spinners/ClipLoader'

const libraries = ['places']

const AutocompleteInput = ({ setUserLocation }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries
  })

  const [autocomplete, setAutocomplete] = useState(null)

  const onLoad = useCallback(autocompleteInstance => {
    setAutocomplete(autocompleteInstance)
  }, [])

  const onPlaceChanged = useCallback(() => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace()
      if (place.geometry) {
        const { lat, lng } = place.geometry.location
        setUserLocation({ latitude: lat(), longitude: lng() })
      } else {
        alert('No details available for the input address.')
      }
    } else {
      console.error('Autocomplete is not loaded yet!')
    }
  }, [autocomplete, setUserLocation])

  if (!isLoaded) {
    return (
      <div className="loader-container">
        <ClipLoader color="#36d7b7" size={50} loading={!isLoaded} />
      </div>
    )
  }

  return (
    <Autocomplete
      onLoad={onLoad}
      onPlaceChanged={onPlaceChanged}
      className="w-full max-w-[600px] mb-[10px]"
    >
      <input
        type="text"
        placeholder="Enter your address"
        className="box-border w-full p-[14px] border border-[#e2e2e2] rounded-lg text-base"
        maxLength="50"
      />
    </Autocomplete>
  )
}

export default AutocompleteInput
