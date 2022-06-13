import React from 'react';
import cubeParts from './cube-parts.png';
import gettingStarted from './getting-started.png';
import stickers from './stickers.png';

const Guides = () => {
    return (
        <div className="w-full flex flex-col m-auto font-[poppins] mb-5">
            <div className='flex flex-row'>
                <div className='flex flex-wrap md:flex-grow justify-center gap-2 m-2'>
                    <div className="card border-4 items-center">
                        <img width={350} src={gettingStarted} /> 
                    </div>
                    <div className="card border-4">
                        <img width={350} src={cubeParts} /> 
                    </div>
                    <div className="card border-4">
                        <img width={350} src={stickers} /> 
                    </div> 
                </div>
            </div>
            
        </div>
    )
}

export default Guides