import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, remaining, Location } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        
        if (event.target.value < 0){
            console.log("The New Budget must be a positive number");
            alert("The New Budget must be a positive number");
        }else if (event.target.value > 2000){
            alert("The New Budget can't be greater than 2000");
        }else if (event.target.value < budget - remaining){
            alert("You cannot reduce the budget value lower than the spending");
        }else if (event.target.value <= 2000 && event.target.value !== ""){
            var intValue = parseInt(event.target.value);
            setNewBudget(intValue);
            dispatch({
                type: 'SET_BUDGET',
                payload: intValue,
            });

            
        }
        
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {Location}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;

