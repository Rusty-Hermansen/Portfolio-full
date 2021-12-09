import { useEffect, useState } from 'react';
import { Document, Outline, Page } from 'react-pdf/dist/esm/entry.webpack';
import image from "../aboutBackground.jpg"
import resume from '../RustyResumeDevops.pdf';

const About = () => {
    const [page, setPage] = useState(1);

    const onItemClick = ({ page: itemPageNumber }) => {
        setPage(itemPageNumber);
    }

    return (
        <div className="bg-fixed bg-cover" style={{backgroundImage: `url(${image})`}}>
            
            <div className="flex justify-center pt-8 bg-opacity-75  flex justify-center min-h-screen pt-12 lg:pt-36 px-8 bg-black bg-opacity-75">
                <Document file={resume} onItemClick={onItemClick}>
                    <Outline onItemClick={onItemClick} />
                    <Page pageNumber={page || 1} />
                </Document>
            </div>

        </div>
    )
}
export default About;