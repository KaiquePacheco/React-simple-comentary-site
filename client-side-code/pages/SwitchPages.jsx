import React from "react"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Sign from "./SignPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signpage" replace={true}/>
  },{
    path: "/signpage",
    element: <Sign/>
  }
])

function General() {
  return <>
    <RouterProvider router={router}/>
  </>
}

export default General
