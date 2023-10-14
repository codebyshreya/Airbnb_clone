import Home from "./components/Home";
import Signupin from "./components/Signupin";
import HotelDetails from "./components/HotelviewSystem/HotelDetails";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Routing = () => {
  const approuter = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/hotel/:hotelid",
          element: <HotelDetails />,
        },
        {
          path: "/signup",
          element: <Signupin />,
        },
      ],
    },
  ]);
  return <RouterProvider router={approuter} />;
};

export default Routing;
