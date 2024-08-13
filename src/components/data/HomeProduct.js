import blackCrop from "../../assets/product/crop/crop-black.jpg";
import blackHoodie from "../../assets/product/hoodies/hoodies-black.jpg";
import blackSweater from "../../assets/product/sweater/sweater-black.jpg";
import blackTshirt from "../../assets/product/tshirt/baju-black.jpg";

const homeProduct = [
  {
    id: 3,
    name: "Black Crop Top",
    image: blackCrop,
    description: "A stylish crop top made of 100% cotton.",
    price: "99.000",
    stock: 10,
    colors: [
      {
        code: "#626669",
        image: blackCrop,
      },
    ],
  },
  {
    id: 9,
    name: "Black Hoodie",
    image: blackHoodie,
    description:
      "A thick-material hoodie that is still wearable and comfortable.",
    price: "249.000",
    stock: 10,
    colors: [
      {
        code: "#626669",
        image: blackHoodie,
      },
    ],
  },
  {
    id: 15,
    name: "Black Sweater",
    image: blackSweater,
    description: "A sweater that offers high levels of comfort and warmth.",
    price: "199.000",
    stock: 10,
    colors: [
      {
        code: "#626669",
        image: blackSweater,
      },
    ],
  },
  {
    id: 19,
    name: "Black T-shirt",
    image: blackTshirt,
    description: "A comfy top made of 100% cotton for Men",
    price: "129.000",
    stock: 10,
    colors: [
      {
        code: "#626669",
        image: blackTshirt,
      },
    ],
  },
];

export default homeProduct;
