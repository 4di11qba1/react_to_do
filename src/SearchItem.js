import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchItem = ({search, setSearch}) => {
  return (
    <form className="addSearchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search" style={{display: 'none'}}>Search</label>
        <input 
            id="search"
            type="text"
            role="searchBox"
            placeholder="Search Tasks" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className='icon' />

    </form>
  )
}

export default SearchItem