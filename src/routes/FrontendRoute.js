import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../frontend/webpage/home';
import FrontendMain from '../frontend/layout/FrontendMain';



const FrontendRoute = () => {

    const browserRouter = createBrowserRouter([
        {
            path: '/',
            element: <FrontendMain element={<Home/>} />,
            id: 'index'
        }
    ]);

    return browserRouter;
}

export default FrontendRoute;
