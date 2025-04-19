export interface WordPair {
  german: string;
  english: string;
  category: string;
}

export const germanWords: WordPair[] = [
  { german: 'Hund', english: 'köpek', category: 'hayvanlar' },
  { german: 'Katze', english: 'kedi', category: 'hayvanlar' },
  { german: 'Haus', english: 'ev', category: 'objeler' },
  { german: 'Brot', english: 'ekmek', category: 'yemek' },
  { german: 'Wasser', english: 'su', category: 'yemek' },
  { german: 'Apfel', english: 'elma', category: 'yemek' },
  { german: 'Buch', english: 'kitap', category: 'obje' },
  { german: 'Auto', english: 'araba', category: 'taşıt' },
  { german: 'Baum', english: 'ağaç', category: 'doğa' },
  { german: 'Sonne', english: 'güneş', category: 'doğa' },
];