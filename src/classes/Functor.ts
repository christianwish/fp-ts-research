export interface Functor<T> {
    map: <U>(f: ((x: T) => U)) => Functor<U>,
    flatMap: <U>(f: ((x: T) => U)) => U, // not functor
    [key: string]: any
}
