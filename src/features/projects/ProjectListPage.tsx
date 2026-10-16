import { Link } from "react-router-dom";
import { Brand } from "../../components/common/Brand";

export function ProjectListPage() {
  return (
    <main className="page dashboard">
      <header className="topbar">
        <Brand />
        <div className="topbar__actions">
          <button className="button button--quiet" type="button" disabled title="Phase 4で実装予定">
            復元
          </button>
          <Link className="button button--primary" to="/projects/new">
            <span aria-hidden="true">＋</span> 新しい現場
          </Link>
        </div>
      </header>

      <section className="hero" aria-labelledby="page-title">
        <div>
          <span className="eyebrow">FIELD DRAWING WORKSPACE</span>
          <h1 id="page-title">現場の写真を、<br />そのまま図面に。</h1>
          <p>施工範囲・寸法・面積をひとつの図面にまとめ、見積もり資料づくりを素早く。</p>
        </div>
        <div className="hero__diagram" aria-hidden="true">
          <div className="measure measure--top">55.0 m</div>
          <div className="plot-shape"><span>施工範囲</span><strong>537.0 ㎡</strong></div>
          <div className="measure measure--side">9.0 m</div>
        </div>
      </section>

      <section className="projects-section" aria-labelledby="projects-title">
        <div className="section-heading">
          <div>
            <span className="eyebrow">PROJECTS</span>
            <h2 id="projects-title">保存済みの現場</h2>
          </div>
          <label className="search-field">
            <span aria-hidden="true">⌕</span>
            <span className="sr-only">現場名を検索</span>
            <input type="search" placeholder="現場名を検索" disabled title="Phase 4で実装予定" />
          </label>
        </div>

        <div className="empty-state empty-state--project">
          <div className="empty-state__icon" aria-hidden="true">⌑</div>
          <h3>まだ現場がありません</h3>
          <p>写真を1枚選ぶところから、最初の図面づくりを始めましょう。</p>
          <Link className="button button--primary" to="/projects/new">最初の現場を作成</Link>
          <small>データはこの端末に保存されます</small>
        </div>
      </section>
    </main>
  );
}
