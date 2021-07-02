const RowAdd =({valFirstName, valLastName, valCredit, handleSubmit, handleCancel, handleOnChangeFN, handleOnChangeLN, handleOnChangeC})=>{
    return(
        <tr>
            <td>
              <form onSubmit={handleSubmit}>
                <div>
                  <button type="submit">SAVE</button>
                  <button onClick={handleCancel}>CANCEL</button>
                  <input value={valFirstName} onChange={handleOnChangeFN} />
                  <input value={valLastName} onChange={handleOnChangeLN} />
                  <input value={valCredit} onChange={handleOnChangeC} />
                </div>
              </form>
            </td>
          </tr>
    )
}
export default RowAdd;