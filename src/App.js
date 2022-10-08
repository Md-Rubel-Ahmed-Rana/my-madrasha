import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Admission from './components/Admission/Admission';
import Notice from './components/Notice/Notice';
import Results from './components/Results/Results';
import About from './components/About/About';
import Main from './layout/Main';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        
        {
          path: "/",
          element: <Home /> ,
        },
        {
          path: "/home",
          element: <Home /> ,
        },
        {
          path: "/admission",
          element: <Admission /> ,
        },
        {
          path: "/results",
          element: <Results /> ,
        },
        {
          path: "/notice",
          element: <Notice /> ,
        },
        {
          path: "/gallery",
          loader: () => fetch("pictures.json"),
          element: <Gallery /> ,
        },
        {
          path: "/about",
          element: <About />,
        },
      ]
    },
    {
      path: "/home",
      element: <Main />,
    },
  ])
  return (
    <div className="App">
     <RouterProvider router={router}>

     </RouterProvider>
    </div>
  );
}

export default App;
