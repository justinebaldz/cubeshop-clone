import React from 'react';
import YLM from './ylm.png';
import MNX from './mega.png';
import GTS from './gts3m.png';
import AUSO from './auso.png';
import RS3 from './rs3.png';

const Popular_Items = () => {
    return (
        <div className="w-full flex flex-col m-auto font-[poppins]">
            <div className="bg-white p-5">
                {/* title */}
                <span className="text-5xl text-center text-black pl-5">POPULAR ITEMS</span>
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-wrap md:flex-grow justify-center gap-2 m-2'>
                    <div className="card border-4 items-center">
                        <img width={300} src={YLM}/>
                        <span className='text-xl font-bold'>Yuxin's Little Magic</span>
                        <p className='text-xl'>₱ 250.00</p> 
                    </div>
                    <div className="card border-4">
                        <img width={300} src={MNX}/>
                        <span className='text-xl font-bold'>Qiyi Megaminx</span>
                        <p className='text-xl'>₱ 700.00</p>
                    </div>
                    <div className="card border-4">
                        <img width={300} src={GTS}/>
                        <span className='text-xl font-bold'>MOYU Weilong Gts3m</span>
                        <p className='text-xl'>₱ 1, 300.00</p>
                    </div>
                    <div className="card border-4">
                        <img width={300} src={AUSO}/>
                        <span className='text-xl font-bold'>MOYU Auso WR M</span>
                        <p className='text-xl'>₱ 2, 100.00</p>
                    </div> 
                </div>
            </div>
            <div className="p-5 m-auto">
                {/* show more */}
                <button className="w-[300px] items-center m-auto text-lg p-2 rounded-xl border-black border-2 hover:bg-black hover:text-white">SHOW MORE</button>
            </div>
        </div>
    )
}

export default Popular_Items