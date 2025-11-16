import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddReview from "../pages/AddReview";
import AllReviews from "../pages/AllReviews";
import DetailsPage from "../pages/DetailsPage";
import PrivateRoute from "./PrivateRoute";
import MyReviews from "../pages/MyReviews";
import Update from "../pages/Update";
import MyFavourites from "../pages/MyFavourites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/addReview",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/allReviews",
        Component: AllReviews,
      },
      {
        path: "/reviews/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-ten-server-gamma.vercel.app/reviews/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <DetailsPage></DetailsPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/myReviews",

        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-ten-server-gamma.vercel.app/reviews/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path:"/favourites",
        element:<PrivateRoute><MyFavourites></MyFavourites></PrivateRoute>
      }
    ],
  },
]);
