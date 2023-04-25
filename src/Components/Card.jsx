import React from 'react'
import "./card.css";
import { useNavigate } from "react-router-dom";

const Card = () => {

    const navigate = useNavigate();

    function handleNavigation() {
        navigate('/home', { replace: true })
    }

    return (
        <>
            <div className='px-6 p-2 bg-sky-600 text-white'>
                <h1 className="text">Data Maintenance Application (DMA V2)</h1>
                <h6 className="versionText">Version 1.1</h6>
                <div className="overflow-x-auto ">
                    <div className="flex gap-6">
                        <h6 className='tabText' >Home</h6>
                        <h6 className='tabText'>Package Management</h6>
                        <h6 className='tabText'>Utilies</h6>
                        <h6 className='tabText'>Resource Management</h6>
                        <h6 className='tabText'>Section</h6>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 py-6 md:px-6 px-4'>
                <div
                    class="rounded-lg bg-white p-6 shadow-lg flex items-center justify-center md:w-">
                    <h5 className='md:w-[200px] md:text-[20px] text-[16px] font-sans font-normal '>
                        Data Maintenance Application (DMA)
                    </h5>
                </div>

                <div
                    class="rounded-lg bg-white p-6 shadow-lg flex items-center justify-center md:w-">
                    <h5 className='md:w-[200px] md:text-[20px] text-[16px] font-sans font-normal '>
                        Generic Resource
                    </h5>
                </div>
                <div
                    class="rounded-lg bg-white p-6 shadow-lg flex items-center justify-center md:w-">
                    <h5 className='md:w-[200px] md:text-[20px] text-[16px] font-sans font-normal '>
                        Head Words
                    </h5>
                </div>
                <div
                    class="rounded-lg bg-white p-6 shadow-lg flex items-center justify-center md:w-">
                    <h5 className='md:w-[200px] md:text-[20px] text-[16px] font-sans font-normal '>
                        Legit Words
                    </h5>
                </div>
                <div
                    class="rounded-lg bg-white p-6 shadow-lg flex items-center justify-center md:w-">
                    <h5 className='md:w-[200px] md:text-[20px] text-[16px] font-sans font-normal '>
                        Reports
                    </h5>
                </div>
                <div
                    class="rounded-lg bg-white p-6 shadow-lg flex items-center justify-center md:w-">
                    <h5 className='md:w-[200px] md:text-[20px] text-[16px] font-sans font-normal '>
                        Rule Set Authoring
                    </h5>
                </div>
                <div
                    class="rounded-lg bg-white p-6 shadow-lg flex items-center justify-center md:w-">
                    <h5 className='md:w-[200px] md:text-[20px] text-[16px] font-sans font-normal '>
                        Stop Words
                    </h5>
                </div>
                <div
                    class="rounded-lg bg-white p-6 shadow-lg flex items-center justify-center md:w-" onClick={() => handleNavigation()}>
                    <h5 className='md:w-[200px] md:text-[20px] text-[16px] font-sans font-normal '>
                        Regex
                    </h5>
                </div>


            </div>
        </>
    )
}

export default Card