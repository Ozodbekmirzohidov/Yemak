import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { Home, RestaurantDetail } from "../pages/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "restaurant/:id", element: <RestaurantDetail /> },
    ],
  },
]);
