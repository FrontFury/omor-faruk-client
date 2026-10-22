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
import { routeConfig } from "./routeConfig"

const routeElements = {
  "academic-degree": <Academics />,
  "awards-experience": <Experience />,
  "research-interest": <Research />,
  "research-tools": <Tools />,
  "completed-courses": <Courses />,
  "workshops-seminars": <Workshops />,
  "honors-awards": <Honors />,
  "csr-voluntary-work": <VoluntaryWork />,
  gallery: <Gallery />,
  referees: <Referees />,
  contact: <Contact />,
}

export { routeConfig }

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      ...routeConfig.map(({ path }) => ({
        path,
        element: routeElements[path],
      })),
      { path: "*", element: <NotFound /> },
    ],
  },
])
