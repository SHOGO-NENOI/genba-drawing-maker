import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Brand } from "../../components/common/Brand";

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

export function CreateProjectPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState("");
  const previewUrl = useMemo(() => image ? URL.createObjectURL(image) : "", [image]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) {
      setError("現場名を入力してください。");
      return;
    }
    if (!image) {
      setError("元画像を選択してください。");
      return;
    }
    navigate(`/projects/preview/edit?name=${encodeURIComponent(name.trim())}`);
  }

  return (
    <main className="page form-page">
      <header className="topbar"><Brand /><Link className="text-link" to="/">キャンセル</Link></header>
      <section className="form-layout">
        <div className="form-intro">
          <span className="step-label">01 / 現場情報</span>
          <h1>新しい現場を<br />作成します</h1>
          <p>まず現場名と元になる写真を登録します。情報は後から変更できます。</p>
          <div className="privacy-note"><span aria-hidden="true">◉</span><p><strong>端末内で完結</strong><br />写真や図面は外部へ送信されません。</p></div>
        </div>

        <form className="project-form" onSubmit={submit} noValidate>
          <label className="field">
            <span>現場名 <em>必須</em></span>
            <input value={name} onChange={(event) => setName(event.target.value)} placeholder="例：○○様邸 駐車場" autoFocus />
          </label>
          <label className="field">
            <span>施工場所 <small>任意</small></span>
            <input placeholder="例：東京都○○市" />
          </label>
          <label className={`upload-field${previewUrl ? " upload-field--selected" : ""}`}>
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              capture="environment"
              onChange={(event) => {
                const file = event.target.files?.[0] ?? null;
                if (file && !ACCEPTED_TYPES.includes(file.type)) {
                  setError("JPEG・PNG・WebP形式の画像を選択してください。");
                  event.target.value = "";
                  return;
                }
                setImage(file);
                setError("");
              }}
            />
            {previewUrl ? <img src={previewUrl} alt="選択した元画像のプレビュー" /> : <span className="upload-field__icon" aria-hidden="true">＋</span>}
            <span><strong>{image ? image.name : "元画像を選択"}</strong><small>JPEG・PNG・WebP</small></span>
          </label>
          <label className="field">
            <span>メモ <small>任意</small></span>
            <textarea rows={4} placeholder="現場の注意事項など" />
          </label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="button button--primary button--wide" type="submit">編集画面へ進む <span aria-hidden="true">→</span></button>
        </form>
      </section>
    </main>
  );
}
