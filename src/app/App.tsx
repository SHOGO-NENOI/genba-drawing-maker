import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppShell } from "../components/common/AppShell";
import { EditorPage } from "../features/drawing/EditorPage";
import { NewProjectPage } from "../features/projects/NewProjectPage";
import { ProjectListPage } from "../features/projects/ProjectListPage";
import { NotFoundPage } from "./NotFoundPage";

export function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<ProjectListPage />} />
          <Route path="projects/new" element={<NewProjectPage />} />
          <Route path="projects/:projectId/edit" element={<EditorPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
