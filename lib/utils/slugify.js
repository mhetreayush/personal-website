export const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .replace(/[^\w-]+/g, "");
