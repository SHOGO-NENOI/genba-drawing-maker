import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="centered-page">
      <p className="eyebrow">404</p>
      <h1>ページが見つかりません</h1>
      <p className="muted">URLが正しいか確認するか、現場一覧へ戻ってください。</p>
      <Link className="button button--primary" to="/">
        現場一覧へ戻る
      </Link>
    </main>
  );
}
