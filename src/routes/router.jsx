import { createBrowserRouter } from "react-router-dom";
import Home from "../sections/home/Home";
import BirthdayReminder from "../challanges/01-birthday-reminder/BirthdayReminder";
import Tours from "../challanges/02-tours/Tours";
import Reviews from "../challanges/03-reviews/reviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/birthday",
    element: <BirthdayReminder />,
  },
  {
    path: "/tours",
    element: <Tours />,
  },
  {
    path: "/reviews",
    element: <Reviews />,
  },
]);

export default router;
