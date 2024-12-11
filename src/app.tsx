import { Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import { Background } from "./components/background"

import Home from "./pages/Home"
import Issues from "./pages/Issues"
import Summary from "./pages/Summary"

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
            <Route path="/summary" element={<Summary/>}/>
          </Routes>
        </div>
    </>
}