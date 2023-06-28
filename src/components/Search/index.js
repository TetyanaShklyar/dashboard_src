import React from 'react'
import './styles.scss'

const Search = () => {
  return (
    <React.Fragment>
      <form className="form_search">
        <label htmlFor="search"></label>
        <input
          id="search"
          className="form_search__input"
          type="text"
          placeholder="Search"
          autoComplete="off"
        />
      </form>
    </React.Fragment>
  )
}

export default Search
