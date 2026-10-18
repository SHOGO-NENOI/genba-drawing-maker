import { describe, expect, it } from "vitest";
import { validateProjectDraft, type ProjectDraft } from "./projectDraft";

const validDraft = (): ProjectDraft => ({
  name: "中央駐車場",
  locationText: "坂口市中央1-2-3",
  memo: "砂利敷きの概算",
  image: new File(["image"], "site.webp", { type: "image/webp" })
});

describe("validateProjectDraft", () => {
  it("有効な入力を受け付ける", () => {
    expect(validateProjectDraft(validDraft())).toEqual({});
  });

  it("空の現場名と画像を拒否する", () => {
    expect(validateProjectDraft({ ...validDraft(), name: "  ", image: null })).toEqual({
      name: "現場名を入力してください。",
      image: "元画像を選択してください。"
    });
  });

  it("未対応形式を拒否する", () => {
    const image = new File(["image"], "site.gif", { type: "image/gif" });
    expect(validateProjectDraft({ ...validDraft(), image })).toEqual({
      image: "JPEG・PNG・WebP形式の画像を選択してください。"
    });
  });
});
