import {render, screen} from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom'
import Post from '../components/Post'
import '@testing-library/jest-dom/extend-expect'

describe("Post tests", ()=>{

    test("Checks for Rusty Hermansen text", ()=>{
        render(
            <Router>
                <Post/>
            </Router>
            
        );

        const formElement = screen.getByText(/Portfolio Posts/,);
        expect(formElement).toBeInTheDocument();

    })

})