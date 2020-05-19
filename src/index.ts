import { Maybe } from './types';

const m = Maybe(3);
console.log(m.toString());

const a = Maybe( { o: 3 } );
console.log(a.toString());

const y = Maybe(Maybe(3));
console.log('y', y.toString());

const x = Maybe("---");
console.log(x.toString());

console.log(y.equals(
    Maybe(Maybe(3))
));