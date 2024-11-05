// This is not completed
// I think we want a parent container to hold these 
// And display them in a drop down


import './RecipeCookware.css';

function RecipeCookware ({ cookwares }) {
  console.log('cookwares: ', cookwares)

  return (
    <div className="cookwares-container">
    {
      cookwares.map((cookware, index) => (
        <div key={index} className="individual-cookware-container">
          <p>{cookware}</p>
        </div>
      ))
    }
  </div>
  );
}

export default RecipeCookware;