import { Fragment, useState } from 'react';
import './instructionForm.css';

function InstructionForm() {

    const [instructionFields, setInstructionFields] = useState([
        {cookingStyle: '', step: '', instruction: ''}
    ]);

    const handleInstructionFormChange = (event, index) => {
        let data = [...instructionFields];
        data[index][event.target.name] = event.target.value;
        setInstructionFields(data);
    }

    const addFields = () => {
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

    const submit = (e) => {
        e.preventDefault();
    }
// <form onSubmit={submit}>
// <button onClick={submit}>


return (
    <Fragment>
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
        <button onClick={addFields}>Add Instruction</button>
    </Fragment>
    )
}
export default InstructionForm;