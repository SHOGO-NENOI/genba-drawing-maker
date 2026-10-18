import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowLeftIcon, ImageIcon } from "../../components/common/Icons";

type NavigationState = { projectName?: string; previewUrl?: string | null };

export function EditorPage() {
  const { projectId } = useParams();
  const location = useLocation();
  const state = (location.state ?? {}) as NavigationState;

  return (
    <main className="editor-placeholder">
      <div className="editor-topbar">
        <Link to="/" className="icon-button" aria-label="現場一覧へ戻る"><ArrowLeftIcon /></Link>
        <div><small>編集中</small><strong>{state.projectName || `現場 ${projectId ?? ""}`}</strong></div>
        <span className="save-state">未保存</span>
        <button className="button button--primary" type="button" disabled>出力</button>
      </div>
      <div className="editor-frame">
        <aside className="editor-tools" aria-label="編集ツール">
          <button type="button" className="tool-button tool-button--active"><ImageIcon /><span>画像</span></button>
          <button type="button" className="tool-button" disabled><span className="tool-glyph">◇</span><span>範囲</span></button>
          <button type="button" className="tool-button" disabled><span className="tool-glyph">↔</span><span>寸法</span></button>
          <button type="button" className="tool-button" disabled><span className="tool-glyph">T</span><span>注記</span></button>
        </aside>
        <section className="canvas-placeholder">
          {state.previewUrl ? <img src={state.previewUrl} alt="編集対象の元画像" /> : <ImageIcon />}
          <div className="phase-notice">
            <strong>編集キャンバスは Phase 2 で有効になります</strong>
            <span>Phase 1 では画面構成とルーティングを確認できます。</span>
          </div>
        </section>
        <aside className="properties-placeholder"><p className="eyebrow">PROPERTIES</p><h2>設定</h2><p>オブジェクトを選択すると、ここに設定が表示されます。</p></aside>
      </div>
      <div className="editor-status"><span>縮尺：未設定</span><span>合計面積：計算できません</span></div>
    </main>
  );
}
