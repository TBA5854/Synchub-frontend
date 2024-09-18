import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
    </Route>
    </>
  )
);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
