import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import MainGreet from './components/mainGreet/mainGreet'

function App() {
    return(
        <>
            <header>
                <Navbar></Navbar>  
            </header>
            <section className='main-section1'>
                <MainGreet></MainGreet>
            </section>
        </>
    )
}

export default App
