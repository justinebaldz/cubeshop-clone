import React from 'react';
import newArrival from './images/new-arrival.jpg';
import onSale from './images/on-sale.jpg';
import lube from './images/lube.png';
import speedLube from './images/speed_lube.jpg';
import allLube from './images/all-lubes.png';
import shades from './images/shades_guide.jpg';
import stickerPicker from './images/sticker.png';
import stickerApplication from './images/sticker_application.png';
import mats from './images/timers_mats.jpg';
import bottlesSyringes from './images/bottles_syringes.jpg';
import toolKits from './images/tool-kits.jpg';
import mustHave from './images/must-haves.jpg';
import hoodies from './images/hoodie.jpg';
import hats from './images/cap.jpg';
import phoneAccessories from './images/phone_accessories.jpg';
import backpack from './images/backpack.jpg';
import { BiCaretDown, BiSearch } from 'react-icons/bi';
import { Dropdown, DropdownButton } from 'react-bootstrap';
const Nav = () => {
    return (
        <div className="font-[poppins] h-[64px] w-full flex place-items-center justify-center bg-white shadow-md" >
            <div className="">
                <ul className="flex flex-row gap-10">
                    <li className="flex flex-col m-auto">
                        <div className="flex flex-row gap-1 place-items-center px-2 py-4 hover:bg-gray-500 hover:text-white rounded-xl">
                            <span className="text-lg text-center">PUZZLES</span>
                            <BiCaretDown />
                        </div>

                        <div className="flex flex-row gap-5 bg-gray-500 text-white p-5 sm:hidden">
                            <div className="menu-col-1">
                                <div className="flex flex-row gap-1 place-items-center">
                                    <h2 className="text-md text-start">CUSTOM CUBES</h2>
                                    <BiCaretDown />
                                </div>
                                <ul>
                                    <li className="text-sm hover:text-blue-300">Cosmic Collection</li>
                                    <li className="text-sm hover:text-blue-300">Supernova Series</li>
                                    <li className="text-sm hover:text-blue-300">Youcuber Series</li>
                                    <li className="text-sm hover:text-blue-300">View All</li>
                                </ul>
                            </div>
                            <div className="menu-col-2">
                                <div className="flex flex-row gap-1 place-items-center">
                                    <h2 className="text-md text-start">WCA PUZZLES</h2>
                                    <BiCaretDown />
                                </div>
                                <ul>
                                    <li><a href="#">2x2</a></li>
                                    <li><a href="#">3x3</a></li>
                                    <li><a href="#">4x4</a></li>
                                    <li><a href="#">5x5</a></li>
                                    <li><a href="#">6x6</a></li>
                                    <li><a href="#">7x7</a></li>
                                    <li><a href="#">Clock</a></li>
                                    <li><a href="#">Megaminx</a></li>
                                    <li><a href="#">Pyraminx</a></li>
                                    <li><a href="#">Skewb</a></li>
                                    <li><a href="#">Square-1</a></li>
                                    <li><a href="#">View All</a></li>
                                </ul>
                            </div>
                            <div className="menu-col-3">
                                <div className="flex flex-row gap-1 place-items-center">
                                    <h2 className="text-md text-start">MORE PUZZLES</h2>
                                    <BiCaretDown />
                                </div>
                                <ul>
                                    <li><a href="#">8x8 +</a></li>
                                    <li><a href="#">Cuboids</a></li>
                                    <li><a href="#">Gear Puzzles</a></li>
                                    <li><a href="#">Magic Panels</a></li>
                                    <li><a href="#">Shape Mods</a></li>
                                    <li><a href="#">Everything Else</a></li>
                                </ul>
                            </div>
                            <div className="menu-col-4">
                                <ul className="flex flex-col gap-2">
                                    <li><img src={newArrival} /></li>
                                    <li><img src={onSale} /></li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="flex flex-col m-auto">
                        <div className="flex flex-row gap-1 place-items-center px-2 py-4 hover:bg-gray-500 hover:text-white rounded-xl">
                            <span className="text-lg text-center">LUBRICANT</span>
                            <BiCaretDown />
                        </div>

                        <div className="menu_sub  hidden">
                            <div className="menu-col-21">
                                <h2 className="menu_category">COSMIC LUBE</h2>
                                <ul>
                                    <li><a href="#"><img src={lube} width="200px" height="200px" /></a></li>
                                </ul>
                            </div>
                            <div className="menu-col-22">
                                <h2 className="menu_category">SPEED LUBE</h2>
                                <ul>
                                    <li><a href="#"><img src={speedLube} width="200px" height="200px" /></a></li>
                                </ul>
                            </div>
                            <div className="menu-col-23">
                                <h2 className="menu_category">ALL LUBRICANT</h2>
                                <ul>
                                    <li><a href="#"><img src={allLube} width="200px" height="200px" /></a></li>
                                </ul>
                            </div>
                        </div>

                    </li>

                    <li className="flex flex-col m-auto">
                        <div className="flex flex-row gap-1 place-items-center px-2 py-4 hover:bg-gray-500 hover:text-white rounded-xl">
                            <span className="text-lg text-center">STICKERS</span>
                            <BiCaretDown />
                        </div>

                        <div className="menu_sub hidden">
                            <div className="menu-col-31">
                                <h2 className="menu_category">SHADES GUIDE</h2>
                                <ul>
                                    <li><a href="#"><img src={shades} width="200px" height="200px" /></a></li>
                                </ul>
                            </div>
                            <div className="menu-col-32">
                                <h2 className="menu_category">STICKER PICKER</h2>
                                <ul>
                                    <li><a href="#"><img src={stickerPicker} width="200px" height="200px" /></a></li>
                                </ul>
                            </div>
                            <div className="menu-col-33">
                                <h2 className="menu_category">APPLICATION TOOLS</h2>
                                <ul>
                                    <li><a href="#"><img src={stickerApplication} width="200px" height="200px" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="flex flex-col m-auto">
                        <div className="flex flex-row gap-1 place-items-center px-2 py-4 hover:bg-gray-500 hover:text-white rounded-xl">
                            <span className="text-lg text-center">ACCESSORIES</span>
                            <BiCaretDown />
                        </div>

                        <div className="menu_sub hidden">
                            <div className="menu-col-41">
                                <h2 className="menu_category">TIMER & MATS</h2>
                                <ul>
                                    <li><a href="#"><img src={mats} width="200px" height="200px" /></a></li>
                                </ul>
                            </div>
                            <div className="menu-col-42">
                                <h2 className="menu_category">BOTTLES & SYRINGES</h2>
                                <ul>
                                    <li><a href="#"><img src={bottlesSyringes} width="200px" height="200px" /></a></li>
                                </ul>
                            </div>
                            <div className="menu-col-43">
                                <h2 className="menu_category">TOOLS & KITS</h2>
                                <ul>
                                    <li><a href="#"><img src={toolKits} width="200px" height="200px" /></a></li>
                                </ul>
                            </div>
                            <div className="menu-col-44">
                                <h2 className="menu_category">MUST HAVES</h2>
                                <ul>
                                    <li><a href="#"><img src={mustHave} width="200px" height="200px" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </li>

                    <li className="flex flex-col m-auto">
                        <div className="flex flex-row gap-1 place-items-center px-2 py-4 hover:bg-gray-500 hover:text-white rounded-xl">
                            <span className="text-lg text-center">LIFESTYLE</span>
                            <BiCaretDown />
                        </div>

                        <div className="menu_sub hidden">
                            <div className="menu-col-51">
                                <h2 className="menu_category">HOODIES</h2>
                                <ul>
                                    <li><a href="#"><img src={hoodies} width="200px" height="200px" /></a></li>
                                </ul>
                            </div>
                            <div className="menu-col-52">
                                <h2 className="menu_category">HATS</h2>
                                <ul>
                                    <li><a href="#"><img src={hats} width="200px" height="200px" /></a></li>
                                </ul>
                            </div>
                            <div className="menu-col-53">
                                <h2 className="menu_category">PHONE ACCESSORIES</h2>
                                <ul>
                                    <li><a href="#"><img src={phoneAccessories} width="200px" height="200px" /></a></li>
                                </ul>
                            </div>
                            <div className="menu-col-54">
                                <h2 className="menu_category">BAGS & BACKPACKS</h2>
                                <ul>
                                    <li><a href="#"><img src={backpack} width="200px" height="200px" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="flex flex-col m-auto">
                        <div className="flex flex-row gap-1 place-items-center px-2 py-4 hover:bg-gray-500 hover:text-white rounded-xl ">
                            <BiSearch className="w-[1.5rem] h-[1.5rem]" />
                            <span className="text-lg text-center">SEARCH</span>
                        </div>

                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Nav