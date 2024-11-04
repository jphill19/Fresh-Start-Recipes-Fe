import { Fragment, useState } from 'react';
import './submitRecipeForm.css';

function SubmitForm() {
    const [name, setName] = useState('');
    const [servingSize, setServingSize] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [instructionFields, setInstructionFields] = useState([
        {cookingStyle: '', step: '', instruction: ''}
    ]);
    const [ingredientFields, setIngredientFields] = useState([
        {quantity: '', measurement: '', ingredient: ''}
    ]);
    const [tipFields, setTipFields] = useState([
        {tip: ''}
    ]);
    const [cookwareFields, setCookwareFields] = useState([
        {cookware: ''}
    ]);

    const handleFormChange = (event, index, dataSet, setDataSet) => {
        let data = [...dataSet];
        data[index][event.target.name] = event.target.value;
        setDataSet(data);
    }
    
    const removeStep = (e, index, dataSet, setDataSet) => {
        e.preventDefault();
        let data = [...dataSet];
        data.splice(index, 1);
        setDataSet(data);
    }

    const addIngredients = (e) => {
        e.preventDefault();
        let newIngredient = {
            quantity: '',
            measurement: '',
            ingredient: ''
        }
        setIngredientFields([...ingredientFields, newIngredient])
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
    }
    
    return (
        <Fragment>
            <form>
                <input 
                    type='text'
                    placeholder='Recipe Name' 
                    name='name' 
                    value={name} 
                    onChange={event => setName(event.target.value)}
                />
                <input
                    type='text' 
                    placeholder='Serving Size' 
                    name='servingSize' 
                    value={servingSize} 
                    onChange={event => setServingSize(event.target.value)}
                />
                <input
                    type='text' 
                    placeholder='Recipe Image url' 
                    name='imageUrl' 
                    value={imageUrl} 
                    onChange={event => setImageUrl(event.target.value)}
                />
                <br/>
                <h3>Ingredients</h3>
                {ingredientFields.map((ingredient, index) => {
                    return (
                    <Fragment key={index}>
                        <input
                            type='number' 
                            placeholder='Quantity' 
                            name='quantity'
                            onChange={event => handleFormChange(event, index, ingredientFields, setIngredientFields)}
                            value={ingredientFields.quantity}
                        />
                        <input
                            type='text' 
                            placeholder='Unit of Measure' 
                            name='measurement' 
                            onChange={event => handleFormChange(event, index, ingredientFields, setIngredientFields)}
                            value={ingredientFields.step}
                        />
                        {/* <select
                            name='measurement'
                            onChange={event => handleFormChange(event, index, ingredientFields, setIngredientFields)}
                            value={ingredientFields.measurement}
                        >
                        Dynamically get all the measurements stored in the database 
                        </select> */}
                        <input
                            type='text' 
                            placeholder='Ingredient' 
                            name='ingredient'
                            onChange={event => handleFormChange(event, index, ingredientFields, setIngredientFields)}
                            value={ingredientFields.ingredient}
                        />
                        <button onClick={(e) => removeStep(e, index, ingredientFields, setIngredientFields)}>Remove</button>
                    </Fragment>)
                })}
                <button onClick={addIngredients}>Add Ingredient</button>

                <h3>Instructions</h3>
                {instructionFields.map((instruction, index) => {
                    return (
                        <Fragment key={index}>
                        <select
                            name='cookingStyle'
                            onChange={event => handleFormChange(event, index, instructionFields, setInstructionFields)}
                            value={instructionFields.cookingStyle}
                        >
                            <option value="" disabled>Select Cooking Style</option>
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
                        />
                        <input
                            type='text' 
                            placeholder='Instruction' 
                            name='instruction'
                            onChange={event => handleFormChange(event, index, instructionFields, setInstructionFields)}
                            value={instructionFields.instruction}
                        />
                        <button onClick={(e) => removeStep(e, index, instructionFields, setInstructionFields)}>Remove</button>
                        </Fragment>
                    )
                })}
                <button onClick={addInstructions}>Add Instruction</button>
        
                <h3>Cookware</h3>
                {cookwareFields.map((cookware, index) => {
                    return (
                        <Fragment key={index}>
                            <input
                                type='text' 
                                placeholder='Cookware' 
                                name='cookware' 
                                value={cookwareFields.cookware} 
                                onChange={event => handleFormChange(event, index, cookwareFields, setCookwareFields)}
                            />
                            <button onClick={(e) => removeStep(e, index, cookwareFields, setCookwareFields)}>Remove</button>
                        </Fragment>
                    )
                })}
                <button onClick={event => addCookware(event)}>Add Cookware</button>

                <h3>Cooking Tips</h3>
                {tipFields.map((tip, index) => {
                    return (
                        <Fragment key={index}>
                            <input
                                type='text' 
                                placeholder='tips' 
                                name='tips' 
                                value={tipFields.tips} 
                                onChange={event => handleFormChange(event, index, tipFields, setTipFields)}
                            />
                            <button onClick={(e) => removeStep(e, index, tipFields, setTipFields)}>Remove</button>
                        </Fragment>
                    )
                })}
                <button onClick={event => addCookingTip(event)}>Add Cookware</button>

                <button onClick={event => submit(event)}>SUBMIT</button>
            </form>
        </Fragment>
    )
}
export default SubmitForm;