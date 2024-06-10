import {Link} from "react-router-dom";
import {Button, Navbar} from "flowbite-react";
import {TextInput} from "flowbite-react"
import {HiSearch} from "react-icons/hi";
import {useLocation} from "react-router-dom";
import {FaSun} from "react-icons/fa";
import {IoMoon} from "react-icons/io5";
const Header = () => {
    const location = useLocation();
    const path = location.pathname
    return (
        <Navbar className="border-b-2">
            <Navbar.Brand as={Link} to="/" className="whitespace-nowrap px-2 py-1 flex items-center gap-1">
                <span className="bg-gradient-to-r to-green-500 from-purple-600 text-white px-2 py-1 rounded-lg">Prajwal&apos;s </span>
                <span>Blog</span>
            </Navbar.Brand>
            <form >
                <TextInput placeholder="Search" type="text" rightIcon={HiSearch} className="hidden lg:block" />
            </form>

            <Button className="lg:hidden block">
                <HiSearch />
            </Button>

            <div className="flex gap-3 items-center md:order-2">
                <Button color="gray" className="w-12 h-10 hidden sm:inline" pill>
                    <FaSun />
                </Button>

                <Button outline className="h-10" gradientDuoTone="purpleToBlue">
                    <Link to="/signIn">Sign In</Link>
                </Button>

                <Navbar.Toggle />

            </div>

            <Navbar.Collapse >
                <Navbar.Link as={Link} to="/" active={path == "/"}>
                    Home
                </Navbar.Link>

                <Navbar.Link as={Link} to="/about" active={path == "/about"}>
                    About
                </Navbar.Link>

                <Navbar.Link as={Link} to="/projects" active={path == "/projects"} >
                    Projects
                </Navbar.Link>


            </Navbar.Collapse>

        </Navbar>
    )

}

export default Header;
