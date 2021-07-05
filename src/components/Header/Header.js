import React from 'react';
import './Header.scss';
const Header=({handleAddRow})=>{
  return(
    <header>
      <div className={"container"}>
        <button className={"buttonAdd"} onClick={handleAddRow}>ADD</button>
        <div className={"title-container"}>
        <label className={"header-title"}>Name</label>
        <label className={"header-title"}>Surname</label>
        <label className={"header-title"}>Credit</label>
        </div>
      </div>
    </header>
  )
}
export default Header;