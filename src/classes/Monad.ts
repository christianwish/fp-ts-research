export interface Monad<T> {
    flatMap: <U>(f: ((x: T) => U)) => U,
}
