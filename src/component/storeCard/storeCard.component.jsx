import './storeCard.css'

function StoreCard({ location, isSelected, id}) {
  const { name, address, chain } = location;

  return (
    <div className={`store-card-wrap ${isSelected ? "selected" : ""}`} id={id}>
      <h2 className="store-title">{name}</h2>
      <p className="store-chain">{chain}</p>
      <div className="store-address">
        <p>{address.addressLine1}</p>
        <p>
          {address.city}, {address.state} {address.zipCode}
        </p>
      </div>
      <button className="store-select-button">Select Store</button>
    </div>
  );
}

export default StoreCard;