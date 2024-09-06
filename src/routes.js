import Home from './pages/Home';
import Actors from './pages/Actors';
import Directors from './pages/Directors';
import Movie from './pages/Movie';
import Error from './pages/ErrorPage'; // Ensure this matches your component's name

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />, 
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/movie/:id", 
    element: <Movie />,
  },
];

export default routes;

