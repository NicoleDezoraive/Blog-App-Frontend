import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Register = () => {
  const [file, setFile] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    img: file,
  });

  
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
  const [error,setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = e => {
    setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    // const imgURL= await upload();
    // setInputs(prev => ({
    //   ...prev,
    //   img: imgURL,
    // }))
    try{
      await axios.post("/api/auth/register", inputs)
      navigate("/login")
    }catch(err){
      setError(err.response.data);
    }
  }


  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='Your Username' name="username" onChange={handleChange}/>
        <input required type="email" placeholder='Your Email' name="email" onChange={handleChange}/>
        <input required type="password" placeholder='Your Password' name="password" onChange={handleChange}/>
        <input style={{display: 'none'}} type="file" name='img' id='file' onChange={e=>setFile(e.target.files[0])}/>
        <label className="file" for="file">Upload Image</label>
        <button onClick={handleSubmit}>Register</button>
        {error && <p>{error}</p>}
        <span>Do you have an account? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register
