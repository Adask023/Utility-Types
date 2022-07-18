// Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

export const readOnlyExample = () => {
  interface Article {
    title: string;
    description: string;
  }

  const newArticle: Readonly<Article> = {
    title: "Don't trust javascript programmers",
    description: "All they do is promises but they never callback.",
  };

  //   uncomment line below
  //   newArticle.title = "Hello";

  //   This utility is useful for representing assignment expressions that will fail at runtime (i.e. when attempting to reassign properties of a frozen object).
};
