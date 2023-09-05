import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Search from './features/Search/Search';
import Favorite from './features/Favorite/Favorite';
import AppProvider from './AppProvider';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Search />,
      },
      {
        path: '/favorites',
        element: <Favorite />,
      },
    ],
  },
]);

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
