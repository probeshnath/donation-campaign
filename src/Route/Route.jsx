import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import MainRoute from "./MainRoute";


const MainRouter = createBrowserRouter([
    {
        path: "/",
        element:<MainRoute></MainRoute>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/donation",
                element:<Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            }
        ]
    },
   
])

export default MainRouter;