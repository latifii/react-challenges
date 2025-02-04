import { createBrowserRouter } from "react-router-dom";
import BirthdayReminder from "../src/challanges/01-birthday-reminder/BirthdayReminder";
import Home from "../src/sections/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/birthday",
    element: <BirthdayReminder />,
  },
]);

export default router;
