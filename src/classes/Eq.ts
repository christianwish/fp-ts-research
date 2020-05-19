export interface Eq {
    equals: (x: Eq) => boolean,
    [key: string]: any
}
