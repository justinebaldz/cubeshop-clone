import React from 'react'
import MOYU from './moyu.png';
import QIYI from './qiyi.png';
import GAN from './gan.png';
import YUXIN from './yuxin.png';
import YJ from './yj.png';
import CUBICLE from './cubicle.png';

const Popular_brands = () => {
    return (
        <div className="w-full flex flex-col m-auto font-[poppins]">
            <div className="bg-white p-5">
                {/* title */}
                <span className="text-5xl text-center text-black pl-5">POPULAR BRANDS</span>
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-wrap md:flex-grow justify-center gap-2 m-2'>
                    <div className="card border-4 flex flex-col place-items-center">
                        <img width={180} src={MOYU} />
                        <span className='text-xl font-bold'>MOYU</span>
                    </div>
                    <div className="card border-4 flex flex-col place-items-center">
                        <img width={180} src={QIYI} />
                        <span className='text-xl font-bold'>QIYI MoFangGe</span>
                    </div>
                    <div className="card border-4">
                        <img width={180} src={GAN} />
                        <span className='text-xl font-bold'>GAN</span>
                    </div>
                    <div className="card border-4 flex flex-col place-items-center">
                        <img width={180} src={YUXIN} />
                        <span className='text-xl font-bold mx-auto'>Yuxin</span>
                    </div>
                    <div className="card border-4 flex flex-col place-items-center">
                        <img width={180} src={YJ} />
                        <span className='text-xl font-bold'>YJ</span>
                    </div>
                    <div className="card border-4 flex flex-col place-items-center">
                        <img width={180} src={CUBICLE} />
                        <span className='text-xl font-bold'>Cubicle</span>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Popular_brands;