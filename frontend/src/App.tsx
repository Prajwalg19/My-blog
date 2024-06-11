import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "@/pages/Home"
import DashBoard from "@/pages/Dashboard"
import Header from "@/components/Header"
import Projects from "@/pages/Projects"
import Register from "@/pages/Register"
import {Toaster} from "react-hot-toast"
import Login from "@/pages/Login"
function App() {
    return (
        <div >
            <BrowserRouter>
                <Toaster position="bottom-center" />
                <Header />
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<DashBoard />} path="/dashboard" />
                    <Route element={<Projects />} path="/projects" />
                    <Route element={<Register />} path="/register" />
                    <Route element={<Login />} path="/login" />
                </Routes>

            </BrowserRouter>
        </div>

    )

}
export default App
