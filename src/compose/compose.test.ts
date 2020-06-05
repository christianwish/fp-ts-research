import {
    plusMwst,
    rabattInEuro,
    runden,
    mindestens0,
    nettoZuBrutto,
    artikelBruttoPreis,
    warenkorbWert,
    Artikel,
} from './index';

describe('compose', () => {
    describe('plusMwst(n)', () => {
        it('erhöht n um 19%', () => {
            expect(plusMwst(100)).toBe(119);
            expect(plusMwst(0.95)).toBe(1.1304999999999998);
        });
    });

    describe('rabattInEuro(r)(n)', () => {
        it('zieht r von n ab', () => {
            expect(rabattInEuro(3)(10)).toBe(7);
        });
    });

    describe('runden(n)', () => {
        it('rundet n auf 2 Dezimalstellen', () => {
            expect(runden(3.005)).toBe(3.01);
            expect(runden(3.0005)).toBe(3.00);
            expect(runden(3.5)).toBe(3.5);
        });
    });

    describe('mindestens0(n)', () => {
        it('gibt 0 wenn n kleiner 0', () => {
            expect(mindestens0(0)).toBe(0);
            expect(mindestens0(5)).toBe(5);
            expect(mindestens0(-3)).toBe(0);
        });
    });

    describe('nettoZuBrutto(rabatt)(n)', () => {
        it('kombiniert alle einzelnen funktionen', () => {
            expect(nettoZuBrutto(10)(0)).toBe(0);
            expect(nettoZuBrutto(10)(100)).toBe(107.1);
            expect(nettoZuBrutto(10)(10)).toBe(0);
        });
    });

    describe('artikelBruttoPreis(a)', () => {
        it('kombiniert alle einzelnen funktionen', () => {
            {
                const artikel: Artikel = {
                    preis: 15,
                    anzahl: 2,
                    rabatt: 3,
                };
                expect(artikelBruttoPreis(artikel)).toBe(28.56);
            }
        });
    });

    describe('warenkorbWert(a)', () => {
        it('kombiniert alle einzelnen funktionen', () => {
            const artikel: Artikel[] = [
                { preis: 99.95, anzahl: 1 },
                { preis: 0.05,  anzahl: 4 },
                { preis: 25.95, anzahl: 1 },
                { preis: 13.00, anzahl: 1 },
                { preis: 3,     anzahl: 1 },
                { preis: 35.75, anzahl: 3, rabatt: 4 },
                { preis: 0.99,  anzahl: 1 },
            ];

            expect(warenkorbWert(artikel)).toBe(283.62);
        });
    });
})