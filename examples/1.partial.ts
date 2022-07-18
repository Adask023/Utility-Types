// Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.

export const partialExample = () => {
  interface Human {
    name: string;
    height: number;
    weight: number;
    gender?: string;
    isAvailable: boolean;
  }

  function updateInformations(human: Human, fieldsToUpdate: Partial<Human>) {
    return { ...human, ...fieldsToUpdate };
  }

  const employee = {
    name: "Adam",
    height: 189,
    weight: 120,
    gender: "male",
    isAvailable: false,
  };

  const updatedEmployee2 = updateInformations(employee, {
    isAvailable: true,
  });

  // console.log(employee);
  // console.log(updatedEmployee2);
};
