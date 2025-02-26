import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";


import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import JobDetails from "./pages/JobDetails";
import Newsfeed from "./pages/Newsfeed";
import AIAcademy from "./pages/AIacademy";
import TermsOfService from "./pages/TermsOfService";
import Policy from "./pages/Policy";
import Login from "./pages/Login";
import AdminHome from "./pages/admin/AdminHome";
import Register from "./pages/Register";


import ProtectedRoute from "./components/ProtectedRoute";
// import Webinar from "./pages/Webinar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "AIacademy",
        element: <AIAcademy />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "careers",
        element: <Careers />,
      },
      {
        path: "/jobs/:jobId",
        element: <JobDetails />,
      },
      {
        path: "/newsfeed",
        element: <Newsfeed />,
      },
      // {
      //   path: "/webinar",
      //   element: <Webinar/>,
      // },
    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/termsofservice",
    element: <TermsOfService />
  },
  {
    path: "/policy",
    element: <Policy />
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute roles={["admin"]}>
          <AdminHome />
      </ProtectedRoute>
    )
  }
]);

const App = () => {
  return <RouterProvider router={router}> </RouterProvider>;
};

export default App;




