import { useRouter } from 'next/router';
import { useStoreLocation } from '../../context/StoreLocationContext';

function StoreCard({ location, isSelected, id }) {
  const { name, address, chain } = location;
  const router = useRouter();
  const pathLocation = router.asPath;
  const { locationData, storeLocation } = useStoreLocation();

  const handleSelectStore = () => {
    const displayName = name.replace(/^King Soopers - /, '');
    storeLocation(displayName, id);

    if (pathLocation === '/location') {
      router.push('/');
    } else if (pathLocation.startsWith('/location/')) {
      const recipeId = pathLocation.split('/')[2];
      router.push(`/recipe/${recipeId}`);
    }
  };

  return (
    <div
      className={`
        w-full mb-4 p-4 bg-white border rounded-lg shadow-sm transition-colors duration-200 
        ${isSelected ? 'border-orange-400 bg-orange-50' : 'border-gray-200'}
      `}
      id={id}
    >
    
      <h2 className="text-xl font-semibold text-gray-800 mb-1">
        {name}
      </h2>


      <p className="text-sm font-medium text-gray-600 mb-3">
        {chain}
      </p>


      <div className="text-sm text-gray-600 space-y-1 mb-4">
        <p>{address.addressLine1}</p>
        <p>
          {address.city}, {address.state} {address.zipCode}
        </p>
      </div>


      <button
        className="w-full p-3 bg-orange-500 text-white text-base font-semibold rounded-md 
                   transition-colors duration-200 hover:bg-orange-600 active:bg-orange-700"
        onClick={handleSelectStore}
      >
        Select Store
      </button>
    </div>
  );
}

export default StoreCard;
