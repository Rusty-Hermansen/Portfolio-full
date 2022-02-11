import image from "../background.jpg"
import resume from '../RustyResumeDevops.pdf';
import { useEffect, useState } from 'react';
import { Document, Outline, Page } from 'react-pdf/dist/esm/entry.webpack';

const Home = () =>{

    const [page, setPage] = useState(1);

    const onItemClick = ({ page: itemPageNumber }) => {
        setPage(itemPageNumber);
    }

    return(
        <div className="bg-fixed bg-cover" style={{backgroundImage: `url(${image})`}}>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-36 px-8 bg-black bg-opacity-75">
                <div className="container">
                    <div className="col-12">
                        <h1 className="text-6xl text-white font-bold leading-none lg:leading-snug home-name">
                    Hi, I'm <span className="text-yellow-600">Rusty!</span>
                </h1>
                <p className="text-gray-400 pt-6">
                I'm a software engineering major at Snow College with an interest in DevOps 
                and a desire to build excellent software. I love having the opportunity to learn and grow in the wonderful world 
                of tech and am excited to dig in and learn! I love learning and desire nothing more than the opportunity to work, 
                learn, and become as excellent as I can possibly be. As a person, I believe in doing things to the very best of my 
                abilities and taking pride in my work. I also believe that we as people lift each other up, we all have our own individual 
                strengths and we can help each other become stronger in areas that we may be weak in. If we all lift those around us, we all become excellent together. 
                    </p>

            
                    </div>
                
               </div>
           
               
                
            </section>
               <div data-testid="resume" className="flex justify-center pt-8 bg-opacity-75 min-h-screen pt-12 lg:pt-36 px-8 bg-black bg-opacity-75">
                <Document file={resume} onItemClick={onItemClick}>
                    <Outline onItemClick={onItemClick} />
                    <Page pageNumber={page || 1} />
                </Document>
            </div>
        </div>
    )
}
export default Home;
