import { Navigate, createBrowserRouter } from 'react-router-dom'
import { advertiserRoutes } from './pages/advertiser/routes'
import { agencyRoutes } from './pages/agency/routes'


export const routes = createBrowserRouter([
    ...advertiserRoutes,
    ...agencyRoutes
])
