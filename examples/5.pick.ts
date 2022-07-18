// Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.

export const pickExample = () => {
  interface Article {
    title: string;
    description: string;
  }

  type ArticleShort = Pick<Article, "title">;

  const article: ArticleShort = {
    title: "Brand new title",
  };
};
