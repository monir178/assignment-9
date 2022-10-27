import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Topics from './components/Topics/Topics';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import Quiz from './components/Quiz/Quiz';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: 'true',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Header></Header>,
        },
        {
          path: '/topics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Header></Header>

        },
        {
          path: '/topics/:Id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.Id}`)
          },
          element: <Quiz></Quiz>
        },

        {
          path: '/statistics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }

      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
