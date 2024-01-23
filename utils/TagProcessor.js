export const processTags = (articles) => {
  const allTags = articles?.flatMap((article) => article.taxonomy?.tags || []);

  const tagCounts = allTags.reduce((counts, tag) => {
    counts[tag.text] = (counts[tag.text] || 0) + 1;
    return counts;
  }, {});

  const sortedTags = Object.entries(tagCounts)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 10);

  const tagObjects = sortedTags.map(([text, count]) => ({
    slug: `${text.toLowerCase()}-tid${Math.floor(Math.random() * 100000)}`,
    text,
    count,
  }));

  return tagObjects;
};
