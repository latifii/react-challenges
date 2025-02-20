import { createBrowserRouter } from "react-router-dom";
import Home from "../sections/home/Home";
import BirthdayReminder from "../challanges/01-birthday-reminder/BirthdayReminder";
import Tours from "../challanges/02-tours/Tours";
import Reviews from "../challanges/03-reviews/Reviews";
import Accordion from "../challanges/04-accordion-I/Accordion";
import AccordionII from "../challanges/05-accordion-II/AccordionII";
import Menu from "../challanges/06-menu/Menu";
import Tabs from "../challanges/09-tabs/Tabs";
import Slider from "../challanges/07-slider/Slider";
import Lorem from "../challanges/08-lorem-ipsum/Lorem";
import ColorGenerator from "../challanges/10-color-generator/ColorGenerator";
import ToDoList from "../challanges/11-todo-list/ToDoList";
import AppSidebar from "../challanges/12-sidebar-modal/AppSidebar";

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
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/tabs",
    element: <Tabs />,
  },
  {
    path: "/slider",
    element: <Slider />,
  },
  {
    path: "/lorem",
    element: <Lorem />,
  },
  {
    path: "/color-generator",
    element: <ColorGenerator />,
  },
  {
    path: "/todo-list",
    element: <ToDoList />,
  },
  {
    path: "/sidebar-modal",
    element: <AppSidebar />,
  },
]);

export default router;
