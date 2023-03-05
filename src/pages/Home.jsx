import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
    const posts = [
        {
            id: 1,
            title: "title 1",
            desc: "desc 1",
            img: "https://www.kesemhapri.co.il/wp-content/uploads/2020/08/f-5.jpg",
        },
        {
            id: 2,
            title: "title 2",
            desc: "desc 2",
            img: "https://eshuk.co.il/wp-content/uploads/2020/03/%D7%AA%D7%A4%D7%95%D7%97-%D7%92%D7%A8%D7%A0%D7%93-%D7%A1%D7%9E%D7%99%D7%AA-1-300x300.jpg",
        },
    ];
    return (
        <div className='home'>
            <div className="posts">
                {posts.map( post => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read Mor</button>
                        </div>
                    </div>
                ))

                }
            </div>
        </div>
    )
}

export default Home
