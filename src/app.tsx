import { Route, Routes } from "react-router-dom"

import Navbar from "./Components/Navbar"
import Background from "./Components/Background"

import Home from "./Pages/Home"
import Issues from "./Pages/Issues"
import Credits from "./Pages/Credits"
import OnePager from "./Pages/OnePager"

export const App: React.FC = () => {
    return <>
        <Background/>

        {/* Navbar */}
        <div className='z-1 relative'>
          <Navbar/>
        </div>

        {/* Main page stuff */}
        <div className='z-0 pt-2'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/issues" element={<Issues/>}/>
            <Route path="/onepager" element={<OnePager />} />
            <Route path="/credits" element={<Credits/>}/>
          </Routes>
        </div>
    </>
}