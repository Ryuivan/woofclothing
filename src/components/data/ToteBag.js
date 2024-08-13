import pinkToteBag from '../../assets/product/tote bag/tote-pink.jpg';
import yellowToteBag from '../../assets/product/tote bag/tote-yellow.jpg';

const totebag = [
    {
        id: 23,
        name: 'Pink Tote Bag',
        image: pinkToteBag,
        description: 'A chic little green bag made entirely of canvas.',
        price: '79.000',
        stock: 10,
        colors: [
            {
                code: '#C39DBA',
                image: pinkToteBag
            },
        ]

    },
    {
        id: 24,
        name: 'Yellow Tote Bag',
        image: yellowToteBag,
        description: 'A chic little yellow bag made entirely of canvas.',
        price: '79.000',
        stock: 10,
        colors: [
            {
                code: '#fde97f',
                image: yellowToteBag
            },
        ]
    }
]

export default totebag;