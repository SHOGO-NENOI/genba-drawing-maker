import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { CreateProjectPage } from "../features/projects/CreateProjectPage";
import { ProjectListPage } from "../features/projects/ProjectListPage";

describe("Phase 1 navigation", () => {
  it("現場一覧に空状態と作成導線を表示する", () => {
    const router = createMemoryRouter([{ path: "/", element: <ProjectListPage /> }]);
    render(<RouterProvider router={router} />);
    expect(screen.getByRole("heading", { name: "保存済みの現場" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "最初の現場を作成" })).toHaveAttribute("href", "/projects/new");
  });

  it("新規現場フォームに必須項目を表示する", () => {
    const router = createMemoryRouter([{ path: "/projects/new", element: <CreateProjectPage /> }], { initialEntries: ["/projects/new"] });
    render(<RouterProvider router={router} />);
    expect(screen.getByPlaceholderText("例：○○様邸 駐車場")).toBeInTheDocument();
    expect(screen.getByText("元画像を選択")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /編集画面へ進む/ })).toBeInTheDocument();
  });
});
