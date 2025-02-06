import { createBrowserRouter } from "react-router-dom";
import Home from "../sections/home/Home";
import BirthdayReminder from "../challanges/01-birthday-reminder/BirthdayReminder";
import Tours from "../challanges/02-tours/Tours";
import Reviews from "../challanges/03-reviews/reviews";
import Accordion from "../challanges/04-accordion-I/Accordion";
import AccordionII from "../challanges/05-accordion-II/AccordionII";

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
  {
    path: "/accordion",
    element: <Accordion />,
  },

  {
    path: "/accordion-II",
    element: <AccordionII />,
  },
]);

export default router;
