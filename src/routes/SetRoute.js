import FrontendRoute from './FrontendRoute';
import BackendRoute from './BackendRoute';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const SetRoute = () => {
    const frontendRoutes = FrontendRoute();
    const backendRoutes = BackendRoute();
    const combinedRoutes = createBrowserRouter([ ...frontendRoutes.routes, ...backendRoutes.routes]);

    return <RouterProvider router={combinedRoutes} />
     
}

export default SetRoute;
