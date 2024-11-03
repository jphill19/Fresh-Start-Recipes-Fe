import { Fragment, useState } from 'react';
import './submitRecipeForm.css';

function Form() {
    const [name, setName] = useState('');
    const [servingSize, setServingSize] = useState('')
    const [instructionFields, setInstructionFields] = useState([
        {cookingStyle: '', step: '', instruction: ''}
    ]);

    const handleIngredientFormChange = (event, index) => {
        let data = [...ingredientFields];
        data[index][event.target.name] = event.target.value;
        setIngredientFields(data);
    }
    const handleInstructionFormChange = (event, index) => {
        let data = [...instructionFields];
        data[index][event.target.name] = event.target.value;
        setInstructionFields(data);
    }

    const addIngredients = () => {
        let newIngredient = {
            quantity: '',
            measurement: '',
            ingredient: ''
        }
        setIngredientFields([...ingredientFields, newIngredient])
    }
    const addInstructions = () => {
        let newInstruction = {
            cookingStyle: '',
            step: '',
            instruction: ''
        }
        setInstructionFields([...instructionFields, newInstruction])
    }

    const removeInstruction = (index) => {
        let data = [...instructionFields];
        data.splice(index, 1);
        setInstructionFields(data)
    }
    const removeIngredient = (index) => {
        let data = [...ingredientFields];
        data.splice(index, 1);
        setIngredientFields(data)
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
                <br/>
                <h3>Ingredients</h3>
                {ingredientFields.map((ingredient, index) => {
                    return (
                    <>
                        <input
                            type='number' 
                            placeholder='Quantity' 
                            name='quantity'
                            onChange={event => handleIngredientFormChange(event, index)}
                            value={IngredientForm.quantity}
                        />
                        <input
                            type='text' 
                            placeholder='Unit of Measure' 
                            name='measurement' 
                            onChange={event => handleIngredientFormChange(event, index)}
                            value={IngredientForm.step}
                        />
                        <input
                            type='text' 
                            placeholder='Ingredient' 
                            name='ingredient'
                            onChange={event => handleIngredientFormChange(event, index)}
                            value={IngredientForm.ingredient}
                        />
                        <button onClick={() => removeIngredient(index)}>Remove</button>
                    </>)
                })}
                <button onClick={addIngredients}>Add Ingredient</button>

                <br/>
                <h3>Instructions</h3>
                {instructionFields.map((instruction, index) => {
                    return (
                        <>
                        <input
                            type='text' 
                            placeholder='Cooking Style' 
                            name='cookingStyle'
                            onChange={event => handleInstructionFormChange(event, index)}
                            value={InstructionForm.cookingStyle}
                        />
                        <input
                            type='number' 
                            placeholder='Step' 
                            name='step' 
                            onChange={event => handleInstructionFormChange(event, index)}
                            value={InstructionForm.step}
                        />
                        <input
                            type='text' 
                            placeholder='Instruction' 
                            name='instruction'
                            onChange={event => handleInstructionFormChange(event, index)}
                            value={InstructionForm.instruction}
                        />
                        <button onClick={() => removeInstruction(index)}>Remove</button>
                        </>
                    )
                })}
                <button onClick={addInstructions}>Add Instruction</button>
        
        <h3>Cookware</h3>
        <input
        type='text' placeholder='Cookware' name='cookware' value={cookware} onChange={event => setCookware(event.target.value)}
        />
        <button onClick={event => addCookware(event)}>Add Cookware</button>

        <h3>Cooking Tips</h3>
        {/* Use ingredientForm */}
        <button onClick={event => addCookingTipe(event)}>Add Cooking Tip</button>

    <button onClick={event => submit(event)}>SUBMIT</button>
  </form>
        </Fragment>
    )
}
export default Form;