// Intrinsic String Manipulation Types

export const IsmtExample = () => {
  // Converts each character in the string to the uppercase version.
  type Greeting = "Hello, world";
  type ShoutyGreeting = Uppercase<Greeting>;
  //   type ShoutyGreeting = "HELLO, WORLD"

  //   Converts each character in the string to the lowercase equivalent.
  type QuietGreeting = Lowercase<Greeting>;
  //   type QuietGreeting = "hello, world"

  //   Converts the first character in the string to an uppercase equivalent.
  type LowercaseGreeting = "hello, world";
  type Greeting2 = Capitalize<LowercaseGreeting>;
  //   type Greeting = "Hello, world"

  //   Converts the first character in the string to a lowercase equivalent.
  type UppercaseGreeting = "HELLO WORLD";
  type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;
  //   type UncomfortableGreeting = "hELLO WORLD"
};
