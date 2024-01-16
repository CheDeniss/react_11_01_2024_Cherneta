import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css'
import Form4 from "./components/EX4/form";
import Layout from "./components/layout.jsx";
import Error from "./components/error.jsx";
import About from "./components/EX1-3/about.jsx";
import FamousLandmark from "./components/EX1-3/famland";
import OtherLadmarks from "./components/EX1-3/otherland";
import Photos from "./components/EX1-3/photos.jsx";

const router = createBrowserRouter(
    [{
        path: "/",
        element: <Layout/>,
        errorElement: <Error/>,
        children: [
            {path: "/about", element: <About/>},
            {path: "/famlandmark", element: <FamousLandmark/>},
            {path: "/othrlandmarks", element: <OtherLadmarks/>},
            {path: "/photos/:count", element: <Photos/>},
            {path: "/form", element: <Form4/>}
        ]
    }]
)

function App() {

  return (
      <div>
          <RouterProvider router={router}/>
      </div>
  )
}

export default App
