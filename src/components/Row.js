import React from 'react';

const Row=({name, surname, credit, handleForm, handleDelete})=>{
    return(
        <> 
        <td className={""}>
          <button onClick={handleForm}>EDIT</button>
          <button onClick={handleDelete}>DELETE</button>
        </td>
        <td className={""}>{name}</td>
        <td className={""}>{surname}</td>
        <td className={""}>{credit}</td>
      </>
      ) 
}
export default Row;