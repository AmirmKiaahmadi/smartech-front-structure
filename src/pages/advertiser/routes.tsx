
import { RouteObject } from 'react-router-dom'
import DashboardLayout from '../../layout/main'
import AdvertiserPage1 from './page1'

export const advertiserRoutes: RouteObject[] = [
    {
        path: '/advertiser',
        element: <DashboardLayout /> ,
        errorElement: <p>error page</p>,
        children: [
            {
                index: true,
                path: 'page1',
                element: <AdvertiserPage1 />,
            },
        ],
    },
]