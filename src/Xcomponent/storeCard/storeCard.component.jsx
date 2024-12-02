import { useLocation, useNavigate } from 'react-router-dom'
import { useStoreLocation } from '../../../context/StoreLocationContext'
import './storeCard.css'

function StoreCard({ location, isSelected, id }) {
  const { name, address, chain } = location
  const navigate = useNavigate()
  const pathLocation = useLocation()
  const { locatonData, storeLocation } = useStoreLocation()

  const handleSelectStore = () => {
    const displayName = name.replace(/^King Soopers - /, '')
    storeLocation(displayName, id)
    if (pathLocation.pathname === '/location') {
      navigate('/')
    } else if (pathLocation.pathname.startsWith('/location/')) {
      const recipeId = pathLocation.pathname.split('/')[2]
      navigate(`/recipe/${recipeId}`)
    }
  }

  return (
    <div className={`store-card-wrap ${isSelected ? 'selected' : ''}`} id={id}>
      <h2 className="store-title">{name}</h2>
      <p className="store-chain">{chain}</p>
      <div className="store-address">
        <p>{address.addressLine1}</p>
        <p>
          {address.city}, {address.state} {address.zipCode}
        </p>
      </div>
      <button className="store-select-button" onClick={handleSelectStore}>
        Select Store
      </button>
    </div>
  )
}

export default StoreCard
