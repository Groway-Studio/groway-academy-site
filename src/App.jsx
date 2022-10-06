import { RouterProvider, createHashRouter } from "react-router-dom";

import {
  CoursesPage,
  HomePage,
  NotFound,
  // LoginPage,
  // RegisterPage,
} from "./pages";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
  },
  { path: "/cursos", element: <CoursesPage />, errorElement: <NotFound /> },
  // { path: "/registro", element: <RegisterPage /> },
  // { path: "/iniciar-sesion", element: <LoginPage /> },
]);

const App = () => <RouterProvider router={router} />;

export default App;
