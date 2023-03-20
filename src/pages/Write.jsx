import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios"
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';

function Write() {
    const state = useLocation().state;
    const [value, setValue] = useState(state?.desc || '');
    const [title, setTitle] = useState(state?.title || '');
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || '');
  
    const navigate = useNavigate();
    const upload = async ()=>{
        try{
            const formData = new FormData();
            formData.append("file", file);
            const res = await axios.post("/api/upload", formData);
            return res.data;
        }catch(err){
            console.log(err);
        }
    };

    const handleClick = async e=>{
        e.preventDefault();
        const imgURL= await upload();
        try {
            state ? await axios.put(`/api/posts/${state.id}`, {
                title, desc:value, cat, img:file ? imgURL : ""
            }) 
            : await axios.post(`/api/posts/`, {
                title, desc:value, cat, img:file ? imgURL : "", date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
            }) ;
            navigate("/");

        } catch(err) {
            console.log(err);

        }
    }
  
    return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' value={title} onChange={e=>setTitle(e.target.value)}/>
        <div className="editorContainer">
            <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
            <h1>Publish</h1>
            <span>
                <b>Status: </b> Draf
            </span>
            <span>
                <b>Visibility: </b> Public
            </span>
            <input style={{display: 'none'}} type="file" name='' id='file' onChange={e=>setFile(e.target.files[0])}/>
            <label className="file" for="file">Upload Image</label>
            <div className="buttons">
                <button>Save as a draft</button>
                <button onClick={handleClick}>Publish</button>
            </div>
        </div>
        <div className="item">
            <h1>Category</h1>
            
            <div className='cat'>
                <input type="radio" checked={cat === "art"} name='cat' value="art" id="art" onChange={e=>setCat(e.target.value)}/>
                <label htmlFor="art">Art</label>
            </div>
            <div className='cat'>
                <input type="radio" checked={cat === "sience"} name='cat' value="sience" id="sience" onChange={e=>setCat(e.target.value)}/>
                <label htmlFor="sience">Sience</label>
            </div>
            <div className='cat'>
                <input type="radio" checked={cat === "technology"} name='cat' value="technology" id="technology" onChange={e=>setCat(e.target.value)}/>
                <label htmlFor="technology">Technology</label>
            </div>
            <div className='cat'>
                <input type="radio" checked={cat === "cinema"} name='cat' value="cinema" id="cinema" onChange={e=>setCat(e.target.value)}/>
                <label htmlFor="cinema">Cinema</label>
            </div>
            <div className='cat'>
                <input type="radio" checked={cat === "design"} name='cat' value="design" id="design" onChange={e=>setCat(e.target.value)}/>
                <label htmlFor="design">Design</label>
            </div>
            <div className='cat'>
                <input type="radio" checked={cat === "food"} name='cat' value="food" id="food" onChange={e=>setCat(e.target.value)}/>
                <label htmlFor="food">Food</label>
            </div>
            <div className='cat'>
                <input type="radio" checked={cat === "health"} name='cat' value="health" id="health" onChange={e=>setCat(e.target.value)}/>
                <label htmlFor="health">Health</label>
            </div>
            <div className='cat'>
                <input type="radio" checked={cat === "fashion"} name='cat' value="fashion" id="fashion" onChange={e=>setCat(e.target.value)}/>
                <label htmlFor="fashion">Fashion</label>
            </div>
            <div className='cat'>
                <input type="radio" checked={cat === "religion"} name='cat' value="religion" id="religion" onChange={e=>setCat(e.target.value)}/>
                <label htmlFor="religion">Religion</label>
            </div>
            <div className='cat'>
                <input type="radio" checked={cat === "career"} name='cat' value="career" id="career" onChange={e=>setCat(e.target.value)}/>
                <label htmlFor="career">Career</label>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Write
