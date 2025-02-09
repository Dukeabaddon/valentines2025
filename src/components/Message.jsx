import Card from "./Card.jsx";

function Message({onBackClick, onValentineClick}){
    return(
        <Card>
            <div className="flex items-center gap-3 pl-14 pt-8 mb-5">
                <img src="/assets/mail.png"alt="Mail" className="sm:w-[55px] w-[45px]"/>
                <p className="sm:text-[26px] text-xl">To my marilag</p>
            </div>
            <div className="sm:w-[70%] w-[90%] mx-auto bg-[#FBF6F6] border-[#FCAFAF] border-4 rounded-3xl sm:p-11 p-7">
                <p className="sm:text-3xl text-[22px]">Goodnight My marilag💚
                    Pahinga na po ha? At maaga pa mamaya. Tandaan mo palagi na di ka naging abala sa akin ha? Mas pabor ako na Sunduin kita doon atleast safe ka na nakauwi at syempre nakasama din kita I love you so much. Maaga gumising ha? Sweetdreams and Godbless. I love youu so much! 😘💚🥰🥰</p>
                </div>

            <div className="flex absolute bottom-8 justify-between w-full mb-4 px-[104px]">
                <img src="/assets/btn-back.png" alt="Button" className="w-13 hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out" onClick={onBackClick}/>
                <img src="/assets/btn-next.png" alt="Button" className="w-13 hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out" onClick={onValentineClick}/>
            </div>
        </Card>
    )
}

export default Message