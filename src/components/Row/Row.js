import React from 'react';
import './Row.scss'
const Row=({name, surname, credit, handleForm, handleDelete})=>{
    return(
        <> 
        <td>
          <button onClick={handleForm}>EDIT</button>
          <button onClick={handleDelete}>DELETE</button>
        </td>
        <td className={"item-text"}>{name}</td>
        <td className={"item-text"}>{surname}</td>
        <td className={"item-text"}>{credit}</td>
      </>
      ) 
}
export default Row;