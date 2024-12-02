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
      className={`bg-white border rounded-lg p-4 m-4 mx-auto w-[90%] max-w-[600px] h-[300px] overflow-y-auto ${
        isSelected ? 'bg-[#e0f7fa] border-[#00796b]' : 'border-[#e2e2e2]'
      }`}
      style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
      id={id}
    >
      <h2 className="text-[1.5em] text-[#333333] mb-2">{name}</h2>
      <p className="text-[1.2em] text-[#555555] mb-3">{chain}</p>
      <div>
        <p className="text-[1em] text-[#666666] my-1">{address.addressLine1}</p>
        <p className="text-[1em] text-[#666666] my-1">
          {address.city}, {address.state} {address.zipCode}
        </p>
      </div>
      <button
        className="w-full p-3 bg-[#ff6b6b] text-white rounded text-[1em] cursor-pointer mt-4 hover:bg-[#9a4e15]"
        onClick={handleSelectStore}
      >
        Select Store
      </button>
    </div>
  );
}

export default StoreCard;
