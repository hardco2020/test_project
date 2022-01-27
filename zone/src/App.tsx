import React from 'react';
import {
  useRoutes
} from "react-router-dom";
import Home from "../src/pages/Home"

function App() {
  let element = useRoutes([
    // These are the same as the props you provide to <Route>
    { path: "/", element: <Home /> },
    // { path: "dashboard", element: <Dashboard /> },
    // {
    //   path: "Groups",
    //   element: <Groups />,
    //   // Nested routes use a children property, which is also
    //   // the same as <Route>
    //   children: [
    //     { path: ":id", element: <Group /> },
    //     { path: "user", element: <UserGroup /> }
    //   ]
    // },
    // // Not found routes work as you'd expect
    // { path: "*", element: <Home /> }
  ]);
  return element
}

export default App;
