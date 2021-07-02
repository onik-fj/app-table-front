import React from 'react';

const RowEdit=({handleSave, handleCancel, vFirstName, vLastName, vCredit, handleOnChangeFN, handleOnChangeLN, handleOnChangeC})=>{
    return(
        <>
        <td className={""}>
          <button onClick={handleSave}>SAVE</button>
          <button onClick={handleCancel}>CANCEL</button> 
        </td>
        <td><input value={vFirstName} onChange={handleOnChangeFN} /></td>
        <td><input value={vLastName} onChange={handleOnChangeLN} /></td>
        <td><input value={vCredit} onChange={handleOnChangeC} /> </td>
        </>
      ) 
}
export default RowEdit;