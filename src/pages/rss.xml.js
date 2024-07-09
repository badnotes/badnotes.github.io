import rss from "@astrojs/rss";

const postImportResult = import.meta.glob("./posts/*.md");
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: "Fyme",
    description: "A Personal space",
    site: import.meta.env.SITE,
    items: [],
  });
