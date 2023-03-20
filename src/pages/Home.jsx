import React, { useState , useEffect, useContext} from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from "axios"
import { AuthContext } from '../context/authContext'

const Home = () => {
    const [posts, setPosts] = useState([]);
    const cat = useLocation().search;
    const {currentUser} = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`/api/posts${cat}`);
                setPosts(res.data);
            } catch(err){
                console.log(err)
            }
        };
        fetchData();
    }, [cat])

    // const posts = [
    //     {
    //         id: 1,
    //         title: "title 1",
    //         desc: "desc 1",
    //         img: "https://www.kesemhapri.co.il/wp-content/uploads/2020/08/f-5.jpg",
    //     },
    //     {
    //         id: 2,
    //         title: "title 2",
    //         desc: "desc 2",
    //         img: "https://eshuk.co.il/wp-content/uploads/2020/03/%D7%AA%D7%A4%D7%95%D7%97-%D7%92%D7%A8%D7%A0%D7%93-%D7%A1%D7%9E%D7%99%D7%AA-1-300x300.jpg",
    //     },
    // ];

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
    }
    return (
        <div className='home'>
            <div className="posts">
                {posts.map( post => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={`./upload/${post.img}`} alt="" />
                        </div>
                        <div className="content">
                        <Link className="link" to={currentUser ? `/post/${post.id}` : `/login`}>
                            <h1>{post.title}</h1>
                        </Link>
                            <p>{getText(post.desc).substring(0,200) + "..." }</p>
                            <p>
                            
                                 <a href={`/post/${post.id}`}><button>Read Mor</button></a>
                            </p>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
