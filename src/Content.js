import React from 'react';
import ItemList from './ItemList';
import { motion } from 'framer-motion';

const Content = ({items, handleCheck, handleDelete}) => {

  return (
    <main className='content'>
      {
        items.length ? (
          <div>
            <ItemList 
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
            />
          </div>
        ) : (
          <motion.div
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.85}}
            exit={{opacity: 0, x: 100}}
          >
            <p className='bg-blur'>No Tasks</p>
          </motion.div>
        )
      }
    </main>
  )
}

export default Content