import Card from "./Card.jsx";

function Gallery({ onBackClick, onMessageClick }) {
    return (
        <Card className='flex justify-center'>
            <h1 className="text-3xl text-[#FF5BAE] text-center pt-6">US</h1>
            <div className="w-[80%] h-[70%] mx-auto my-3 overflow-y-scroll">
                <div className="columns-2">
                    <img className="mb-2" src="/assets/img1.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img2.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img3.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img4.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img5.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img6.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img7.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img8.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img9.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img10.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img11.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img12.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img13.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img14.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img15.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img16.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img17.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img18.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img19.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img20.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img21.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img22.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img23.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img24.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img25.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img26.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img27.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img28.jpg" alt="image" />
                    <img className="mb-2" src="/assets/img29.jpg" alt="image" />
                </div>
            </div>
            <h4 className="text-3xl text-[#FF5BAE] text-center pt-6">pogi mo</h4>
            <div className="flex absolute bottom-8 justify-between w-full mb-4 px-[104px]">
                <img src="/assets/btn-back.png" alt="Button" className="w-13 hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out" onClick={onBackClick}/>
                <img src="/assets/btn-next.png" alt="Button" className="w-13 hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out" onClick={onMessageClick}/>
            </div>
        </Card>
    )
}

export default Gallery