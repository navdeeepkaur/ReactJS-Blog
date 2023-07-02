import React, { useContext, useState } from "react";
import './write.css';
import axios from "axios";
import { Context } from "../../context/Context";


export default function Wite(){
    const [title, setTitle]= useState("");
    const [desc, setDesc]= useState("");
    const [categories, setCategories]=useState([]);
    const [file, setFile]= useState(null);
    const {user}=useContext(Context);
  
    // Add/Remove checked item from list
    const handleOnChange = (event) => {
      var updatedList = [...categories];
      if (event.target.checked) {
        updatedList = [...categories, event.target.value];
      } else {
        updatedList.splice(categories.indexOf(event.target.value), 1);
      }
      setCategories(updatedList);
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const newPost={
            username:user.username,
            title,
            desc,
            categories,
        };
        if(file){
            const data=new FormData();
            const fileName=Date.now() +file.name;
            data.append("name", fileName);
            data.append("file", file);
            newPost.photo=fileName;
            try{
                await axios.post("/upload", data);
            }catch(err){

            }
        };
        try{
            const res= await axios.post("/posts", newPost);
            window.location.replace("/post/"+res.data._id);
        }catch(err){
            
        }
    };
    return(
        <div className="write">
            {file && (
                <img src={URL.createObjectURL(file)}
                alt="" className="writeImg" />
            )}
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-regular fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" 
                    style={{display:"none"}} 
                    onChange={(e)=>setFile(e.target.files[0])}/>
                    <input type="text" 
                    placeholder="Title" className="writeInput" 
                    autoFocus={true} onChange={(e)=>setTitle(e.target.value)}/>
                    <br />
                </div>
                <p>Categories:</p>
                <div className="writeCheckbox">
                    <input type="checkbox" className="writeCheckboxIcon" id="food" value="food" onChange={handleOnChange}/>food
                    <input type="checkbox" className="writeCheckboxIcon" id="lifestyle" value="lifestyle" onChange={handleOnChange}/>lifestyle
                    <input type="checkbox" className="writeCheckboxIcon" id="music" value="music" onChange={handleOnChange}/>music
                    <input type="checkbox" className="writeCheckboxIcon" id="nature" value="nature" onChange={handleOnChange}/>nature
                    <input type="checkbox" className="writeCheckboxIcon" id="travel" value="travel" onChange={handleOnChange}/>travel
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story" 
                    type="text" className="writeInput writeText" 
                    onChange={(e)=>setDesc(e.target.value)}></textarea>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}