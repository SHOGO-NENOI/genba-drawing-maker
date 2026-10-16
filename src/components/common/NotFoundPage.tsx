import { Link } from "react-router-dom";
import { Brand } from "./Brand";

export function NotFoundPage() {
  return (
    <main className="page page--centered">
      <Brand />
      <section className="empty-state">
        <span className="eyebrow">404</span>
        <h1>ページが見つかりません</h1>
        <p>URLをご確認いただくか、現場一覧に戻ってください。</p>
        <Link className="button button--primary" to="/">現場一覧へ戻る</Link>
      </section>
    </main>
  );
}
