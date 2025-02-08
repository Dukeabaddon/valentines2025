import Card from "./Card.jsx";
import Cat from "./assets/oia-uia.gif";
import heart from "./assets/heart.png";
import btnBack from "./assets/btn-back.png";

function Valentines({onBackClick}){
    return(
        <Card>
            <div className='flex justify-center items-center h-full pb-20'>
                <img src={Cat} alt="cat" className="absolute mx-auto top-64 sm:top-14 w-36" />
                <div className="flex flex-col sm:flex-row items-center gap-8"> 
                    <img src={heart} alt="Heart" className="w-[150px] sm:w-auto"/>
                    <h2 className="sm:text-6xl text-2xl text-center text-[#FF5BAE]">Happy Valentine’s Day</h2>
                </div>

                <div className="flex absolute bottom-8 justify-self-start w-full mb-4 px-[104px]">
                    <img src={btnBack} alt="Button" className="w-13 hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out" onClick={onBackClick}/>
                </div>
            </div>
                
        </Card>
    )
}

export default Valentines