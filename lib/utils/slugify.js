export const slugify = (text, delim) =>
  text
    .toString()
    .toLowerCase()
    .replace(/[^\w-]+/g, delim || ""); //Convert to lower case and remove all non-word characters
