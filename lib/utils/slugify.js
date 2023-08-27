export const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .replace(/[^\w-]+/g, ""); //Convert to lower case and remove all non-word characters
