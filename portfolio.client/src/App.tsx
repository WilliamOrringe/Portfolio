import Routes from './Components/Routes';
import Navbar from './Components/Navbar';
import './App.css';
import Footbar from './Components/Footbar';

function App() {
  return (
    <div className='bg-background-dark/90 '>
      <Navbar />
      <Routes />
      <Footbar />
    </div>
  );
}

export default App;
