import React from 'react';
import { Outlet } from 'react-router-dom';

// Outlet -> permite tener rutas hijas

const Layout = () => {
    return (
        <main>
            <Outlet />
        </main>
    )
}

export default Layout;