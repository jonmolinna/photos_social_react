import React, { Children } from 'react';
import Navbar from '../components/Navbar';

const BodyPages = ({ children }) => {
    return (
        <div>
            <Navbar />
            {
                Children.map(children, child => (
                    <div>
                        {child}
                    </div>
                ))
            }
        </div>
    )
}

export default BodyPages;