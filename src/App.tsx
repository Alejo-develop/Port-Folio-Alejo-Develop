import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home.page";
import AboutMePage from "./pages/aboutMe.page";
import PageTransition from "./utils/page.transition";
import NavbarComponent from "./components/navbar.component";
import MySkillsPage from "./pages/mySkills.page";
import ProjectsPage from "./pages/projects.page";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <NavbarComponent>
        <PageTransition>
          <HomePage />
        </PageTransition>
      </NavbarComponent>
    ),
  },
  {
    path: "/aboutme",
    element: (
      <NavbarComponent>
        <PageTransition>
          <AboutMePage />
        </PageTransition>
      </NavbarComponent>
    ),
  },
  {
    path: "/skills",
    element: (
      <NavbarComponent>
        <PageTransition>
          <MySkillsPage />
        </PageTransition>
      </NavbarComponent>
    ),
  },
  {
    path: "/projects",
    element: (
      <NavbarComponent>
        <PageTransition>
          <ProjectsPage />
        </PageTransition>
      </NavbarComponent>
    ),
  },
]);
