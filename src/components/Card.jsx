import React from 'react';

function Card({ children }) {
    return (
        <div className="rounded-3xl bg-[#FFECEC] h-[90vh] w-[60vw] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] relative">
            {children}
        </div>
    );
}
export default Card