import { Fragment, useState } from 'react'
import IngredientModal from '../ingredientModal/ingredientModal'
import { recipePost } from '../../api/fresh_start_recipe_api'

function SubmitForm() {
  const [name, setName] = useState('')
  const [servingSize, setServingSize] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [instructionFields, setInstructionFields] = useState([
    { cookingStyle: '', step: '', instruction: '' }
  ])
  const [ingredientFields, setIngredientFields] = useState([])
  const [tipFields, setTipFields] = useState([{ tip: '' }])
  const [cookwareFields, setCookwareFields] = useState([{ cookware: '' }])
  const [activeModal, setActiveModal] = useState(null)

  const closeModal = () => {
    setActiveModal(null)
  }

  const handleFormChange = (event, index, dataSet, setDataSet) => {
    let data = [...dataSet]
    data[index][event.target.name] = event.target.value
    setDataSet(data)
  }

  const onFilterChange = dataChange => {
    setIngredientFields(prevFields => [...prevFields, dataChange])
  }
  const removeStep = (e, index, dataSet, setDataSet) => {
    e.preventDefault()
    let data = [...dataSet]
    data.splice(index, 1)
    setDataSet(data)
  }

  const addIngredients2 = e => {
    e.preventDefault()
    setActiveModal(true)
  }

  const addInstructions = e => {
    e.preventDefault()
    let newInstruction = {
      cookingStyle: '',
      step: '',
      instruction: ''
    }
    setInstructionFields([...instructionFields, newInstruction])
  }

  const addCookware = e => {
    e.preventDefault()
    let newCookware = {
      cookware: ''
    }
    setCookwareFields([...cookwareFields, newCookware])
  }

  const addCookingTip = e => {
    e.preventDefault()
    let newTip = {
      tip: ''
    }
    setTipFields([...tipFields, newTip])
  }
  const submit = e => {
    e.preventDefault()
    const compiledData = {
      name: name,
      serving_size: servingSize,
      image_url: imageUrl,
      cooking_tips: tipFields,
      cookware: cookwareFields,
      ingredients: ingredientFields,
      instructions: instructionFields
    }
    recipePost(compiledData, apiKey)
      .then(data => {
        console.log('Recipe posted successfully:', data)
        setName('')
        setServingSize('')
        setImageUrl('')
        setTipFields([{ tip: '' }])
        setCookwareFields([{ cookware: '' }])
        setIngredientFields([])
        setInstructionFields([{ cookingStyle: '', step: '', instruction: '' }])
      })
      .catch(error => {
        console.error('Error posting recipe:', error)
      })
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      if (event.target.tagName.toLowerCase() !== 'button') {
        event.preventDefault() // Disable Enter on non-buttons
      }
    }
  }
  return (
    <Fragment>
      <form
        onSubmit={submit}
        onKeyDown={handleKeyDown}
        className="flex flex-col items-center gap-4 p-6 bg-gray-100 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold text-gray-800">Submit Recipe</h1>
        <input
          type="text"
          placeholder="Recipe Name"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Serving Size"
          name="servingSize"
          value={servingSize}
          onChange={event => setServingSize(event.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Recipe Image url"
          name="imageUrl"
          value={imageUrl}
          onChange={event => setImageUrl(event.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <br />
        <h3 className="text-lg font-semibold text-gray-700">Ingredients</h3>
        {ingredientFields.map((ingredient, index) => {
          return (
            <div
              className="ingredient flex items-center justify-between gap-4 p-2 border border-gray-200 rounded bg-white"
              key={index}
            >
              <p className="text-gray-600">
                {ingredient.quantity} {ingredient.measurement} {ingredient.ingredient}
              </p>
              <button
                onClick={e =>
                  removeStep(e, index, ingredientFields, setIngredientFields)
                }
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          )
        })}
        <button
          onClick={addIngredients2}
          className="p-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Ingredient
        </button>

        <h3 className="text-lg font-semibold text-gray-700">Instructions</h3>
        {instructionFields.map((instruction, index) => {
          return (
            <div
              className="instruction flex flex-col gap-2 p-4 border border-gray-200 rounded bg-white"
              key={index}
            >
              <select
                name="cookingStyle"
                onChange={event =>
                  handleFormChange(
                    event,
                    index,
                    instructionFields,
                    setInstructionFields
                  )
                }
                value={instruction.cookingStyle}
                required
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Cooking Style</option>
                <option value="0">No Cooking Required</option>
                <option value="1">Microwave</option>
                <option value="2">Stove Top</option>
                <option value="3">Oven / Toaster Oven</option>
              </select>
              <input
                type="number"
                placeholder="Step"
                name="step"
                onChange={event =>
                  handleFormChange(
                    event,
                    index,
                    instructionFields,
                    setInstructionFields
                  )
                }
                value={instruction.step}
                required
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Instruction"
                name="instruction"
                onChange={event =>
                  handleFormChange(
                    event,
                    index,
                    instructionFields,
                    setInstructionFields
                  )
                }
                value={instruction.instruction}
                required
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={e =>
                  removeStep(e, index, instructionFields, setInstructionFields)
                }
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          )
        })}
        <button
          onClick={addInstructions}
          className="p-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Instruction
        </button>

        <h3 className="text-lg font-semibold text-gray-700">Cookware</h3>
        {cookwareFields.map((cookware, index) => {
          return (
            <div
              className="cookware flex items-center justify-between gap-4 p-2 border border-gray-200 rounded bg-white"
              key={index}
            >
              <input
                type="text"
                placeholder="Cookware"
                name="cookware"
                value={cookware.cookware}
                onChange={event =>
                  handleFormChange(
                    event,
                    index,
                    cookwareFields,
                    setCookwareFields
                  )
                }
                required
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={e =>
                  removeStep(e, index, cookwareFields, setCookwareFields)
                }
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          )
        })}
        <button
          onClick={addCookware}
          className="p-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Cookware
        </button>

        <h3 className="text-lg font-semibold text-gray-700">Cooking Tips</h3>
        {tipFields.map((tip, index) => {
          return (
            <div
              className="cookingTip flex items-center justify-between gap-4 p-2 border border-gray-200 rounded bg-white"
              key={index}
            >
              <input
                type="text"
                placeholder="Tip"
                name="tip"
                value={tip.tip}
                onChange={event =>
                  handleFormChange(event, index, tipFields, setTipFields)
                }
                required
                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={e => removeStep(e, index, tipFields, setTipFields)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          )
        })}
        <button
          onClick={addCookingTip}
          className="p-2 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Cooking Tip
        </button>
        <br />
        <br />
        <input
          type="text"
          placeholder="API key"
          name="apiKey"
          value={apiKey}
          onChange={event => setApiKey(event.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <br />
        <button
          type="submit"
          className="p-3 bg-green-500 text-white rounded hover:bg-green-600"
        >
          SUBMIT
        </button>
      </form>
      {activeModal && (
        <IngredientModal onClose={closeModal} onFilterChange={onFilterChange} />
      )}
    </Fragment>
  )
}

export default SubmitForm