interface Address {
  city: string;
  country: string;
}

interface User {
  name: string;
  age: number;
  email: string;
  address?: Address;
}

let user1: User = {
  name: "string",
  age: 10,
  email: "string",
};
