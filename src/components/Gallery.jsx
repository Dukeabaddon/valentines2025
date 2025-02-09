import Card from "./Card.jsx";
import btnBack from "../assets/btn-back.png";
import btnNext from "../assets/btn-next.png";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";
import img20 from "../assets/img20.jpg";
import img21 from "../assets/img21.jpg";
import img22 from "../assets/img22.jpg";
import img23 from "../assets/img23.jpg";
import img24 from "../assets/img24.jpg";
import img25 from "../assets/img25.jpg";
import img26 from "../assets/img26.jpg";
import img27 from "../assets/img27.jpg";
import img28 from "../assets/img28.jpg";
import img29 from "../assets/img29.jpg";

function Gallery({ onBackClick, onMessageClick }) {
    return (
        <Card className='flex justify-center'>
            <h1 className="text-3xl text-[#FF5BAE] text-center pt-6">US</h1>
            <div className="w-[80%] h-[70%] mx-auto my-3 overflow-y-scroll">
                <div className="columns-2">
                    <img className="mb-2" src={img1} alt="image" />
                    <img className="mb-2" src={img2} alt="image" />
                    <img className="mb-2" src={img3} alt="image" />
                    <img className="mb-2" src={img4} alt="image" />
                    <img className="mb-2" src={img5} alt="image" />
                    <img className="mb-2" src={img6} alt="image" />
                    <img className="mb-2" src={img7} alt="image" />
                    <img className="mb-2" src={img8} alt="image" />
                    <img className="mb-2" src={img9} alt="image" />
                    <img className="mb-2" src={img10} alt="image" />
                    <img className="mb-2" src={img11} alt="image" />
                    <img className="mb-2" src={img12} alt="image" />
                    <img className="mb-2" src={img13} alt="image" />
                    <img className="mb-2" src={img14} alt="image" />
                    <img className="mb-2" src={img15} alt="image" />
                    <img className="mb-2" src={img16} alt="image" />
                    <img className="mb-2" src={img17} alt="image" />
                    <img className="mb-2" src={img18} alt="image" />
                    <img className="mb-2" src={img19} alt="image" />
                    <img className="mb-2" src={img20} alt="image" />
                    <img className="mb-2" src={img21} alt="image" />
                    <img className="mb-2" src={img22} alt="image" />
                    <img className="mb-2" src={img23} alt="image" />
                    <img className="mb-2" src={img24} alt="image" />
                    <img className="mb-2" src={img25} alt="image" />
                    <img className="mb-2" src={img26} alt="image" />
                    <img className="mb-2" src={img27} alt="image" />
                    <img className="mb-2" src={img28} alt="image" />
                    <img className="mb-2" src={img29} alt="image" />
                </div>
            </div>
            <h4 className="text-3xl text-[#FF5BAE] text-center pt-6">pogi mo</h4>
            <div className="flex absolute bottom-8 justify-between w-full mb-4 px-[104px]">
                <img src={btnBack} alt="Button" className="w-13 hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out" onClick={onBackClick}/>
                <img src={btnNext} alt="Button" className="w-13 hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out" onClick={onMessageClick}/>
            </div>
        </Card>
    )
}

export default Gallery