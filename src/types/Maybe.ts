import * as C from '../classes/';

export interface Maybe<T>
    extends
        C.Functor<T>,
        C.Monad<T>,
        C.Show,
        C.Eq
{
    value:     () => T,
    isJust:    () => boolean,
    isNothing: () => boolean,
}

export function Maybe <T>(v?: T): Maybe<T> {
    const isJust = (typeof v !== 'undefined');

    const toString = () => {
        if (v === null)            return 'Just (null)';
        if (typeof v === 'string') return `Just ("${v}")`
        // TODO: recognize other instances of Show?
        // if (typeof v === 'object') return `Just ("${JSON.stringify(v)}")`
        if (isJust)                return `Just (${v.toString()})`;

        return 'Nothing';
    };

    return {
        value:      () => v,
        isJust:     () => isJust,
        isNothing:  () => !isJust,
        toString,
        map:        (f) => isJust ? Maybe(f(v)) : Maybe(undefined), // TODO: condition usefull?
        flatMap:    (f) => isJust ? f(v) : undefined, // TODO: condition usefull?
        equals:     (x: C.Eq) => (toString() === x.toString()),
        __typeName: () => 'Maybe',
    };
};
