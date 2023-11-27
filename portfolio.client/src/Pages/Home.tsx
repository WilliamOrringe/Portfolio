import city from "../assets/Group 2112city.svg";
//import city2 from "../assets/Group 2112city.svg";
function Home() {
    return (
        <div className="" >
            <div className="pt-0" >
                <img src={city} className="w-full"></img>

                <div className="absolute w-[500px] flex p-2 top-[100px] left-[250px]">
                    <h1 className="relative text-text-dark text-[60px] pb-5 flex drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,10)] ml-auto mr-auto">Arbiter Adjusters and Surveyors</h1>

            </div>
            </div>
             {/*<h2 className="text-text-dark text-center text- flex z-5 top-[37vh] left-[32vw] absolute font-outline-1">Specialising in Loss Adjusting, Claims Management & Risk Surveying</h2>*/}
            <br />

            <p className="text-text-dark px-5">We provide claims management and surveying solutions to the High Networth Market across the United Kingdom and beyond. We pride ourselves on our personal service and prompt actions.</p>
        </div>
  );
}

export default Home;