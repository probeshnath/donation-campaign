import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import MainRoute from "./MainRoute";
import DonationDetail from "../Pages/Donation/DonationDetail";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const MainRouter = createBrowserRouter([
    {
        path: "/",
        element:<MainRoute></MainRoute>,
        errorElement: <ErrorPage />,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader:()=> fetch('/data.json')
            },
            {
                path: "/donation",
                element:<Donation></Donation>
            },
            {
                path:"/donations/:id",
                element:<DonationDetail />,
                loader:()=> fetch('/data.json')
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader:()=> fetch('/data.json')
            }
        ]
    },
   
])

export default MainRouter;