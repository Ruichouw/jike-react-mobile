
import { RouterProvider } from "react-router-dom";
import router from "./route/index";
const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
