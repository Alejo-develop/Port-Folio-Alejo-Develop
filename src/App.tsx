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
      <PageTransition>
        <NavbarComponent>
          <HomePage />
        </NavbarComponent>
      </PageTransition>
    ),
  },
  {
    path: "/aboutme",
    element: (
      <PageTransition>
        <NavbarComponent>
          <AboutMePage />
        </NavbarComponent>
      </PageTransition>
    ),
  },
  {
    path: "/skills",
    element: (
      <PageTransition>
        <NavbarComponent>
          <MySkillsPage />
        </NavbarComponent>
      </PageTransition>
    ),
  },
  {
    path: "/projects",
    element: (
      <PageTransition>
        <NavbarComponent>
          <ProjectsPage />
        </NavbarComponent>
      </PageTransition>
    ),
  },
]);
