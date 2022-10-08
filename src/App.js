import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Admission from './components/Admission/Admission';
import Notice from './components/Notice/Notice';
import Results from './components/Results/Results';
import About from './components/About/About';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        
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
