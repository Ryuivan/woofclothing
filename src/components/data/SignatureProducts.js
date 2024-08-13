import pinkCrop from "../../assets/product/crop/crop-pink-signature.jpg";
import pinkHoodie from "../../assets/product/hoodies/hoodies-pink-signature.jpg";
import yellowHoodie from "../../assets/product/hoodies/hoodies-yellow-signature.jpg";
import yellowSweater from "../../assets/product/sweater/sweater-yellow-signature.jpg";
import pinkSweater from "../../assets/product/sweater/sweater-pink-signature.jpg";
import yellowTshirt from "../../assets/product/tshirt/baju-yellow-signature.jpg";

const products = [
  {
    id: 1,
    name: "Pink Signature Crop Top",
    image: pinkCrop,
    description: "A stylish crop top made of 100% cotton.",
    price: "99.000",
    stock: 10,
    colors: [
      {
        code: "#C39DBA",
        image: pinkCrop,
      },
    ],
  },
  {
    id: 2,
    name: "Signature Hoodie",
    image: yellowHoodie,
    description:
      "A thick-material hoodie that is still wearable and comfortable.",
    price: "249.000",
    stock: 10,
    colors: [
      {
        code: "#C39DBA",
        image: pinkHoodie,
      },
      {
        code: "#fde97f",
        image: yellowHoodie,
      },
    ],
  },
  {
    id: 3,
    name: "Signature Sweater",
    image: yellowSweater,
    description: "A sweater that offers high levels of comfort and warmth.",
    price: "199.000",
    stock: 10,
    colors: [
      {
        code: "#C39DBA",
        image: pinkSweater,
      },
      {
        code: "#fde97f",
        image: yellowSweater,
      },
    ],
  },
  {
    id: 4,
    name: "Yellow Signature T-shirt",
    image: yellowTshirt,
    description: "A comfy top made of 100% cotton for Men",
    price: "129.000",
    stock: 10,
    colors: [
      {
        code: "#fde97f",
        image: yellowTshirt,
      },
    ],
  },
];

export default products;
