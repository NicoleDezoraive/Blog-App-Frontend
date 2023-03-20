import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Menu = ({cat}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      const fetchData = async ()=>{
          try{
              const res = await axios.get(`/api/posts/?cat=${cat}`);
              setPosts(res.data);
          } catch(err){
              console.log(err);
          }
      };
      fetchData();
  }, [cat]);
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
  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
            <img src={`../upload/${post?.img}`} alt=""/>
            <Link className="link" to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            
            <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu
