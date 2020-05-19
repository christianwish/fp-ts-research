export interface Functor<T> {
    map: <U>(f: ((x: T) => U)) => Functor<U>,
}
