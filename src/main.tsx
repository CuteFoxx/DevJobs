import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./styles/index.scss";
import { store } from "./state/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JobPage from "./JobPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div className="error">404 not found</div>,
  },
  { path: "/job/:id", element: <JobPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
