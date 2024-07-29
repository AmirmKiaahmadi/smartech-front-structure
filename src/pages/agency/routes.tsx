import { RouteObject } from "react-router-dom";
import DashboardLayout from "../../layout/main";
import AgencyPage1 from "./page1";

export const agencyRoutes: RouteObject[] = [
    {
        path: '/agency',
        element: <DashboardLayout /> ,
        errorElement: <p>error page</p>,
        children: [
            {
                index: true,
                path: 'page1',
                element: <AgencyPage1 />,
            },
        ],
    },
]