export type ProjectDraft = {
  name: string;
  locationText: string;
  memo: string;
  image: File | null;
};

export type DraftErrors = Partial<Record<"name" | "image", string>>;

const SUPPORTED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

export function validateProjectDraft(draft: ProjectDraft): DraftErrors {
  const errors: DraftErrors = {};

  if (!draft.name.trim()) {
    errors.name = "現場名を入力してください。";
  }

  if (!draft.image) {
    errors.image = "元画像を選択してください。";
  } else if (!SUPPORTED_IMAGE_TYPES.has(draft.image.type)) {
    errors.image = "JPEG・PNG・WebP形式の画像を選択してください。";
  }

  return errors;
}
