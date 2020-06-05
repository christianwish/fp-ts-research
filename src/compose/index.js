import { max, multiply, compose, sum, map } from 'ramda';

const mwst = n => (n * 1.19);
const rabattInEuro = r => n => (n - r);
const mindestens0  = max(0);
const runden = n => (Math.round(n * 100) / 100);

const nettoZuBrutto = (rabatt = 0) => compose(
    runden,
    mwst,
    mindestens0,
    rabattInEuro(rabatt),
);

const artikelBruttoPreis = (artikel) => compose(
    mindestens0,
    runden,
    multiply(artikel.anzahl),
    nettoZuBrutto(artikel.rabatt),
)(artikel.preis)

const artikelPreise = map(artikelBruttoPreis);
const warenkorbWert = compose(sum, artikelPreise);