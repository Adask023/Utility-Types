// Constructs a type consisting of all properties of Type set to required. The opposite of Partial.

export const requiredExample = () => {
  interface Stats {
    rank?: number;
    winRate?: string;
  }

  const obj: Stats = { rank: 5 };

  //   uncomment line below
  //   const obj2: Required<Stats> = { rank: 5 };
};
