import pinkTote from "../../assets/product/tote bag/tote-pink.jpg";
import yellowTote from "../../assets/product/tote bag/tote-yellow.jpg";

const totebag = [
  {
    id: 23,
    name: "Pink Tote Bag",
    image: pinkTote,
    description: "A chic little green bag made entirely of canvas.",
    price: "79.000",
    stock: 10,
    colors: [
      {
        code: "#C39DBA",
        image: pinkTote,
      },
    ],
  },
  {
    id: 24,
    name: "Yellow Tote Bag",
    image: yellowTote,
    description: "A chic little yellow bag made entirely of canvas.",
    price: "79.000",
    stock: 10,
    colors: [
      {
        code: "#fde97f",
        image: yellowTote,
      },
    ],
  },
];

export default totebag;
