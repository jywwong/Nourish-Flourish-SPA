import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import HeroContainer from './components/HeroContainer';
import About from './components/About';
import Highlights from './components/Highlights';
import Menu from './components/Menu';
import Lettucemeet from './components/Lettucemeet';
import Contact from './components/Contact';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/navbar" element={
                    <NavBar />
                } />
                <Route path="/herocontainer" element={
                    <HeroContainer />
                } />
                <Route path="/about" element={
                    <About />
                } />
                <Route path="/highlights" element={
                    <Highlights />
                } />
                <Route path="/menu" element={
                    <Menu />
                } />
                <Route path="/lettucemeet" element={
                    <Lettucemeet />
                } />
                <Route path="/contact" element={
                    <Contact />
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter