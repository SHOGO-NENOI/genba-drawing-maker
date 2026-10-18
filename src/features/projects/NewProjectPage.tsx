import { type ChangeEvent, type FormEvent, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, ImageIcon } from "../../components/common/Icons";
import { validateProjectDraft, type DraftErrors, type ProjectDraft } from "./projectDraft";

const initialDraft: ProjectDraft = { name: "", locationText: "", memo: "", image: null };

export function NewProjectPage() {
  const navigate = useNavigate();
  const [draft, setDraft] = useState<ProjectDraft>(initialDraft);
  const [errors, setErrors] = useState<DraftErrors>({});
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const today = useMemo(
    () => new Intl.DateTimeFormat("ja-JP", { dateStyle: "long" }).format(new Date()),
    []
  );

  const clearError = (field: keyof DraftErrors) => {
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const updateImage = (event: ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0] ?? null;
    setDraft((current) => ({ ...current, image }));
    clearError("image");
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(image ? URL.createObjectURL(image) : null);
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validateProjectDraft(draft);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      navigate("/projects/draft/edit", { state: { projectName: draft.name, previewUrl } });
    }
  };

  return (
    <main className="page page--form">
      <Link to="/" className="back-link"><ArrowLeftIcon /> 現場一覧へ戻る</Link>
      <div className="form-heading">
        <p className="eyebrow">NEW PROJECT</p>
        <h1>新しい現場を作成</h1>
        <p className="lead">基本情報と図面の元になる写真を登録します。</p>
      </div>

      <form className="project-form" onSubmit={submit} noValidate>
        <section className="form-card">
          <div className="section-number">01</div>
          <div className="section-content">
            <h2>現場情報</h2>
            <p className="muted">図面や出力ファイルに表示される情報です。</p>
            <div className="form-grid">
              <label className="field field--wide">
                <span>現場名 <em>必須</em></span>
                <input
                  value={draft.name}
                  onChange={(event) => {
                    setDraft({ ...draft, name: event.target.value });
                    clearError("name");
                  }}
                  aria-invalid={Boolean(errors.name)}
                  placeholder="例：中央駐車場 砂利敷き工事"
                  autoFocus
                />
                {errors.name && <small className="field-error">{errors.name}</small>}
              </label>
              <label className="field">
                <span>施工場所 <small>任意</small></span>
                <input
                  value={draft.locationText}
                  onChange={(event) => setDraft({ ...draft, locationText: event.target.value })}
                  placeholder="住所や目印"
                />
              </label>
              <label className="field">
                <span>作成日</span>
                <input value={today} readOnly />
              </label>
              <label className="field field--wide">
                <span>メモ <small>任意</small></span>
                <textarea
                  value={draft.memo}
                  onChange={(event) => setDraft({ ...draft, memo: event.target.value })}
                  placeholder="現地の注意点や施工内容など"
                  rows={3}
                />
              </label>
            </div>
          </div>
        </section>

        <section className="form-card">
          <div className="section-number">02</div>
          <div className="section-content">
            <h2>元画像</h2>
            <p className="muted">航空写真または現場写真を選択してください。</p>
            <label className={`image-drop ${previewUrl ? "image-drop--selected" : ""}`}>
              {previewUrl ? (
                <img src={previewUrl} alt="選択した元画像のプレビュー" />
              ) : (
                <>
                  <span className="image-drop__icon"><ImageIcon /></span>
                  <strong>写真を選択</strong>
                  <span>または、ここにドラッグ＆ドロップ</span>
                  <small>JPEG・PNG・WebP</small>
                </>
              )}
              <input type="file" accept="image/jpeg,image/png,image/webp" onChange={updateImage} />
            </label>
            {draft.image && <p className="selected-file">選択中：{draft.image.name}</p>}
            {errors.image && <p className="field-error">{errors.image}</p>}
          </div>
        </section>

        <div className="form-actions">
          <Link to="/" className="button button--quiet">キャンセル</Link>
          <button className="button button--primary button--large" type="submit">
            編集画面へ進む <span aria-hidden="true">→</span>
          </button>
        </div>
      </form>
    </main>
  );
}
