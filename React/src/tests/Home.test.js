import {render, screen} from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom'
import Home from '../components/Home'
import '@testing-library/jest-dom/extend-expect'

describe("Home tests", ()=>{

    test("Checks for Hi, I'm Rusty! text", ()=>{
        render(
            <Router>
                <Home/>
            </Router>
            
        );

        const formElement = screen.getByText(/Rusty!/,);
        expect(formElement).toBeInTheDocument();

    })

    test("Checks for intro body text", ()=>{
        render(
            <Router>
                <Home/>
            </Router>
            
        );

        const formElement = screen.getByText(/I'm a software engineering major at Snow College/,);
        expect(formElement).toBeInTheDocument();

    })

    test("Checks for spare time header text", ()=>{
        render(
            <Router>
                <Home/>
            </Router>
            
        );

        const formElement = screen.getByText(/In My Spare Time/,);
        expect(formElement).toBeInTheDocument();

    })

    test("Checks for spare time body text", ()=>{
        render(
            <Router>
                <Home/>
            </Router>
            
        );

        const formElement = screen.getByText(/Ever since I was a small boy/,);
        expect(formElement).toBeInTheDocument();

    })

  



})