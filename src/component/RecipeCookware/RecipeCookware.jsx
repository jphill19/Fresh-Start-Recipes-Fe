// This is not completed
// I think we want a parent container to hold these 
// And display them in a drop down

import { useState } from 'react';
import './RecipeCookware.css';

function RecipeCookware({ cookwares }) {
  const [open, setOpen] = useState(false);
  console.log('cookwares: ', cookwares)

  return (
    <ul className={open ? "cookwares-container-open" : "cookwares-container"}>
      <p className={'cookware-title'} onClick={() => setOpen(!open)}>Cookware List</p>
      {open &&
        <div className={'cookwares-inner'}>
          {cookwares.map((cookware, index) => (
            <li key={index} className="individual-cookware-container">
              <p>{cookware}</p>
              <input className={'cookware-check-off'} type='checkbox' />
            </li>
          ))}
        </div>}
    </ul>
  );
}

export default RecipeCookware;