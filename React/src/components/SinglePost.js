import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import parse from 'html-react-parser'
import apiService from "../Services/apiService";
import image from "../background.jpg"
// import { posts } from '../posts/posts';

// const SinglePost = () => {
//     const params = useParams();

//     const post = posts[params.id]

//     return(
//         // <div className="justify-center bg-black p-12">
//         <section className="justify-center min-h-screen pt-12 lg:pt-36 px-8 bg-black bg-opacity-75">
//          <h1 className="text-5xl flex justify-center mb-12 text-white">{post.title}</h1>
//             {parse(post.body)}
//             {/* </div> */}
//         </section>
//     )
// }

//////////////////////////////////////This is for DATABASE INTERACTION///////////////////////////////////////
const SinglePost = () => {

    const [dbPost, setDbPost] = useState();
    const params = useParams();

    useEffect(() => {
        apiService.getPostById(params.id).then(r => setDbPost(r))
    }, [])
    console.log("database inside post", dbPost)

    return (
        <div className="bg-fixed bg-cover" style={{ backgroundImage: `url(${image})` }}>
            <section className="justify-center min-h-screen pt-12 lg:pt-36 px-8 bg-black bg-opacity-75">
                        <div className=" container text-white">
                            <div className="row">
                                <h1>{dbPost?.title?? ""}</h1>
                                <div className="col-12 p-5 bg-white bg-opacity-50">
                                    {parse(dbPost?.post ?? "")}
                                </div>
                            </div>
                        </div>
            </section>
        </div>
    )
}

export default SinglePost;