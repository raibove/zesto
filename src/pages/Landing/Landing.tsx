import landingBg from "../../assets/landing.jpg";

const Landing = ()=>{
    return(
    <div className="bg-landing bg-repeat-round grow flex justify-center items-center flex-col">
        <h1 className="text-white text-5xl font-bold text-center">Spark Meaningful <br/> Conversations <br/> with Zesto</h1>
        <div>
            <input className="p-2 text=lg rounded-md"/>
            <button className="bg-orange-600 text-white m-10 rounded-md text-lg py-2 px-4 ">Start</button>
        </div>
    </div>
    )
}

export default Landing;