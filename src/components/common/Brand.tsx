import { Link } from "react-router-dom";

export function Brand() {
  return (
    <Link className="brand" to="/" aria-label="現場図面メーカー ホーム">
      <span className="brand__mark" aria-hidden="true">現</span>
      <span>
        <strong>現場図面メーカー</strong>
        <small>写真から、伝わる施工図へ。</small>
      </span>
    </Link>
  );
}
