import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);
function App() {
    return (
        <>
            <React.StrictMode>
                <RouterProvider router={router} />
            </React.StrictMode>
        </>
    );
}

export default App;
