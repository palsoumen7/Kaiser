import React from 'react'

const Header = () => {
    return (
        <>
            <div className='px-6 p-2 bg-blue-600 text-white'>
                <h1>Data Maintenance Application (DMA V2)</h1>
                <h6>Version 1.1</h6>
                <div className="overflow-x-auto ">
                    <div className="flex gap-6">
                        <h6 >Home</h6>
                        <h6 className=''>Package Management</h6>
                        <h6>Utilies</h6>
                        <h6>Resource Management</h6>
                        <h6>Section</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header