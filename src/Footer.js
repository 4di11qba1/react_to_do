import React from 'react';

const Footer = ({length}) => {
    const today = new Date();

  return (
    <footer className='bg-blur'>
        <h1>
          {length} {length === 1 ? "Task" : "Tasks"}
        </h1>
    </footer>
  )
}

export default Footer