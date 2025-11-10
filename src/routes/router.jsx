import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddReview from "../pages/AddReview";
import AllReviews from "../pages/AllReviews";
import DetailsPage from "../pages/DetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            index:true,
            Component:Home
        }, 
        {
            path:'/login',
            Component: Login
        },
        {
            path:'/register',
            Component:Register
        },
        {
          path:'/addReview',
          element:<AddReview></AddReview>
        },
        {
          path:'/allReviews',
          Component:AllReviews
        },
        {
          path:'/reviews/:id',
          loader:({params})=>fetch(`http://localhost:3000/reviews/${params.id}`),
          Component:DetailsPage
        }

    ]
  },
]);