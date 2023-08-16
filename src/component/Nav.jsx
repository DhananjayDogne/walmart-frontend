import React from 'react';
import { BsGrid, BsUiRadiosGrid, BsCamera, BsCart } from 'react-icons/bs';
import { AiOutlineSearch, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';

const Nav = () => {
    return (
        <div className='bg-[#0071dc] sticky top-0 w-[100%] z-1 '>
            <header className="flex items-center  text-white justify-center px-3 py-2 border-b-[1px] border-white" >
                <img loading="lazy" alt="Walmart" className="mr-auto cursor-pointer rounded-full hover:bg-blue-800 py-2 px-3" height="40" src="//i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg" data-automation-id="header-walmartLogo" width="150" />

                <section className="lg:flex flex-row m-auto text-center hidden  cursor-pointer rounded-full hover:bg-blue-800 py-2 px-3">
                    <div className='w-[24px] m-auto'>
                                <BsGrid  />
                        </div>
                        <h3>Departments</h3>
                </section>
                <section className="lg:flex flex-row m-auto text-center hidden cursor-pointer rounded-full hover:bg-blue-800 py-2 px-3">
                    <div className='w-[24px] m-auto'>
                        <BsUiRadiosGrid />
                    </div>
                    <h3>Services</h3>
                </section>
                <section className="flex flex-row m-auto text-center">
                    <div className=' m-auto w-[100%] p-1 bg-white  flex flex-row rounded-full border-[1px] border-white overflow-hidden '>
                        <input type="text" className="text-black px-3 lg:w-[38rem] md:w-[16rem] sm:w-[9rem] py-1 outline-none " placeholder='Search everything at Walmart online and in store'/>
                        <button className="bg-yellow-400 rounded-full text-black p-2 mx-1 hover:bg-yellow-500"><AiOutlineSearch /></button>
                        <button className="bg-yellow-400 rounded-full text-black p-2 mx-1 hover:bg-yellow-500"><BsCamera /></button>
                        
                    </div>
                  
                </section>
                <section className="lg:flex flex-row m-auto text-center hidden cursor-pointer rounded-full hover:bg-blue-800 py-2 px-3">
                    <div className='w-[24px] m-auto'>
                        <AiOutlineHeart />
                    </div>
                    <div className='grid'>
                        <span className='font-thin text-sm h-4'>Reorder</span>
                        <h3>My Items</h3>
                    </div>
                </section>
                <section className="lg:flex flex-row m-auto text-center hidden cursor-pointer rounded-full hover:bg-blue-800 py-2 px-3">
                    <div className='w-[24px] m-auto'>
                        <AiOutlineUser />
                    </div>
                    <div className='grid'>
                        <span className='font-thin text-sm h-4'>Sign In</span>
                        <h3>Account</h3>
                    </div>
                    
                </section>
                <section className="flex flex-col m-auto text-center cursor-pointer rounded-full hover:bg-blue-800 py-2 px-3">
                    <div className=' m-auto '>
                        <BsCart className='w-[30px]' strokeWidth={'0.5px'} />
                    </div>
                    <div className='grid'>
                        <span className='font-thin text-xs h-4'>$0.00</span>
                   
                    </div>

                </section>
                
            </header>
            <div className='p-2 flex text-white text-center'>
                <div className='flex flex-row'>
                    <div className='flex flex-row border-r-[1px] border-white'>
                        <img className='mx-2' src='https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png' width={"25px"} />
                        <div className='text-sm'>How do you want your items ?</div>
                        <FiChevronDown className='my-auto mx-2' />
                    </div>
                    <div className='flex flex-row '>
                        <IoLocationOutline className='mt-1 mx-1 text-white' />
                        <div className='text-sm'>Sacramento, 95829</div>
                    </div>
                    <div className='flex flex-row mx-2'>
                        <img className='mx-1 mb-1' src="https://i5.walmartimages.com/dfw/4ff9c6c9-cc5a/k2-_cb966ffb-2cf6-4a8d-869c-27d99919cb16.v1.png" width="16" height="20" />
                        <div className='text-sm'>Sacramento Supercenter</div>
                    </div>
                </div>
                <div className='lg:flex hidden flex-row justify-between ml-auto'>
                    <h4 className="mx-3 cursor-pointer text-sm font-semibold">Deals</h4>
                    <h4 className="mx-3 cursor-pointer text-sm font-semibold">Grocery & Essentials</h4>
                    <h4 className="mx-3 cursor-pointer text-sm font-semibold">Back to School</h4>
                    <h4 className="mx-3 cursor-pointer text-sm font-semibold">Dorm Essentials</h4>
                    <h4 className="mx-3 cursor-pointer text-sm font-semibold">Fashion</h4>
                    <h4 className="mx-3 cursor-pointer text-sm font-semibold">Home</h4>
                    <h4 className="mx-3 cursor-pointer text-sm font-semibold">Electronics</h4>
                    <h4 className="mx-3 cursor-pointer text-sm font-semibold">Baby</h4>
                    <h4 className="mx-3 cursor-pointer text-sm font-semibold">Registry</h4>

                </div>
                
            </div>
        </div>
    )
}

export default Nav;