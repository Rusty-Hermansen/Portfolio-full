import {useState, useEffect} from 'react';
import { Link} from 'react-router-dom'
import apiService from '../Services/apiService';
import { posts } from '../posts/posts';
import image from "../background.jpg"

/////////////////////This piece handles RETRIEVAL FROM DATABASE////////////////////////
const Post = () =>{

    const [dbPosts, setDbPosts] = useState([]);

    useEffect(() => {
        apiService.getPosts().then(r => setDbPosts(r))
    }, [])
   
    return(
        <div className="min-h-screen p-12 bg-fixed bg-cover bg-black bg-opacity-75" style={{backgroundImage: `url(${image})`}}> 
            <section className = "container mx-auto">
                <h1 className="text-5xl flex justify-center mb-12 text-white">Portfolio Posts</h1>
                
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
             
                    { dbPosts && dbPosts.map((post)=> (                                                                                                   
                       <article>
                        <Link to={"/singlepost/" + post.id} key={post.id} state={{id: post.id}}>                                                            
                          <span className="block h-64 relative rouded shadow leading-snug bg-white border-l-8 border-black" key={post.id}>                  
                             <img src={post.post_img} alt={post.alt} className="w-full h-full object-contain absolute"/>                                    
                             <span className="block relative h-full flex justify-end items-end pr-4 pb-4">                                                  
                                <h3 className="text-white text-lg font-blog px-3 py-4 bg-black text-white bg-opacity-75 rounded" >{post.title} </h3>        
                             </span>                                                                                                                        
                             </span>                                                                                                                        
                        </Link>
                    </article> 
                    ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Post;