// Extracts the type of the this parameter for a function type, or unknown if the function type has no this parameter.

export const thisParameterExample = () => {
  function toHex(this: Number) {
    return this.toString(16);
  }

  function numberToString(n: ThisParameterType<typeof toHex>) {
    return toHex.apply(n);
  }
};
