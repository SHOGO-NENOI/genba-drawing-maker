import { Link, useSearchParams } from "react-router-dom";

const tools = ["移動", "範囲", "縮尺", "寸法", "注記"];

export function EditorPage() {
  const [params] = useSearchParams();
  const projectName = params.get("name") || "名称未設定の現場";

  return (
    <main className="editor-page">
      <header className="editor-header">
        <Link className="editor-back" to="/" aria-label="現場一覧へ戻る">←</Link>
        <div><strong>{projectName}</strong><span><i /> 未保存の変更なし</span></div>
        <div className="editor-header__actions">
          <button type="button">保存</button>
          <button className="button button--primary" type="button" disabled title="Phase 4で実装予定">出力</button>
        </div>
      </header>
      <div className="editor-layout">
        <aside className="tool-rail" aria-label="編集ツール">
          {tools.map((tool, index) => <button className={index === 0 ? "is-active" : ""} type="button" key={tool}><span>{["✥", "⬡", "↔", "↗", "T"][index]}</span>{tool}</button>)}
        </aside>
        <section className="canvas-placeholder" aria-label="図面キャンバス準備画面">
          <div className="canvas-placeholder__grid" />
          <div className="canvas-message"><span>PHASE 2</span><h1>図面エディター</h1><p>キャンバス描画機能は次のフェーズで追加します。</p></div>
          <div className="zoom-control"><button type="button">−</button><span>100%</span><button type="button">＋</button></div>
        </section>
        <aside className="property-panel"><span className="eyebrow">PROPERTIES</span><h2>選択なし</h2><p>キャンバス上のオブジェクトを選択すると、ここに設定が表示されます。</p></aside>
      </div>
      <footer className="editor-footer"><span>縮尺：未設定</span><strong>合計面積：—</strong><span>オフライン対応</span></footer>
    </main>
  );
}
