export type SizeOption = {
  label: string;
  price: number;
};

export type MenuCategoryId =
  | "grills"
  | "kibbeh"
  | "sandwiches"
  | "trays"
  | "manakeesh"
  | "pastries"
  | "pizza"
  | "appetizers"
  | "beverages";

export type MenuItem = {
  id: string;
  name: string;
  category: MenuCategoryId;
  sizes: SizeOption[];
  calories?: number;
  image?: string;
  featured?: boolean;
};

export type MenuCategory = {
  id: MenuCategoryId;
  nameAr: string;
  items: MenuItem[];
};

export const MENU_DATA: MenuCategory[] = [
  {
    id: "grills",
    nameAr: "المشاوي",
    items: [
      { id: "kebab-naeemi", name: "كباب نعيمي", category: "grills", sizes: [{ label: "ربع", price: 35 }, { label: "نصف", price: 70 }, { label: "كيلو", price: 130 }], calories: 680, featured: true },
      { id: "kebab-hashi", name: "كباب حاشي", category: "grills", sizes: [{ label: "ربع", price: 35 }, { label: "نصف", price: 70 }, { label: "كيلو", price: 130 }], calories: 720 },
      { id: "kebab-chicken", name: "كباب دجاج", category: "grills", sizes: [{ label: "ربع", price: 30 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 120 }], calories: 560 },
      { id: "kebab-mixed", name: "كباب مشكل", category: "grills", sizes: [{ label: "ربع", price: 30 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 120 }], calories: 640 },
      { id: "kebab-eggplant", name: "كباب باذنجان", category: "grills", sizes: [{ label: "ربع", price: 30 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 120 }], calories: 540 },
      { id: "kebab-iraqi", name: "كباب عراقي", category: "grills", sizes: [{ label: "ربع", price: 35 }, { label: "نصف", price: 70 }, { label: "كيلو", price: 130 }], calories: 540 },
      { id: "kebab-khashkhash", name: "كباب خشخاش", category: "grills", sizes: [{ label: "ربع", price: 35 }, { label: "نصف", price: 70 }, { label: "كيلو", price: 130 }], calories: 540 },
      { id: "mixed-mix", name: "مشكل مكس", category: "grills", sizes: [{ label: "ربع", price: 35 }, { label: "نصف", price: 70 }, { label: "كيلو", price: 130 }], calories: 700 },
      { id: "mixed-meat", name: "مشكل لحم", category: "grills", sizes: [{ label: "ربع", price: 36 }, { label: "نصف", price: 72 }, { label: "كيلو", price: 144 }], calories: 720 },
      { id: "mixed-chicken", name: "مشكل دجاج", category: "grills", sizes: [{ label: "ربع", price: 30 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 120 }], calories: 720 },
      { id: "mixed-awsal", name: "مشكل أوصال", category: "grills", sizes: [{ label: "ربع", price: 40 }, { label: "نصف", price: 80 }, { label: "كيلو", price: 160 }], calories: 720 },
      { id: "awsal-meat", name: "أوصال لحم", category: "grills", sizes: [{ label: "ربع", price: 38 }, { label: "نصف", price: 80 }, { label: "كيلو", price: 140 }], calories: 660, featured: true },
      { id: "shish-tawook", name: "شيش طاووق", category: "grills", sizes: [{ label: "ربع", price: 30 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 120 }], calories: 520 },
      { id: "naeemi-ribs", name: "ريش نعيمي", category: "grills", sizes: [{ label: "ربع", price: 45 }, { label: "نصف", price: 90 }, { label: "كيلو", price: 180 }], calories: 780 },
      { id: "liver", name: "كبده", category: "grills", sizes: [{ label: "ربع", price: 30 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 120 }], calories: 780 },
    ],
  },
  {
    id: "kibbeh",
    nameAr: "الكبة",
    items: [
      { id: "grilled-kibbeh", name: "كبة مشوية", category: "kibbeh", sizes: [{ label: "حبة", price: 7 }], calories: 280 },
      { id: "fried-meat-kibbeh", name: "كبة مقلية لحم", category: "kibbeh", sizes: [{ label: "حبة", price: 4 }], calories: 320 },
      { id: "fried-chicken-kibbeh", name: "كبة مقلية دجاج", category: "kibbeh", sizes: [{ label: "حبة", price: 3 }], calories: 260 },
      { id: "armenian-kibbeh", name: "كبة أرمنية", category: "kibbeh", sizes: [{ label: "حبة", price: 5 }], calories: 380 },
    ]
  },
  {
    id: "sandwiches",
    nameAr: "السندوتشات",
    items: [
      { id: "sandwich-naeemi", name: "كباب نعيمي", category: "sandwiches", sizes: [{ label: "صغير", price: 9 }, { label: "كبير", price: 17 }] },
      { id: "sandwich-hashi", name: "كباب حاشي", category: "sandwiches", sizes: [{ label: "صغير", price: 9 }, { label: "كبير", price: 17 }] },
      { id: "sandwich-chicken", name: "كباب دجاج", category: "sandwiches", sizes: [{ label: "صغير", price: 8 }, { label: "كبير", price: 15 }] },
      { id: "sandwich-awsal", name: "أوصال لحم", category: "sandwiches", sizes: [{ label: "صغير", price: 10 }, { label: "كبير", price: 19 }] },
      { id: "sandwich-shish", name: "شيش طاووق", category: "sandwiches", sizes: [{ label: "صغير", price: 8 }, { label: "كبير", price: 15 }] },
      { id: "sandwich-hamees", name: "ساندويتش حميس", category: "sandwiches", sizes: [{ label: "صغير", price: 9 }, { label: "كبير", price: 17 }] },
    ]
  },
  {
    id: "trays",
    nameAr: "الصواني",
    items: [
      { id: "tray-hamees-soft", name: "حميس ناعم", category: "trays", sizes: [{ label: "حبة", price: 34 }], calories: 850 },
      { id: "tray-hamees-rough", name: "حميس خشن", category: "trays", sizes: [{ label: "حبة", price: 34 }], calories: 850 },
      { id: "tray-hamees-veg", name: "حميس خضار", category: "trays", sizes: [{ label: "حبة", price: 34 }], calories: 680 },
      { id: "tray-kofta-meat", name: "كفتة لحم", category: "trays", sizes: [{ label: "حبة", price: 34 }], calories: 780 },
      { id: "tray-kofta-chicken", name: "كفتة دجاج", category: "trays", sizes: [{ label: "حبة", price: 30 }], calories: 750 },
      { id: "tray-arayes-meat", name: "عرايس لحم", category: "trays", sizes: [{ label: "حبة", price: 29 }], calories: 620 },
      { id: "tray-arayes-meat-cheese", name: "عرايس لحم جبن", category: "trays", sizes: [{ label: "حبة", price: 30 }], calories: 560 },
      { id: "tray-arayes-chicken", name: "عرايس دجاج", category: "trays", sizes: [{ label: "حبة", price: 26 }], calories: 560 },
      { id: "tray-arayes-chicken-cheese", name: "عرايس دجاج جبن", category: "trays", sizes: [{ label: "حبة", price: 27 }], calories: 560 },
    ]
  },
  {
    id: "manakeesh",
    nameAr: "المناقيش",
    items: [
      { id: "man-zaatar", name: "زعتر ساده", category: "manakeesh", sizes: [{ label: "حبة", price: 5 }], calories: 280 },
      { id: "man-zaatar-kashkawan", name: "زعتر جبن قشقوان", category: "manakeesh", sizes: [{ label: "حبة", price: 6 }], calories: 360 },
      { id: "man-zaatar-halloumi", name: "زعتر جبن حلوم", category: "manakeesh", sizes: [{ label: "حبة", price: 8 }], calories: 360 },
      { id: "man-muhammara", name: "محمرة ساده", category: "manakeesh", sizes: [{ label: "حبة", price: 5 }], calories: 300 },
      { id: "man-muhammara-kashkawan", name: "محمرة قشقوان", category: "manakeesh", sizes: [{ label: "حبة", price: 6 }], calories: 380 },
      { id: "man-muhammara-zaatar", name: "محمرة زعتر", category: "manakeesh", sizes: [{ label: "حبة", price: 5 }], calories: 380 },
      { id: "man-muhammara-liquid-cheese", name: "محمرة جبن سايل", category: "manakeesh", sizes: [{ label: "حبة", price: 6 }], calories: 380 },
      { id: "man-labneh-muhammara", name: "لبنه محمره", category: "manakeesh", sizes: [{ label: "حبة", price: 5 }], calories: 380 },
      { id: "man-kashkawan-olive", name: "قشقوان زيتون", category: "manakeesh", sizes: [{ label: "حبة", price: 6 }], calories: 370 },
      { id: "man-kashkawan", name: "قشقوان سادة", category: "manakeesh", sizes: [{ label: "حبة", price: 7 }], calories: 320 },
      { id: "man-halloumi-kashkawan", name: "حلوم قشقوان", category: "manakeesh", sizes: [{ label: "حبة", price: 7 }], calories: 350 },
      { id: "man-spinach-cheese", name: "سبانخ جبن", category: "manakeesh", sizes: [{ label: "حبة", price: 6 }], calories: 350 },
    ]
  },
  {
    id: "pastries",
    nameAr: "الفطائر",
    items: [
      { id: "pas-sfeha-dibs", name: "صفيحة شامية دبس", category: "pastries", sizes: [{ label: "حبة", price: 4 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 120 }], calories: 220 },
      { id: "pas-sfeha-tomato", name: "صفيحة شامية طماطم", category: "pastries", sizes: [{ label: "حبة", price: 4 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 120 }], calories: 210 },
      { id: "pas-spinach", name: "سبانخ", category: "pastries", sizes: [{ label: "حبة", price: 4 }, { label: "نصف", price: 55 }, { label: "كيلو", price: 110 }], calories: 180 },
      { id: "pas-chicken", name: "دجاج ساده", category: "pastries", sizes: [{ label: "حبة", price: 4 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 120 }], calories: 260 },
      { id: "pas-chicken-cheese", name: "دجاج جبن", category: "pastries", sizes: [{ label: "حبة", price: 4 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 120 }], calories: 260 },
      { id: "pas-meat", name: "لحم سادة", category: "pastries", sizes: [{ label: "حبة", price: 4 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 120 }], calories: 320 },
      { id: "pas-meat-cheese", name: "لحم بالجبن", category: "pastries", sizes: [{ label: "حبة", price: 5 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 120 }], calories: 320 },
      { id: "pas-sharhat", name: "شرحات", category: "pastries", sizes: [{ label: "حبة", price: 8 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 120 }], calories: 320 },
      { id: "pas-mujaramsha", name: "مجرمشة", category: "pastries", sizes: [{ label: "حبة", price: 8 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 120 }], calories: 240 },
      { id: "pas-mujaramsha-veg", name: "مجرمشة خضار", category: "pastries", sizes: [{ label: "حبة", price: 8 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 120 }], calories: 230 },
      { id: "pas-akkawi", name: "جبن عكاوي", category: "pastries", sizes: [{ label: "حبة", price: 4 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 110 }], calories: 290 },
      { id: "pas-liquid-cheese", name: "جبن سائل", category: "pastries", sizes: [{ label: "حبة", price: 4 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 110 }], calories: 310 },
      { id: "pas-liquid-cheese-honey", name: "جبن سائل بالعسل", category: "pastries", sizes: [{ label: "حبة", price: 4 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 110 }], calories: 310 },
      { id: "pas-cheddar", name: "جبن شيدر", category: "pastries", sizes: [{ label: "حبة", price: 4 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 110 }], calories: 310 },
      { id: "pas-labneh", name: "لبنة سادة", category: "pastries", sizes: [{ label: "حبة", price: 4 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 110 }], calories: 280 },
      { id: "pas-labneh-spinach", name: "لبنة سبانخ", category: "pastries", sizes: [{ label: "حبة", price: 4 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 110 }], calories: 280 },
      { id: "pas-labneh-olive", name: "لبنة زيتون", category: "pastries", sizes: [{ label: "حبة", price: 4 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 110 }], calories: 300 },
      { id: "pas-labneh-zaatar", name: "لبنة زعتر", category: "pastries", sizes: [{ label: "حبة", price: 4 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 110 }], calories: 320 },
      { id: "pas-labneh-honey", name: "لبنة عسل", category: "pastries", sizes: [{ label: "حبة", price: 4 }, { label: "نصف", price: 60 }, { label: "كيلو", price: 110 }], calories: 290 },
      { id: "pas-egg", name: "بيض ساده", category: "pastries", sizes: [{ label: "حبة", price: 4 }], calories: 290 },
      { id: "pas-egg-cheese", name: "بيض بالجبن", category: "pastries", sizes: [{ label: "حبة", price: 5 }], calories: 290 },
      { id: "pas-sharhat-dough", name: "شرحات بالعجين", category: "pastries", sizes: [{ label: "حبة", price: 18 }, { label: "نصف", price: 70 }, { label: "كيلو", price: 130 }], calories: 350 },
    ]
  },
  {
    id: "pizza",
    nameAr: "البيتزا",
    items: [
      { id: "pizza-veg", name: "بيتزا خضار", category: "pizza", sizes: [{ label: "صغير", price: 15 }, { label: "وسط", price: 20 }, { label: "كبير", price: 25 }], calories: 680 },
      { id: "pizza-margarita", name: "بيتزا مارغريتا", category: "pizza", sizes: [{ label: "صغير", price: 12 }, { label: "وسط", price: 18 }, { label: "كبير", price: 23 }], calories: 760 },
      { id: "pizza-chicken", name: "بيتزا دجاج", category: "pizza", sizes: [{ label: "صغير", price: 12 }, { label: "وسط", price: 23 }, { label: "كبير", price: 28 }], calories: 880 },
      { id: "pizza-pepperoni", name: "بيتزا ببروني", category: "pizza", sizes: [{ label: "صغير", price: 18 }, { label: "وسط", price: 23 }, { label: "كبير", price: 25 }], calories: 940, featured: true },
      { id: "pizza-meat", name: "بيتزا لحم", category: "pizza", sizes: [{ label: "صغير", price: 18 }, { label: "وسط", price: 23 }, { label: "كبير", price: 28 }], calories: 900 },
      { id: "pizza-ranch", name: "بيتزا رانش", category: "pizza", sizes: [{ label: "صغير", price: 15 }, { label: "وسط", price: 23 }, { label: "كبير", price: 28 }], calories: 860 },
      { id: "pizza-sausage", name: "بيتزا نقانق", category: "pizza", sizes: [{ label: "صغير", price: 12 }, { label: "وسط", price: 20 }, { label: "كبير", price: 28 }], calories: 870 },
      { id: "pizza-alfredo", name: "بيتزا الفريدو", category: "pizza", sizes: [{ label: "صغير", price: 12 }, { label: "وسط", price: 18 }, { label: "كبير", price: 24 }], calories: 870 },
      { id: "pizza-osh-bulbul", name: "عش البلبل", category: "pizza", sizes: [{ label: "صغير", price: 12 }, { label: "وسط", price: 18 }, { label: "كبير", price: 23 }], calories: 640 },
      { id: "pizza-four-cheese", name: "ميكس الأجبان الأربعة", category: "pizza", sizes: [{ label: "صغير", price: 12 }, { label: "وسط", price: 18 }, { label: "كبير", price: 23 }], calories: 720 },
    ]
  },
  {
    id: "appetizers",
    nameAr: "المقبلات",
    items: [
      { id: "app-fries", name: "بطاطس", category: "appetizers", sizes: [{ label: "حبة", price: 7 }], calories: 220 },
      { id: "app-vine-leaves", name: "ورق عنب", category: "appetizers", sizes: [{ label: "حبة", price: 7 }], calories: 220 },
      { id: "app-hummus", name: "حمص", category: "appetizers", sizes: [{ label: "حبة", price: 7 }], calories: 220, featured: true },
      { id: "app-baba-ghanoush", name: "بابا غنوج", category: "appetizers", sizes: [{ label: "حبة", price: 7 }], calories: 180 },
      { id: "app-mutabal", name: "متبل", category: "appetizers", sizes: [{ label: "حبة", price: 7 }], calories: 200 },
      { id: "app-garlic", name: "ثوم", category: "appetizers", sizes: [{ label: "حبة", price: 7 }], calories: 90 },
      { id: "app-green-salad", name: "سلطة خضار", category: "appetizers", sizes: [{ label: "حبة", price: 8 }], calories: 140 },
      { id: "app-rocca-salad", name: "سلطة جرجير", category: "appetizers", sizes: [{ label: "حبة", price: 8 }], calories: 130 },
      { id: "app-tabbouleh", name: "تبولة", category: "appetizers", sizes: [{ label: "حبة", price: 8 }], calories: 150 },
      { id: "app-fattoush", name: "فتوش", category: "appetizers", sizes: [{ label: "حبة", price: 8 }], calories: 170 },
    ]
  },
  {
    id: "beverages",
    nameAr: "المشروبات",
    items: [
      { id: "bev-water", name: "ماء", category: "beverages", sizes: [{ label: "حبة", price: 1 }] },
      { id: "bev-soft-drink", name: "مشروبات غازية", category: "beverages", sizes: [{ label: "حبة", price: 3 }], calories: 140 },
      { id: "bev-rabie", name: "عصير ربيع", category: "beverages", sizes: [{ label: "حبة", price: 3 }], calories: 140 },
      { id: "bev-orange", name: "عصير برتقال (200 مل)", category: "beverages", sizes: [{ label: "حبة", price: 7 }], calories: 140 },
      { id: "bev-orange-carrot", name: "برتقال جزر (200 مل)", category: "beverages", sizes: [{ label: "حبة", price: 7 }], calories: 140 },
    ]
  }
];
