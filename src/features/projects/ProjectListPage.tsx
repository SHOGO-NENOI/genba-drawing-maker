import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FolderIcon, PlusIcon, SearchIcon, UploadIcon } from "../../components/common/Icons";

export function ProjectListPage() {
  const [query, setQuery] = useState("");
  const normalizedQuery = useMemo(() => query.trim(), [query]);

  return (
    <main className="page page--list">
      <section className="hero-row">
        <div>
          <p className="eyebrow">YOUR PROJECTS</p>
          <h1>現場一覧</h1>
          <p className="lead">写真をもとに、施工範囲と面積がひと目で伝わる図面を作成します。</p>
        </div>
        <Link className="button button--primary button--large" to="/projects/new">
          <PlusIcon />
          新しい現場を作成
        </Link>
      </section>

      <section className="list-toolbar" aria-label="現場を検索・管理">
        <label className="search-field">
          <SearchIcon />
          <span className="sr-only">現場名で検索</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="現場名で検索"
          />
        </label>
        <div className="toolbar-actions">
          <button className="button button--quiet" type="button" disabled title="Phase 4で実装予定">
            <UploadIcon />
            復元
          </button>
          <button className="button button--quiet" type="button" disabled title="Phase 4で実装予定">
            バックアップ
          </button>
        </div>
      </section>

      <section className="empty-state">
        <div className="empty-state__illustration">
          <FolderIcon />
          <span className="paper paper--one" />
          <span className="paper paper--two" />
        </div>
        <p className="eyebrow">{normalizedQuery ? "NO RESULTS" : "START HERE"}</p>
        <h2>{normalizedQuery ? "一致する現場はありません" : "最初の現場を作成しましょう"}</h2>
        <p>
          {normalizedQuery
            ? `「${normalizedQuery}」に一致する保存済み現場はありません。`
            : "航空写真や現場写真を1枚選ぶところから始まります。データはこの端末内に保存されます。"}
        </p>
        {!normalizedQuery && (
          <Link className="text-link" to="/projects/new">
            写真を選んで始める <span aria-hidden="true">→</span>
          </Link>
        )}
      </section>

      <aside className="privacy-note">
        <span className="privacy-note__icon" aria-hidden="true">✓</span>
        <p><strong>端末内で安全に保存</strong><br />初期版では画像や図面が外部へ送信されることはありません。</p>
      </aside>
    </main>
  );
}
