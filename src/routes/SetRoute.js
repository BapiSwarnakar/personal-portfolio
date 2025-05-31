import FrontendRoute from './FrontendRoute';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const SetRoute = () => {
    const frontendRoutes = FrontendRoute();
    const combinedRoutes = createBrowserRouter([ ...frontendRoutes.routes]);

    return <RouterProvider router={combinedRoutes} />
     
}

export default SetRoute;
