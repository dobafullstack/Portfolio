import "./App.css";
import { Navbar } from "./components/Common";
import Home from "./components/Home/index";
import About from "./components/About me/index";
import Resume from "./components/Resume/index";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact us";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Home />
            <About />
            <Resume />
            {/* <Contact /> */}

            <ToastContainer
                position='bottom-left'
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
}

export default App;
