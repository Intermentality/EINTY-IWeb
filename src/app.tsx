import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Issues from "./Pages/Issues"
import Summary from "./Pages/Summary"

export const App: React.FC = () => {
    return <>

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