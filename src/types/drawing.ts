export type Point = {
  x: number;
  y: number;
};

export type AreaMethod = "scaledPolygon" | "manualGeometry";
export type ManualGeometryKind = "rectangle" | "triangle" | "trapezoid";

export type ManualGeometry = {
  kind: ManualGeometryKind;
  dimensionsMeters: Record<string, number>;
};

export type WorkArea = {
  id: string;
  name: string;
  category: string;
  points: Point[];
  fillColor: string;
  strokeColor: string;
  opacity: number;
  visible: boolean;
  includedInTotal: boolean;
  areaMethod: AreaMethod;
  manualGeometry?: ManualGeometry;
};

export type Dimension = {
  id: string;
  start: Point;
  end: Point;
  mode: "measured" | "manual";
  manualLengthMeters?: number;
  color: string;
  lineWidth: number;
  fontSize: number;
  unit: "m" | "cm";
  showArrows: boolean;
  offset: number;
};

export type Annotation = {
  id: string;
  position: Point;
  text: string;
  color: string;
  backgroundColor?: string;
  fontSize: number;
};

export type ScaleCalibration = {
  start: Point;
  end: Point;
  actualDistanceMeters: number;
  metersPerPixel: number;
};

export type Project = {
  id: string;
  name: string;
  locationText?: string;
  memo?: string;
  createdAt: string;
  updatedAt: string;
  imageId: string;
  imageWidth: number;
  imageHeight: number;
  calibration?: ScaleCalibration;
  workAreas: WorkArea[];
  dimensions: Dimension[];
  annotations: Annotation[];
};

export type StoredImage = {
  id: string;
  blob: Blob;
  fileName: string;
  mimeType: "image/jpeg" | "image/png" | "image/webp";
  createdAt: string;
};

export type BackupEnvelope = {
  schemaVersion: 1;
  exportedAt: string;
  project: Project;
  image: {
    fileName: string;
    mimeType: StoredImage["mimeType"];
    dataUrl: string;
  };
};
