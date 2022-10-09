import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Admission from './components/Admission/Admission';
import Notice from './components/Notice/Notice';
import About from './components/About/About';
import Main from './layout/Main';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { createContext } from 'react';
import Results from './components/Results/Results';

export const totalStudentInfo = createContext ({
  teachers :  80,
  totalStudent :  3478,
  newStudent :  560,
  totalRejected :  50,
  totalSeet :  5000
})

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
          loader: () => fetch("results.json"),
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
        }
      ]
    },
    {
      path: "*",
      element: <ErrorPage />,
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}>

     </RouterProvider>
    </div>
  );
}

export default App;
