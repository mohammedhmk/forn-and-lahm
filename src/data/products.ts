export type ShowcaseProduct = {
  slug: string;
  name: string;
  image: string;
};

// صور منتجات حقيقية زوّدنا بها صاحب المطعم مباشرة — وليست صورًا عامة
export const SHOWCASE_PRODUCTS: ShowcaseProduct[] = [
  { slug: "kebab-dajaj", name: "كباب دجاج", image: "/images/products/kebab-dajaj.webp" },
  { slug: "shish-tawook", name: "شيش طاووق", image: "/images/products/shish-tawook.webp" },
  { slug: "kebab-ghanam", name: "كباب غنم", image: "/images/products/kebab-ghanam.webp" },
  { slug: "awsal-lahm", name: "أوصال لحم", image: "/images/products/awsal-lahm.webp" },
  { slug: "jibn-akkawi", name: "فطيرة جبن عكاوي", image: "/images/products/jibn-akkawi.webp" },
  { slug: "jibn-saeel", name: "فطيرة جبن سائل", image: "/images/products/jibn-saeel.webp" },
  { slug: "zaatar-labneh", name: "فطيرة زعتر ولبنة", image: "/images/products/zaatar-labneh.webp" },
  { slug: "labneh-zeitoon", name: "فطيرة لبنة وزيتون", image: "/images/products/labneh-zeitoon.webp" },
];
