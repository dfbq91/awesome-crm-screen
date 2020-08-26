// Layouts
import LayoutAdmin from "../Layouts/LayoutAdmin";

// Pages
import AdminSignIn from "../pages/Admin/SignIn";
import Dashboard from "../pages/Dashboard/Dashboard";
import Prospects from "../pages/Prospects/Prospects";

// Others
import Error404 from "../pages/Error404";

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
        exact: true,
      },
      {
        path: "/admin/prospectos",
        component: Prospects,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
  {
    path: "/",
    component: AdminSignIn,
    exact: false,
    routes: [
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
