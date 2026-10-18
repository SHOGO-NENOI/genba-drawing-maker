import { Link, Outlet } from "react-router-dom";
import { BlueprintIcon } from "./Icons";

export function AppShell() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link to="/" className="brand" aria-label="現場図面メーカー ホーム">
          <span className="brand__mark">
            <BlueprintIcon />
          </span>
          <span>
            <strong>現場図面メーカー</strong>
            <small>写真から、伝わる図面へ。</small>
          </span>
        </Link>
        <span className="offline-badge" title="アプリ本体はオフラインで利用できます">
          <span className="status-dot" />
          オフライン対応
        </span>
      </header>
      <Outlet />
    </div>
  );
}
