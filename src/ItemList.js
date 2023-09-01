import React from 'react';
import { useState, useEffect } from 'react';
import LineItem from './LineItem';
import { AnimatePresence } from 'framer-motion';
import {motion} from 'framer-motion';

const ItemList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
      <AnimatePresence>
        {items.map((item) => (
          <LineItem 
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
          />
        ))}
      </AnimatePresence>
    </ul>
  )
}

export default ItemList