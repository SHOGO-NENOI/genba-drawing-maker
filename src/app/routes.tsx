import { createHashRouter } from "react-router-dom";
import { AppShell } from "./AppShell";
import { CreateProjectPage } from "../features/projects/CreateProjectPage";
import { EditorPage } from "../features/drawing/EditorPage";
import { ProjectListPage } from "../features/projects/ProjectListPage";
import { NotFoundPage } from "../components/common/NotFoundPage";

export const router = createHashRouter([
  {
    element: <AppShell />,
    children: [
      { path: "/", element: <ProjectListPage /> },
      { path: "/projects/new", element: <CreateProjectPage /> },
      { path: "/projects/:projectId/edit", element: <EditorPage /> },
      { path: "*", element: <NotFoundPage /> }
    ]
  }
]);
