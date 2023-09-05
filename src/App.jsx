import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Profile from './features/Profile/Profile';
import Recent from './features/Recent/Recent';
import Search from './features/Search/Search';
import Favorite from './features/Favorite/Favorite';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/recent',
        element: <Recent />,
      },
      {
        path: '/',
        element: <Search />,
      },
      {
        path: '/favorites ',
        element: <Favorite />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
