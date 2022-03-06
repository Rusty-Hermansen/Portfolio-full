import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import parse from 'html-react-parser'
import apiService from "../Services/apiService";
import image from "../background.jpg"

const SinglePost = () => {

    const [dbPost, setDbPost] = useState();
    const params = useParams();

    useEffect(() => {
        apiService.getPostById(params.id).then(r => setDbPost(r))
    }, [])

    return (
        <div className="bg-fixed bg-cover" style={{ backgroundImage: `url(${image})` }}>
            <section className="justify-center min-h-screen pt-12 lg:pt-36 px-8 bg-black bg-opacity-75">
                        <div className=" container text-white">
                            <div className="row">
                            
                   <h2 className="text-yellow-600 text-3xl py-2 px-3 font-bold">{dbPost?.title?? ""}</h2>
             
                               
                                <div className="col-12 p-5 bg-black bg-opacity-50">
                                    {parse(dbPost?.post ?? "")}
                                </div>
                            </div>
                        </div>
            </section>
        </div>
    )
}

export default SinglePost;