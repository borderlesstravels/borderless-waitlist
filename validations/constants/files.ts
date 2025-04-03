export const ALLOWED_FILE_TYPES_IMAGES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/bmp",
  "image/webp",
  "image/svg+xml",
];

export const ALLOWED_FILE_TYPES_PDF_DOCS = [
  "application/pdf", // .pdf
  "application/msword", // .doc
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
  "application/vnd.ms-excel", // .xls
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // .xlsx
];

export const ALLOWED_FILE_TYPES_ALL = [
  ...ALLOWED_FILE_TYPES_IMAGES,
  ...ALLOWED_FILE_TYPES_PDF_DOCS,
];
