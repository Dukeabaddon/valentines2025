import Card from "./Card.jsx";

function Gallery({ onBackClick, onMessageClick }) {
    return (
        <Card className='flex justify-center'>
            <h1 className="text-3xl text-[#FF5BAE] text-center pt-6">US</h1>
            <div className="w-[80%] h-[70%] mx-auto my-3 overflow-y-scroll">
                <div className="columns-2">
                    <img className="mb-2" src="/public/img (1).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (2).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (3).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (4).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (5).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (6).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (7).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (8).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (9).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (10).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (11).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (12).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (13).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (14).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (15).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (16).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (17).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (18).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (19).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (20).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (21).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (22).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (23).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (24).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (25).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (26).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (27).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (28).jpg" alt="image" />
                    <img className="mb-2" src="/public/img (29).jpg" alt="image" />
                </div>
            </div>
            <h4 className="text-3xl text-[#FF5BAE] text-center pt-6">pogi mo</h4>
            <div className="flex absolute bottom-8 justify-between w-full mb-4 px-[104px]">
                <img src="/public/btn-back.png" alt="Button" className="w-13 hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out" onClick={onBackClick}/>
                <img src="/public/btn-next.png" alt="Button" className="w-13 hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out" onClick={onMessageClick}/>
            </div>
        </Card>
    )
}

export default Gallery