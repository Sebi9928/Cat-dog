import React, { useState } from "react";

const Upload = () => {

const[selectedFile,setSelectedFile]=useState(null)




const handleUpload=(e)=>{
  setSelectedFile(e.target.files[0])
}

const handleSubmit=async()=>{
  const formData=new FormData()
formData.append("file",selectedFile)
  const response = await fetch(`https://api.thecatapi.com/v1/images/upload`, {
    method: "POST",
    headers: {
      Accept:"application/json",
      "x-api-key":"live_hEYgIkqeMYImCR2W8YeRc1M1gpwKAA2LEYR09oCiCmMKfDvAI3T07kAs39Ye7mUV",
    },
    body: formData,
  });

}



  return (
  <div className="container">
  <div>
    <input type="file" className="form-control" onChange={handleUpload}/>
    <label>Upload picture</label>
    <button onClick={handleSubmit}>Upload</button>
    </div>
  </div>
)};

export default Upload;
