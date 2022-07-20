// Constructs a type by extracting from Type all union members that are assignable to Union.

export const extractExample = () => {
  type T0 = Extract<"dog" | "cat" | "mouse", "dog" | "horse">;

  //   type T0 = "dog"

  type T1 = Extract<string | number | (() => void), Function>;

  // type T1 = () => void
};
