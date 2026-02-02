import {createBrowserRouter,RouterProvider} from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import AboutPage from "./pages/AboutPage";
import NavigationLinks from "./pages/NavigationLinks";
import RootOutlay from "./pages/RootOutlay";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {path:"/", element: <RootOutlay/>,
    children:[ {path:"/", element: <HomePage/>},
    {path:"/products", element: <ProductsPage/>},
    {path:"/about", element: <AboutPage/>}]
  }
  ]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
