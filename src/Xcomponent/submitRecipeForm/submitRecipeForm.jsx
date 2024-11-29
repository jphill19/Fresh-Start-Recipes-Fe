import { Fragment, useState } from 'react';
import IngredientModal from '../ingredientModal/ingredientModal'
import './submitRecipeForm.css';
import {recipePost} from '../../../api/fresh_start_recipe_api'

function SubmitForm() {
    const [name, setName] = useState('');
    const [servingSize, setServingSize] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [instructionFields, setInstructionFields] = useState([
        {cookingStyle: '', step: '', instruction: ''}
    ]);
    const [ingredientFields, setIngredientFields] = useState([]);
    const [tipFields, setTipFields] = useState([
        {tip: ''}
    ]);
    const [cookwareFields, setCookwareFields] = useState([
        {cookware: ''}
    ]);
    const [activeModal, setActiveModal] = useState(null)

    const closeModal = () => {
      setActiveModal(null);
    };

    const handleFormChange = (event, index, dataSet, setDataSet) => {
        let data = [...dataSet];
        data[index][event.target.name] = event.target.value;
        setDataSet(data);
    }

    const onFilterChange = (dataChange) => {
        setIngredientFields((prevFields) => [...prevFields, dataChange]);
    }
    const removeStep = (e, index, dataSet, setDataSet) => {
        e.preventDefault();
        let data = [...dataSet];
        data.splice(index, 1);
        setDataSet(data);
    }

    const addIngredients2 = (e) => {
        e.preventDefault();
        setActiveModal(true)
    }

    const addInstructions = (e) => {
        e.preventDefault();
        let newInstruction = {
            cookingStyle: '',
            step: '',
            instruction: ''
        }
        setInstructionFields([...instructionFields, newInstruction])
    }

    const addCookware = (e) => {
        e.preventDefault();
        let newCookware = {
            cookware: ''
        }
        setCookwareFields([...cookwareFields, newCookware])
    }

    const addCookingTip = (e) => {
        e.preventDefault();
        let newTip = {
            tip: ''
        }
        setTipFields([...tipFields, newTip])
    }
    const submit = (e) => {
        e.preventDefault();
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
                console.log("Recipe posted successfully:", data);
                setName('');
                setServingSize('');
                setImageUrl('');
                setTipFields([{tip: ''}]); 
                setCookwareFields([{cookware: ''}]); 
                setIngredientFields([]); 
                setInstructionFields([{cookingStyle: '', step: '', instruction: ''}]);
            })
            .catch(error => {
                console.error("Error posting recipe:", error);
            });   
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            if (event.target.tagName.toLowerCase() !== "button") {
                event.preventDefault(); // Disable Enter on non-buttons
            }
        }
    };
    return (
        <Fragment>
            <form onSubmit={submit} onKeyDown={handleKeyDown}>
                <h1>Submit Recipe</h1>
                <input 
                    type='text'
                    placeholder='Recipe Name' 
                    name='name' 
                    value={name} 
                    onChange={event => setName(event.target.value)}
                    required
                />
                <input
                    type='text' 
                    placeholder='Serving Size' 
                    name='servingSize' 
                    value={servingSize} 
                    onChange={event => setServingSize(event.target.value)}
                    required
                />
                <input
                    type='text' 
                    placeholder='Recipe Image url' 
                    name='imageUrl' 
                    value={imageUrl} 
                    onChange={event => setImageUrl(event.target.value)}
                    required
                />
                <br/>
                <h3>Ingredients</h3>
                {ingredientFields.map((ingredient, index) => {
                    return (
                    <div className='ingredient' key={index}>
                        <p>{ingredient.quantity} {ingredient.measurement} {ingredient.ingredient}</p>
                        <button onClick={(e) => removeStep(e, index, ingredientFields, setIngredientFields)}>Remove</button>
                    </div>)
                })}
                <button onClick={addIngredients2}>Add Ingredient</button>

                <h3>Instructions</h3>
                {instructionFields.map((instruction, index) => {
                    return (
                        <div className='instruction' key={index}>
                        <select
                            name='cookingStyle'
                            onChange={event => handleFormChange(event, index, instructionFields, setInstructionFields)}
                            value={instructionFields.cookingStyle}
                            required
                        >
                            <option value="">Select Cooking Style</option>
                            <option value="0">No Cooking Required</option>
                            <option value="1">Microwave</option>
                            <option value="2">Stove Top</option>
                            <option value="3">Oven / Toaster Oven</option>
                        </select>
                        <input
                            type='number' 
                            placeholder='Step' 
                            name='step' 
                            onChange={event => handleFormChange(event, index, instructionFields, setInstructionFields)}
                            value={instructionFields.step}
                            required
                        />
                        <input
                            type='text' 
                            placeholder='Instruction' 
                            name='instruction'
                            onChange={event => handleFormChange(event, index, instructionFields, setInstructionFields)}
                            value={instructionFields.instruction}
                            required
                        />
                        <button onClick={(e) => removeStep(e, index, instructionFields, setInstructionFields)}>Remove</button>
                        </div>
                    )
                })}
                <button onClick={addInstructions}>Add Instruction</button>
        
                <h3>Cookware</h3>
                {cookwareFields.map((cookware, index) => {
                    return (
                        <div className='cookware' key={index}>
                            <input
                                type='text' 
                                placeholder='Cookware' 
                                name='cookware' 
                                value={cookwareFields.cookware} 
                                onChange={event => handleFormChange(event, index, cookwareFields, setCookwareFields)}
                                required
                            />
                            <button onClick={(e) => removeStep(e, index, cookwareFields, setCookwareFields)}>Remove</button>
                        </div>
                    )
                })}
                <button onClick={event => addCookware(event)}>Add Cookware</button>

                <h3>Cooking Tips</h3>
                {tipFields.map((tip, index) => {
                    return (
                        <div className='cookingTip' key={index}>
                            <input
                                type='text' 
                                placeholder='Tip' 
                                name='tip' 
                                value={tipFields.tip} 
                                onChange={event => handleFormChange(event, index, tipFields, setTipFields)}
                                required
                            />
                            <button onClick={(e) => removeStep(e, index, tipFields, setTipFields)}>Remove</button>
                        </div>
                    )
                })}
                <button onClick={event => addCookingTip(event)}>Add Cooking Tip</button>
                <br />
                <br />
                <input 
                    type='text'
                    placeholder='API key' 
                    name='apiKey' 
                    value={apiKey} 
                    onChange={event => setApiKey(event.target.value)}
                    required
                />
                <br />
                <button type='submit'>SUBMIT</button>
            </form>
            {activeModal && (
                <IngredientModal 
                    onClose={closeModal}
                    onFilterChange={onFilterChange} />
            )}
        </Fragment>
    )
}
export default SubmitForm;