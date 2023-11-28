import Services from '../Components/Services';
import Welcome from '../Components/Welcome';
import city from '../assets/Group 2112city.svg';
import Contact from './Contact';
function Home() {
  return (
    <div className=''>
      <div className='relative text-center'>
        <img src={city} className='w-full'></img>
        <h1
          className='absolute text-white sm:text-[30px] md:text-[50px]
         lg:text-[65px] xl:text-[80px] top-[50%] left-[50%] translate-x-[-50%]
          translate-y-[-75%] flex flex-col justify-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,10)]
           text-center sm:leading-10 md:leading-[63px] lg:leading-[80px] xl:leading-[90px]'
        >
          Arbiter Adjusters and Surveyors
        </h1>
      </div>
      <br />
      <Welcome />
      <Services />
      {/* 
      <p className='text-text-dark px-5'>
        We provide claims management and surveying solutions
        to the High Net worth Market across the United
        Kingdom and beyond. We pride ourselves on our
        personal service and prompt actions.
      </p> */}
      <Contact />
    </div>
  );
}

export default Home;
