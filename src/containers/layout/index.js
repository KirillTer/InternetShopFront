import React from 'react'
import Sidebar from '../../components/sidebar/'
import Navigation from '../../components/navigation/'

const Layout = ({children}) => (<>
    <Navigation />
    <div className='view-container'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar />
                </div>
                <div className='col-md-9'>
                    {children}
                </div>
            </div>
        </div>
    </div>
</>)

export default Layout