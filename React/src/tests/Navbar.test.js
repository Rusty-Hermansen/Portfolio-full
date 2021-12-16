import {render, screen} from "@testing-library/react";
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from '../components/Navbar'


describe("Navbar tests", ()=>{

    test("Checks for Rusty Hermansen text", ()=>{
        render(
            <Router>
                <Navbar/>
            </Router>
            
        );

        const formElement = screen.getByText(/Rusty Hermansen/,);
        expect(formElement).toBeInTheDocument();

    })

    test("Checks for Portfolio Post text", ()=>{
        render(
            <Router>
                <Navbar/>
            </Router>
            
        );

        const formElement = screen.getByText(/Portfolio Post/,);
        expect(formElement).toBeInTheDocument();

    })

    test("Checks for About text", ()=>{
        render(
            <Router>
                <Navbar/>
            </Router>
            
        );

        const formElement = screen.getByText(/About/,);
        expect(formElement).toBeInTheDocument();

    })

    test("Checks for linkedin icon", ()=>{
        render(
            <Router>
                <Navbar/>
            </Router>
            
        );

        const formElement = screen.getByTestId('linkedin');
        expect(formElement).toContainHTML('<a aria-label="linkedin" class="social-icon mr-4" data-testid="linkedin" href="https://www.linkedin.com/in/rusty-hermansen/" style="display: inline-block; width: 45px; height: 45px; position: relative; overflow: hidden; vertical-align: middle;" target="_blank"><div class="social-container" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;"><svg class="social-svg" style="border-radius: 50%; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; fill-rule: evenodd;" viewBox="0 0 64 64"><g class="social-svg-background" style="transition: fill 170ms ease-in-out; fill: transparent;"><circle cx="32" cy="32" r="31" /></g><g class="social-svg-icon" style="transition: fill 170ms ease-in-out; fill: #fff;"><path d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z" /></g><g class="social-svg-mask" style="transition: fill 170ms ease-in-out; fill: #007fb1;"><path d="M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z" /></g></svg></div></a>');

    })



})