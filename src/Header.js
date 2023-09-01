import React from 'react'

const Header = ({ title, length }) => {

  return (
    <header className='bg-blur'>
      <h1>
      {length} {length === 1 ? "Task" : "Tasks"} {title}
      </h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}

export default Header