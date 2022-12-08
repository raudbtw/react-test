import React from 'react'

const ToolBar = ({openSidebar})=>{
    return(
        <div className='tool-bar'>
            <div className='burger' onClick={openSidebar}>
                <i class="ri-menu-line"></i>
            </div>
            <div className='title'>React App</div>
        </div>
    )
}

export default ToolBar