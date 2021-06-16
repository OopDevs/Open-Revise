import { Button } from '@material-ui/core'
import { BiSearch } from "react-icons/bi"
import React from 'react'
import "./Search.css"

function Search() {
  return (
    <div className="search">
      <form className="saerch-contanier">
        <input type="text" className="search-input" placeholder="Search for Subjects, Documents or books" />
        <Button className="search-btn">
          <BiSearch />
        </Button>

      </form>
    </div>
  )
}

export default Search
