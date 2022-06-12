import React from 'react'
import logo from './cube.png';

const Header = () => {
    return (
        <div className="w-full">
            {/* <-- Header --> */}
            <div className="flex justify-center bg-black">
                <img src={logo} />
            </div>
        </div>
    )
}

export default Header