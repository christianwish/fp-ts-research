import { lens } from 'ramda';

type ID = string;

interface Cart {
    id?: ID,
    articles: { id?: ID, price: number }[],
    priceTotal?: number
}

export default function () {

    const cart: Cart = {
        articles: [
            { price: 25.95 }
        ]
    };



};
