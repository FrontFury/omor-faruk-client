import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Academics from "../pages/Academics/Academics"
import Contact from "../pages/Contact/Contact"
import Courses from "../pages/Courses/Courses"
import Experience from "../pages/Experience/Experience"
import Gallery from "../pages/Gallery/Gallery"
import Home from "../pages/Home/Home"
import Honors from "../pages/Honors/Honors"
import NotFound from "../pages/NotFound"
import Referees from "../pages/Referees/Referees"
import Research from "../pages/Research/Research"
import Tools from "../pages/Tools/Tools"
import VoluntaryWork from "../pages/VoluntaryWork/VoluntaryWork"
import Workshops from "../pages/Workshops/Workshops"

// Config matching Navbar routes
const routeConfig = [
  { path: "academic-degree", element: <Academics /> },
  { path: "awards-experience", element: <Experience /> },
  { path: "research-interest", element: <Research /> },
  { path: "research-tools", element: <Tools /> },
  { path: "completed-courses", element: <Courses /> },
  { path: "workshops-seminars", element: <Workshops /> },
  { path: "honors-awards", element: <Honors /> },
  { path: "csr-voluntary-work", element: <VoluntaryWork /> },
  { path: "gallery", element: <Gallery /> },
  { path: "referees", element: <Referees /> },
  { path: "contact", element: <Contact /> },
]

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      ...routeConfig.map(({ path, element }) => ({
        path,
        element,
      })),
      { path: "*", element: <NotFound /> },
    ],
  },
])