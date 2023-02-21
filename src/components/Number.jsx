const Number=({setLimit})=>{
    return(
      <div>
  <label for="limit">Choose a number:</label>
  <select name="limit" onChange={(e)=>setLimit(e.target.value)}>

      <option value="3" >
     3
      </option>
      <option value="9">
     9
      </option>
      <option value="15">
     15
      </option>
   

  </select>
  </div>
    )
}
export default Number