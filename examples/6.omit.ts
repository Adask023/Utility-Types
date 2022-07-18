// Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).

export const omitExample = () => {
  interface Article {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
  }

  type ArticleShort = Omit<Article, "completed" | "createdAt">;

  const article: ArticleShort = {
    title: "Its just a title",
    description: "Its just a description",
  };
};
