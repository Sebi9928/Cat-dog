import React, { useState } from "react";
import { useEffect } from "react";
import PublicImg from "../components/PublicImg";
import Number from "../components/Number";
import Pictures from "../components/Pictures";
const PublicImages = () => {


const [categories,setCategories]=useState([])
const[categoryId,setCategoryId]=useState(1)
const [limit,setLimit]=useState(3)
const[pictures,setPictures]=useState([])
const getCategories=async()=>{
  const response = await fetch(
    `https://api.thecatapi.com/v1/categories`,{
    headers:{
      "x-api-key":"live_hEYgIkqeMYImCR2W8YeRc1M1gpwKAA2LEYR09oCiCmMKfDvAI3T07kAs39Ye7mUV",
    },
   } );

    const data = await response.json();
    setCategories(data)

}

useEffect(()=>{
  getCategories()
},[])

const getPhotos=async()=>{
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=${limit}&catergory_ids=${categoryId}`,{
    headers:{
      "x-api-key":"live_hEYgIkqeMYImCR2W8YeRc1M1gpwKAA2LEYR09oCiCmMKfDvAI3T07kAs39Ye7mUV",
    },
   } );

    const data = await response.json();
   setPictures(data)

}
useEffect(()=>{
  getPhotos()
},[limit,categoryId])




  return (
  <div>
  <h1>Public Images</h1>
  <label for="categories">Choose a category:</label>
  <select name="categories" id="categories" onChange={(e)=>setCategoryId(e.target.value)}>
  {categories.map((item)=>(
    // <option value={item.id}>
    //               {item.name}
    //             </option>
<PublicImg
id={item.id}
name={item.name}


/>


  ))}
  </select>
  {/* <label for="limit">Choose a number:</label>
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
   

  </select> */}
<Number
setLimit={setLimit}

/>


<div className="row">
  {pictures.map((item)=>(
    // <div className="col-4">
    // <img className="img" src={item.url} alt="pct"/>
    // </div>
<Pictures
url={item.url}
/>



  ))}
</div>


  </div>
  )
};

export default PublicImages;
