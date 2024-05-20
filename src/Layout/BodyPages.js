import React, { Children } from 'react';
import Navbar from '../components/Navbar';

const BodyPages = ({ children }) => {
    return (
        <div>
            <Navbar />
            {
                Children.map(children, child => (
                    <div className='bg-gray-100'>
                        <div className='max-w-screen-sm mx-auto'>
                            {child}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default BodyPages;