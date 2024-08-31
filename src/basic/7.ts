type Details = {
  createdAt: Date;
  updatedAt: Date;
};

type page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: Details;
};

const page2: page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
