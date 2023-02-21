import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Img.css"
const MyImages = () => {

const[img,setImg]=useState([])
const [favimg,setFavImg]=useState([])

const getImg=async()=>{
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/?limit=10&page=0&order=DESC`,{
    headers:{
      "x-api-key":"live_hEYgIkqeMYImCR2W8YeRc1M1gpwKAA2LEYR09oCiCmMKfDvAI3T07kAs39Ye7mUV",
    },
   } );
  if (response.status === 200) {
    const data = await response.json();
    setImg(data)
}
}
useEffect(()=>{
  getImg();
  getFav()
},[])

const deleteImg=async(id)=>{
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/${id}`,{
      method:"DELETE",
    headers:{
      "Content-Type": "application/json",
      "x-api-key":"live_hEYgIkqeMYImCR2W8YeRc1M1gpwKAA2LEYR09oCiCmMKfDvAI3T07kAs39Ye7mUV",
    },
   } );
  if (response.status >199 && response.status<300) {
const copyImg=img.filter((item)=>item.id!==id)
setImg([...copyImg])
deleteFav(id)
    }


}


const addFav=async(id)=>{ 
  const response = await fetch(`https://api.thecatapi.com/v1/favourites/`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key":"live_hEYgIkqeMYImCR2W8YeRc1M1gpwKAA2LEYR09oCiCmMKfDvAI3T07kAs39Ye7mUV",

  },
  body: JSON.stringify({ image_id:id }),
})
getFav()
};


const getFav=async()=>{
  const response = await fetch(
    `https://api.thecatapi.com/v1/favourites`,{
    headers:{
      "x-api-key":"live_hEYgIkqeMYImCR2W8YeRc1M1gpwKAA2LEYR09oCiCmMKfDvAI3T07kAs39Ye7mUV",
    },
   } );
  if (response.status === 200) {
    const data = await response.json();
    setFavImg(data)
}
// for(let i=0;i<favimg.length;i++){
//   if(favimg.url !==img.url){
// return ""
//   }
// }
}


const deleteFav=async(image_id)=>{
  let id=0
  for(let i=0;i<favimg.length;i++){
if(image_id===favimg[i].image_id){
  id=favimg[i].id
}if(id){
  
}
  }
  const response = await fetch(
    `https://api.thecatapi.com/v1/favourites/${id}`,{
      method:"DELETE",
    headers:{
      "Content-Type": "application/json",
      "x-api-key":"live_hEYgIkqeMYImCR2W8YeRc1M1gpwKAA2LEYR09oCiCmMKfDvAI3T07kAs39Ye7mUV",
    },
   } );
  if (response.status >199 && response.status<300) {
// const copyFav=favimg.filter((item)=>item.id!==id)
// setFavImg([...copyFav])
getFav()

  }

}


const deleteImages=(()=>{


})




  return (
  <div>

   
    
  
      {/* <Carousel> */}
<div className="row">
  {img.map((img,index)=>(
    <div className="col-4">
<img key={index} src={img.url} alt="img" className="pht" />
<button  onClick={()=>deleteImg(img.id)} className="btn-custom">Delete</button>
<button  onClick={()=>addFav(img.id)} className="btn-custom2">Favorite</button>

</div>

  ))}
  </div>
  <div>
  <h1>Favourite IMG:</h1>
  {favimg.filter((item)=>item.image.url).map((fav)=>(

   <div className="col-4">
   <img  src={fav.image.url} alt="img" className="pht" />
   <button  onClick={()=>deleteFav(fav.image_id)} className="btn-custom">Delete</button>
  </div>
  ))}
  </div>
  </div>



  
  )
};

export default MyImages;
