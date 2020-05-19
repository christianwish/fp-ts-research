import * as C from '../classes/';

export interface Maybe<T>
    extends
        C.Functor<T>,
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
        // if (typeof v === 'object') return `Just ("${JSON.stringify(v)}")`
        if (isJust)                return `Just (${v.toString()})`;

        return 'Nothing';
    };

    return {
        value:      () => v,
        isJust:     () => isJust,
        isNothing:  () => !isJust,
        toString,
        map:        (f) => isJust ? Maybe(f(v)) : Maybe(undefined),
        flatMap:    (f) => isJust ? f(v) : undefined,
        equals:     (x: C.Eq) => (toString() === x.toString()),
        __typeName: () => 'Maybe',
    };
};