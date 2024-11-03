import { Fragment, useState } from 'react';
import './ingredientForm.css';

function IngredientForm() {
    const [ingredientFields, setIngredientFields] = useState([
        {quantity: '', measurement: '', ingredient: ''}
    ]);

    const handleIngredientFormChange = (event, index) => {
        let data = [...ingredientFields];
        data[index][event.target.name] = event.target.value;
        setIngredientFields(data);
    }

    const addFields = () => {
        let newIngredient = {
            quantity: '',
            measurement: '',
            ingredient: ''
        }
        setIngredientFields([...ingredientFields, newIngredient])
    }

    const removeIngredient = (index) => {
        let data = [...ingredientFields];
        data.splice(index, 1);
        setIngredientFields(data)
    }

    const submit = (e) => {
        e.preventDefault();
    }
// <form onSubmit={submit}>
// <button onClick={submit}>


return (
    <Fragment>
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
                </>
            )
        })}
        <button onClick={addFields}>Add Ingredient</button>
    </Fragment>
    )
}
export default IngredientForm;