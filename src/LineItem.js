import React, { useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <motion.div
      initial={{opacity: 0, x: -100}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.85}}
      exit={{opacity: 0, x: 100}}
    >
      <li className="item bg-blur" onDoubleClick={() => handleCheck(item.id)}>
        <div class="checkbox-wrapper-11">
          <input 
            type="checkbox" 
            name="r" 
            value="2" 
            onChange={() => handleCheck(item.id)} 
            checked={item.checked} 
          />
          <label 
              style={(item.checked) ? {textDecoration: 'line-through'} : null}
          >
              <h2>{item.item}</h2>
          </label>
        </div>
        <FaTrashAlt 
          className="icon" 
          role="button" 
          tabIndex="0" 
          onClick={() => handleDelete(item.id)} 
          aria-label={`Delete ${item.item}`}
        />
      </li>
    </motion.div>
  )
}

export default LineItem