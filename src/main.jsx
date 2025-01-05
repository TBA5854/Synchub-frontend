import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout.jsx";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Teams from "./Pages/Teams/Teams";
import Hackathons from "./Pages/Hackathons/Hackathons";
import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";
import Error from "./Pages/Error404/Error";
import MainLayout from "./MainLayout";
import MainPage from "./Pages/MainPage/MainPage";
import Trending from "./Pages/Trending/Trending";
import Notification from "./Pages/Notification/Notification";
import Profile from "./Pages/Profile/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="teams" element={<Teams />} />
        <Route path="hackathons" element={<Hackathons />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Error />} />

      <Route path="/main" element={<MainLayout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<MainPage />} />
        <Route path="trending" element={<Trending />} />
        <Route path="notification" element={<Notification />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </>
  )
);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
