import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "@/pages/Home"
import DashBoard from "@/pages/Dashboard"
import Header from "@/components/Header"
import Projects from "@/pages/Projects"
function App() {
    return (
        <div >
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<DashBoard />} path="/dashboard" />
                    <Route element={<Projects />} path="/projects" />
                </Routes>

            </BrowserRouter>
        </div>

    )

}
export default App
