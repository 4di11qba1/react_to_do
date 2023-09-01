import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    const inputRef = useRef();

  return (
    <form className="addSearchForm" onSubmit={handleSubmit}>
        <label htmlFor="addTask" style={{display: 'none'}}>Add a Task</label>
        <input 
            className="inputField" 
            autoFocus
            ref={inputRef} 
            id="addItem" 
            placeholder="Add a Task" 
            type="text" required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)} 
        />
        <button type="submit" aria-label="Add a Task" onClick={() => inputRef.current.focus()}><FaPlus className="icon" /></button>
    </form>
  )
}

export default AddItem