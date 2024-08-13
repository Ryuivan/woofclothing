import pinkCrop from "../../assets/product/crop/crop-pink-signature.jpg";
import blackCrop from "../../assets/product/crop/crop-black.jpg";
import greenCrop from "../../assets/product/crop/crop-green.jpg";
import redCrop from "../../assets/product/crop/crop-red.jpg";
import yellowCrop from "../../assets/product/crop/crop-yellow.jpg";

const cropProducts = [
    {   
        id: 1,
        name: 'Pink Signature Crop Top',
        image: pinkCrop,
        description: 'A stylish crop top made of 100% cotton.',
        price: '99.000',
        stock: 10,
        colors: [
            {
                code: '#C39DBA',
                image: pinkCrop
            }
        ]
    },
    {
        id: 2,
        name: 'Green Crop Top',
        image: greenCrop,
        description: 'A stylish crop top made of 100% cotton.',
        price: '99.000',
        stock: 10,
        colors: [
            {
                code: '#3EA590',
                image: greenCrop
            },
        ]
    },
    {
        id: 3,
        name: 'Black Crop Top',
        image: blackCrop,
        description: 'A stylish crop top made of 100% cotton.',
        price: '99.000',
        stock: 10,
        colors: [
            {
                code: '#626669',
                image: blackCrop
            },
        ]
    },
    {
        id: 4,
        name: 'Red Crop Top',
        image: redCrop,
        description: 'A stylish crop top made of 100% cotton.',
        price: '99.000',
        stock: 10,
        colors: [
            {
                code: '#BB4B63',
                image: redCrop
            },
        ]
    },
    {
        id: 5,
        name: 'Yellow Crop Top',
        image: yellowCrop,
        description: 'A stylish crop top made of 100% cotton.',
        price: '99.000',
        stock: 10,
        colors: [
            {
                code: '#E4D793',
                image: yellowCrop
            },
        ]
    }
]

export default cropProducts;