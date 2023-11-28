import Routes from './Components/Routes';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  return (
    <div className='bg-background-dark/90 pb-5 pt-0 md:pt-[88px]'>
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
