import './App.css';
import Default from './Default';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CourseDetailPage from './components/CourseDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/signup',
    element: <SignUp />
  },{
    path: '/:id',
    element: <CourseDetailPage />
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
