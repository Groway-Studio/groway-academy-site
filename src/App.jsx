import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CoursesPage, HomePage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/cursos", element: <CoursesPage /> },
]);

const App = () => <RouterProvider router={router} />;

export default App;
