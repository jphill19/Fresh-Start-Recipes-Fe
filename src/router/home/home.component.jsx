import { useState } from "react";


const data = {
  "data": [
    {
      "title": "Recipe 1",
      "servingSize": 1,
      "ingredients": [
        {
          "name": "Ingredient Button",
          "price": "$$"
        },
        {
          "name": "Ingredient Button",
          "price": "$$"
        },
        {
          "name": "Ingredient Button",
          "price": "$$"
        },
        {
          "name": "Ingredient Button",
          "price": "00"
        }
      ],
      "image": {
        "src": "image-url-1",
        "alt": "Recipe 1 Image"
      },
  
    },
    {
      "title": "Recipe 2",
      "servingSize": 4,
      "ingredients": [
        {
          "name": "Ingredient Button",
          "price": "$$"
        },
        {
          "name": "Ingredient Button",
          "price": "$$"
        },
        {
          "name": "Ingredient Button",
          "price": "$$"
        }
      ],
      "image": {
        "src": "image-url-2",
        "alt": "Recipe 2 Image"
      },

    }
  ]
}

function Home() {
  const [ indexData, setIndexData] = useState(data)
  return (
    <div></div>
  );
}
export default Home;
