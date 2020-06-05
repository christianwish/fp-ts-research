import { compose, max, map, sum, multiply } from 'ramda';

export interface Artikel { preis: number, anzahl?: number, rabatt?: number }

// MwSt 19%
export const plusMwst = (n: number): number => (n * 1.19);
// Rabatt r in Euro
export const rabattInEuro = (r: number) => (n: number): number => (n - r);
// rundet n auf 2 Dezimalstellen
export const runden = (n: number): number => (Math.round(n * 100) / 100);
// gibt 0 wenn n kleiner 0
export const mindestens0: ((n: number) => number) = max(0);

export const nettoZuBrutto = (rabatt = 0) => compose(
    runden,
    plusMwst,
    mindestens0,
    rabattInEuro(rabatt),
);

export const artikelBruttoPreis = (
    artikel: Artikel,
): number => compose(
    mindestens0,
    runden,
    multiply(artikel.anzahl),
    nettoZuBrutto(artikel.rabatt),
)(artikel.preis)

export const artikelPreise: ((a:Artikel[]) => number[]) = map(artikelBruttoPreis);

export const warenkorbWert = compose(runden, sum, artikelPreise);
