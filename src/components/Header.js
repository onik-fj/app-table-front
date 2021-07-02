import React from 'react';

const Header=({handleAddRow})=>{
  return(
    <header>
      <div className={"container"}>
        <button onClick={handleAddRow}>ADD</button>
        <div>
        <label>Name</label>
        <label>Surname</label>
        <label>Credit</label>
        </div>
      </div>
    </header>
  )
}
export default Header;