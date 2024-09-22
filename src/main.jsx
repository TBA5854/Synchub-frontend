import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Teams from './Pages/Teams/Teams'
import Hackathons from './Pages/Hackathons/Hackathons'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="teams" element={<Teams/>}/>
      <Route path="hackathons" element={<Hackathons/>}/>
    </Route>
    </>
  )
);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
