import Routes from './Components/Routes';
import Navbar from './Components/Navbar';
import './App.css'

function App() {

    return (
        <div className="bg-background-dark/90 w-[100vw] h-[100vh]">
            <Navbar />
            <Routes />
        </div>
    );
}

export default App
