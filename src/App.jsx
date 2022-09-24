import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CoursesPage, HomePage, LoginPage, RegisterPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  { path: "/cursos", element: <CoursesPage /> },
  // { path: "/registro", element: <RegisterPage /> },
  // { path: "/iniciar-sesion", element: <LoginPage /> },
]);

const App = () => <RouterProvider router={router} />;

export default App;
