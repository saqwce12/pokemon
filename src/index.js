import React from "react"
import ReactDOM from "react-dom/client"
import Root from "./routes/Root"
import About from "./routes/About"
import FrontPage from "./routes/FrontPage"
import { RouterProvider, createHashRouter } from "react-router-dom"
import App from "./routes/Root"
import Pokedex from "./routes/Pokedex"

const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <FrontPage />,
            },
            {
              path: "/app",
              element: <App />,
          },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/pokedex",
                element: <Pokedex />,
            },
            
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />);
