import { createContext, useContext, useState } from 'react'

const StoreLocationContext = createContext()

export const StoreLocationProvider = ({ children }) => {
  const [locationData, setlocationData] = useState({ name: '', id: null })

  const storeLocation = (name, id) => {
    setlocationData({ name, id })
  }

  return (
    <StoreLocationContext.Provider value={{ locationData, storeLocation }}>
      {children}
    </StoreLocationContext.Provider>
  )
}

export const useStoreLocation = () => {
  return useContext(StoreLocationContext)
}
