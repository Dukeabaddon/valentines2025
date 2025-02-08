import React from 'react';

const Start = ({ onClick }) => {
    return (
        <button onClick={onClick} className='text-white bg-[#FFB9EE] px-[30px] py-[10px] rounded-2xl border-[0.5px] border-[#907F7F] text-5xl hover:shadow-[4px_4px_0_#000] hover:-translate-y-1 duration-500 hover:bg-[#FF99CC] hover:cursor-pointer'>START</button>
    );
};

export default Start;