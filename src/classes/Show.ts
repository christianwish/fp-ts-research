export interface Show {
    toString: () => string,
    __typeName: () => string,
    [key: string]: any
}
