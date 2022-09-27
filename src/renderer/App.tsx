import * as React from 'react';
import { RouterProvider,HashRouter, Routes, createRoutesFromElements, createHashRouter, useRouteError, Route, BrowserRouter, MemoryRouter } from "react-router-dom";

import CardsIndex from './pages/CardsIndex/CardsIndex';
import CardPage from './pages/CardShow/CardPage';
import HomePage from './pages/Home/HomePage';
import { Card } from '~Common/interfaces';


function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
}

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "cards",
    children: [
      {
        index: true,
        element: <CardsIndex />,
        errorElement: <ErrorBoundary />
      },
      {
        path: ":id",
        element: <CardPage />,
        errorElement: <ErrorBoundary />,
        loader: ({ params }) => {
            console.log(params.id);
        },
      }
    ]
  }
])

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App;
